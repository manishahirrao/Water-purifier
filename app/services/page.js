'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Check, Clock, Shield, Zap, Phone } from 'lucide-react'
import Image from 'next/image'
import Navbar from '@/components/Navbar.js'
import Footer from '@/components/Footer.js'
import WhatsAppFloat from '@/components/WhatsAppFloat.js'
import QuoteModal from '@/components/QuoteModal.js'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useState } from 'react'

export default function Services() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const services = [
    {
      title: 'RO Repair & Maintenance',
      description: 'We diagnose and fix issues with all types of RO systems, ensuring optimal performance.',
      image: '/RO Repair & Maintenance.webp',
      slug: 'ro-repair-maintenance',
      features: ['Complete system diagnosis', 'All brands supported', 'Quick turnaround', 'Warranty on repairs']
    },
    {
      title: 'RO Installation & Replacement',
      description: 'Professional installation and replacement of RO systems for homes and businesses.',
      image: '/RO Installation & Replacement.png',
      slug: 'ro-installation-replacement',
      features: ['Professional setup', 'All brands installation', 'Free consultation', 'Installation warranty']
    },
    {
      title: 'Water Purifier Servicing',
      description: 'Regular servicing to enhance the efficiency and longevity of your water purifiers.',
      image: '/Water Purifier Servicing.jpg',
      slug: 'water-purifier-servicing',
      features: ['Thorough cleaning', 'Performance check', 'Filter inspection', 'Water quality testing']
    },
    {
      title: 'Filter & Membrane Replacement',
      description: 'High-quality replacement filters and membranes for better water quality.',
      image: '/Filter & Membrane Replacement.jpeg',
      slug: 'filter-membrane-replacement',
      features: ['Genuine parts', 'All filter types', 'Expert installation', 'Quality assured']
    },
    {
      title: 'AMC Plans',
      description: 'Affordable Annual Maintenance Contracts to keep your water purification system in top condition.',
      image: '/AMC Plans.png',
      slug: 'amc-plans',
      features: ['Regular servicing', 'Priority support', 'Discounted rates', 'Free checkups']
    },
    {
      title: 'Minor Repair',
      description: 'Quick and efficient minor repairs to keep your water purifier running smoothly.',
      image: '/Minor Repair.jpg',
      slug: 'minor-repair',
      features: ['Same day service', 'Affordable pricing', 'Quick fixes', 'Expert technicians']
    }
  ]

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
        staggerChildren: 0.15
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
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
            src="/service-hero.webp" 
            alt="Our Services"
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
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Comprehensive water purifier solutions for your home and business
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <div className="space-y-6 md:space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0 md:w-1/3">
                    <div className="relative h-64 w-full md:h-full">
                      <Image 
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={index < 3} // Only preload first 3 images
                      />
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex-1">
                    <div className="uppercase tracking-wide text-xs md:text-sm text-blue-600 font-semibold mb-2">Service</div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                    <p className="text-gray-600 mb-6 text-sm md:text-base">{service.description}</p>
                    
                    <div className="mt-6">
                      <h3 className="text-base md:text-lg font-medium text-gray-900 mb-3 flex items-center">
                        <Zap className="h-4 w-4 text-yellow-500 mr-2" />
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-start py-1">
                            <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2" />
                            <span className="text-sm md:text-base text-gray-700 leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
                      <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-wrap gap-3">
                          <div className="flex items-center bg-blue-50 px-3 py-1.5 rounded-full">
                            <Clock className="h-4 w-4 text-blue-600 mr-1.5" />
                            <span className="text-xs font-medium text-blue-700">Quick service</span>
                          </div>
                          <div className="flex items-center bg-green-50 px-3 py-1.5 rounded-full">
                            <Shield className="h-4 w-4 text-green-600 mr-1.5" />
                            <span className="text-xs font-medium text-green-700">Warranty included</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                          <a 
                            href="tel:7739692808"
                            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-medium transition-all duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg active:translate-y-0 active:shadow-md"
                          >
                            <Phone className="h-4 w-4" />
                            <span>Call Now</span>
                          </a>
                          <Button 
                            onClick={() => setIsQuoteModalOpen(true)}
                            className="bg-blue-600 hover:bg-blue-700 text-white border-0 px-5 py-3 font-medium transition-all duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg active:translate-y-0 active:shadow-md"
                          >
                            Get a Quote
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
            Need Professional Service?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free quote for any of our services. Our experts are ready to help!
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
