'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle, Award, Users, Clock, Shield, ThumbsUp, Phone } from 'lucide-react'
import Navbar from '@/components/Navbar.js'
import Footer from '@/components/Footer.js'
import WhatsAppFloat from '@/components/WhatsAppFloat.js'
import QuoteModal from '@/components/QuoteModal.js'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useState } from 'react'
import Head from 'next/head'

// SEO Metadata
const metadata = {
  title: 'About Us - Professional RO Service Center | Expert Water Purifier Services',
  description: 'Learn about RO Service Center - Your trusted partner for professional RO water purifier services, repairs, and maintenance. 70+ expert technicians, 4-hour service guarantee, and 10+ years of experience in Patna.',
  keywords: 'RO service, water purifier repair, RO maintenance, RO installation, water filter service, RO service center, professional RO technician, RO repair near me, Patna',
  openGraph: {
    title: 'About RO Service Center | Professional Water Purifier Services in Patna',
    description: 'Expert RO water purifier services with 70+ technicians and 4-hour service guarantee. 10+ years of trusted service in Patna.',
    url: 'https://roservicecenter.in/about',
    siteName: 'RO Service Center',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About RO Service Center | Professional Water Purifier Services in Patna',
    description: 'Expert RO water purifier services with 70+ technicians and 4-hour service guarantee in Patna.',
  },
  alternates: {
    canonical: 'https://roservicecenter.in/about',
  },
}

// Structured Data for Rich Snippets
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'RO Service Center',
  image: 'https://roservicecenter.in/logo.png',
  '@id': 'https://roservicecenter.in',
  url: 'https://roservicecenter.in',
  telephone: '+917739692808',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Patna',
    addressLocality: 'Patna',
    addressRegion: 'Bihar',
    postalCode: '800001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.5941,
    longitude: 85.1376,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '07:00',
    closes: '23:00',
  },
  sameAs: [
    'https://www.facebook.com/roservicecenter',
    'https://www.instagram.com/roservicecenter',
    'https://twitter.com/roservicecenter',
  ],
}

export default function About() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const features = [
    {
      icon: Users,
      title: '70+ Expert Technicians',
      description: 'Experienced and certified professionals ready to serve you'
    },
    {
      icon: Clock,
      title: '4 Hours Service Guarantee',
      description: 'We guarantee service within just 4 hours of your call'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Only genuine spare parts and components used'
    },
    {
      icon: Shield,
      title: 'Independent Provider',
      description: 'Unbiased service for all brands of water purifiers'
    },
    {
      icon: ThumbsUp,
      title: 'Transparent Pricing',
      description: 'No hidden costs, competitive rates for all services'
    },
    {
      icon: CheckCircle,
      title: '10+ Years Experience',
      description: 'Trusted by thousands of customers across India'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://roservicecenter.in/about" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://roservicecenter.in/about" />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content="https://roservicecenter.in/about-og.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://roservicecenter.in/about" />
        <meta property="twitter:title" content={metadata.openGraph.title} />
        <meta property="twitter:description" content={metadata.openGraph.description} />
        <meta property="twitter:image" content="https://roservicecenter.in/about-og.jpg" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      
      <Navbar onQuoteClick={() => setIsQuoteModalOpen(true)} />
      
    
      
      {/* Hero Section */}
      <motion.section 
        className="relative py-32 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 opacity-90" />
        <div className="absolute inset-0">
          <Image 
            src="/about-hero.webp" 
            alt="About Us"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About RO Service Center
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your trusted partner for professional water purifier services across India
          </motion.p>
        </div>
      </motion.section>


      {/* About Content */}
      <motion.section 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div variants={fadeInUp}>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/about.webp" 
                  alt="Professional RO Service Technician at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  title="Professional RO Service Expert"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Professional RO Water Purifier Servicing & Repairs in Patna
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                At RO Service Center, we are committed to delivering reliable and efficient RO repair and maintenance services. With over 10 years of experience in the water purification industry, our team of 70+ expert technicians ensures that your water filters and purifiers function at their best.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our mission is to provide clean, safe, and healthy drinking water through innovative solutions and quality services. As an independent RO service provider, we guarantee service within just 4 hours!
              </p>
              <a 
                href="tel:7739692808"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg font-semibold"
              >
                <Phone className="mr-2" size={20} />
                Call Now: 7739692808
              </a>
            </motion.div>
          </div>

          {/* Why Choose Us */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Why Choose RO Service Center in Patna
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We do our best to provide excellent water purifier service
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <Card className="p-8 h-full bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-0">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mb-6"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="text-white" size={32} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Values Section */}
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Our Commitment to Quality
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                At RO Service Center, we believe in delivering exceptional service with a commitment to quality and customer satisfaction. Our team consists of experienced and certified technicians who are well-versed in handling all types of RO water purifiers.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Whether it's installation, repair, or maintenance, we ensure that our services meet the highest industry standards. Transparency and affordability are at the core of our business.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We offer competitive pricing with no hidden costs, ensuring that you get the best value for your money. Additionally, we use only high-quality spare parts and components to enhance the longevity and efficiency of your RO system.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/about-values.jpeg" 
                  alt="Our Core Values at RO Service Center - Quality, Reliability, and Customer Satisfaction"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                  title="Our Commitment to Quality RO Service"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our RO services
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: 'How often should I service my RO water purifier?',
                answer: 'We recommend servicing your RO water purifier every 6 months to ensure optimal performance and water quality. However, if you notice any issues with water taste, flow rate, or quality, you should get it serviced immediately.'
              },
              {
                question: 'What are the signs that my RO purifier needs servicing?',
                answer: 'Common signs include: reduced water flow, unusual noise, water leakage, change in water taste or odor, indicator lights showing filter replacement, and increased TDS levels in purified water.'
              },
              {
                question: 'Do you provide service for all RO brands?',
                answer: 'Yes, we provide service for all major RO water purifier brands including Kent, Aquaguard, Pureit, Livpure, and more. Our technicians are trained to handle various models and brands.'
              },
              {
                question: 'How long does a typical RO service take?',
                answer: 'A standard RO service typically takes 30-45 minutes. However, if there are additional repairs or part replacements needed, it might take longer. Our technicians will provide you with an estimated time after diagnosis.'
              },
              {
                question: 'What is included in your RO service?',
                answer: 'Our comprehensive RO service includes: filter cleaning/replacement, membrane check, UV lamp check (if applicable), tank sanitization, flow rate check, TDS level testing, and overall system inspection to ensure everything is working properly.'
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                variants={fadeInUp}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
              >
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                    <div className="w-6 h-6 flex-shrink-0 ml-4 transform group-hover:rotate-180 transition-transform duration-200">
                      <svg className="w-full h-full text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 -mt-4 text-gray-600">
                    {faq.answer}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Professional Service?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today and get your water purifier serviced by experts!
          </p>
          <Button 
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            onClick={() => setIsQuoteModalOpen(true)}
          >
            Get Free Quote Now
          </Button>
        </div>
      </motion.section>

      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <WhatsAppFloat />
    </div>
  )
}
