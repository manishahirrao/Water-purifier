import { MongoClient } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'
import { NextResponse } from 'next/server'

// MongoDB connection
let client
let db

async function connectToMongo() {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URL)
    await client.connect()
    db = client.db(process.env.DB_NAME)
  }
  return db
}

// Helper function to handle CORS
function handleCORS(response) {
  response.headers.set('Access-Control-Allow-Origin', process.env.CORS_ORIGINS || '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  return response
}

// OPTIONS handler for CORS
export async function OPTIONS() {
  return handleCORS(new NextResponse(null, { status: 200 }))
}

// Route handler function
async function handleRoute(request, { params }) {
  const { path = [] } = params
  const route = `/${path.join('/')}`
  const method = request.method

  try {
    const db = await connectToMongo()

    // Root endpoint - GET /api/root (since /api/ is not accessible with catch-all)
    if (route === '/root' && method === 'GET') {
      return handleCORS(NextResponse.json({ message: "Hello World" }))
    }
    // Root endpoint - GET /api/root (since /api/ is not accessible with catch-all)
    if (route === '/' && method === 'GET') {
      return handleCORS(NextResponse.json({ message: "Hello World" }))
    }

    // Quote submission - POST /api/quote
    if (route === '/quote' && method === 'POST') {
      const body = await request.json()
      const { name, email, phone, service, message } = body

      if (!name || !email || !phone || !service) {
        return handleCORS(NextResponse.json({ error: 'Missing required fields' }, { status: 400 }))
      }

      const quote = {
        id: uuidv4(),
        name,
        email,
        phone,
        service,
        message: message || '',
        createdAt: new Date().toISOString(),
        status: 'pending'
      }

      const collection = db.collection('quotes')
      await collection.insertOne(quote)

      return handleCORS(NextResponse.json({ 
        message: 'Quote request submitted successfully', 
        id: quote.id 
      }))
    }

    // Contact submission - POST /api/contact
    if (route === '/contact' && method === 'POST') {
      const body = await request.json()
      const { name, email, phone, subject, message } = body

      if (!name || !email || !phone || !subject || !message) {
        return handleCORS(NextResponse.json({ error: 'All fields are required' }, { status: 400 }))
      }

      const contact = {
        id: uuidv4(),
        name,
        email,
        phone,
        subject,
        message,
        createdAt: new Date().toISOString(),
        status: 'new'
      }

      const collection = db.collection('contacts')
      await collection.insertOne(contact)

      return handleCORS(NextResponse.json({ 
        message: 'Message sent successfully', 
        id: contact.id 
      }))
    }

    // Get all quotes - GET /api/quotes
    if (route === '/quotes' && method === 'GET') {
      const collection = db.collection('quotes')
      const quotes = await collection.find({}).sort({ createdAt: -1 }).toArray()
      return handleCORS(NextResponse.json({ quotes }))
    }

    // Get all contacts - GET /api/contacts
    if (route === '/contacts' && method === 'GET') {
      const collection = db.collection('contacts')
      const contacts = await collection.find({}).sort({ createdAt: -1 }).toArray()
      return handleCORS(NextResponse.json({ contacts }))
    }

    // Status endpoints - POST /api/status
    if (route === '/status' && method === 'POST') {
      const body = await request.json()
      
      if (!body.client_name) {
        return handleCORS(NextResponse.json(
          { error: "client_name is required" }, 
          { status: 400 }
        ))
      }

      const statusObj = {
        id: uuidv4(),
        client_name: body.client_name,
        timestamp: new Date()
      }

      await db.collection('status_checks').insertOne(statusObj)
      return handleCORS(NextResponse.json(statusObj))
    }

    // Status endpoints - GET /api/status
    if (route === '/status' && method === 'GET') {
      const statusChecks = await db.collection('status_checks')
        .find({})
        .limit(1000)
        .toArray()

      // Remove MongoDB's _id field from response
      const cleanedStatusChecks = statusChecks.map(({ _id, ...rest }) => rest)
      
      return handleCORS(NextResponse.json(cleanedStatusChecks))
    }

    // Route not found
    return handleCORS(NextResponse.json(
      { error: `Route ${route} not found` }, 
      { status: 404 }
    ))

  } catch (error) {
    console.error('API Error:', error)
    return handleCORS(NextResponse.json(
      { error: "Internal server error" }, 
      { status: 500 }
    ))
  }
}

// Export all HTTP methods
export const GET = handleRoute
export const POST = handleRoute
export const PUT = handleRoute
export const DELETE = handleRoute
export const PATCH = handleRoute