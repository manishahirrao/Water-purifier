'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function CookiePolicy() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: December 28, 2024</p>

          <div className="prose max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the website owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. How We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Essential Cookies:</strong> These are necessary for the website to function and cannot be switched off.</li>
                <li><strong>Performance Cookies:</strong> These help us understand how visitors interact with our website.</li>
                <li><strong>Functional Cookies:</strong> These enable enhanced functionality and personalization.</li>
                <li><strong>Analytics Cookies:</strong> We use Google Analytics to collect information about how visitors use our website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Managing Cookies</h2>
              <p>
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Third-Party Cookies</h2>
              <p>
                We may use third-party services that place cookies on your device. These services help us analyze how users use our website and display advertisements. These third parties may collect information about your online activities over time and across different websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Your Choices Regarding Cookies</h2>
              <p>You have several options to manage cookies:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Modify your browser settings to accept or reject cookies</li>
                <li>Use browser add-ons to control cookies</li>
                <li>Use the cookie consent banner on our website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Changes to This Cookie Policy</h2>
              <p>
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at:
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
