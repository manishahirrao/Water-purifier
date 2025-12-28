'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2" size={18} />
          Back to Home
        </Link>

        <motion.article 
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: December 28, 2024</p>

          <div className="prose max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Introduction</h2>
              <p>
                Welcome to RO Service Center. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Services</h2>
              <p>
                We provide professional RO water purifier installation, repair, and maintenance services. All services are subject to availability and our acceptance of your service request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Service Appointments</h2>
              <p>When you book a service appointment with us, you agree to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Be available at the scheduled service time</li>
                <li>Provide a safe working environment for our technicians</li>
                <li>Make necessary arrangements for our technicians to access the equipment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Pricing and Payment</h2>
              <p>
                Our service charges are based on the type of service required. We will provide you with a quote before starting any work. Payment is due upon completion of the service unless otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Cancellation and Rescheduling</h2>
              <p>
                If you need to cancel or reschedule your service appointment, please provide us with at least 24 hours' notice. We reserve the right to charge a cancellation fee for appointments cancelled with less than 24 hours' notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Warranty</h2>
              <p>
                We provide a 30-day service warranty on all repairs. This warranty covers the specific repair work performed and does not cover new issues or problems unrelated to the original service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, RO Service Center shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of any changes by posting the updated Terms on our website and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-4">
                <strong>Email:</strong> support@roservicecenter.in<br />
                <strong>Phone:</strong> 7739692808
              </p>
            </section>
          </div>
        </motion.article>
      </main>

      <Footer />
    </div>
  )
}
