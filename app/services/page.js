'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
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
      image: 'https://images.unsplash.com/photo-1584677191047-38f48d0db64e',
      slug: 'ro-repair-maintenance',
      features: ['Complete system diagnosis', 'All brands supported', 'Quick turnaround', 'Warranty on repairs']
    },
    {
      title: 'RO Installation & Replacement',
      description: 'Professional installation and replacement of RO systems for homes and businesses.',
      image: 'https://images.unsplash.com/photo-1662647344507-3c22aa88397d',
      slug: 'ro-installation-replacement',
      features: ['Professional setup', 'All brands installation', 'Free consultation', 'Installation warranty']
    },
    {
      title: 'Water Purifier Servicing',
      description: 'Regular servicing to enhance the efficiency and longevity of your water purifiers.',
      image: 'https://images.unsplash.com/photo-1662647344062-b0cdb1ed7227',
      slug: 'water-purifier-servicing',
      features: ['Thorough cleaning', 'Performance check', 'Filter inspection', 'Water quality testing']
    },
    {
      title: 'Filter & Membrane Replacement',
      description: 'High-quality replacement filters and membranes for better water quality.',
      image: 'https://images.unsplash.com/photo-1662647343354-5a03bbbd1d45',
      slug: 'filter-membrane-replacement',
      features: ['Genuine parts', 'All filter types', 'Expert installation', 'Quality assured']
    },
    {
      title: 'AMC Plans',
      description: 'Affordable Annual Maintenance Contracts to keep your water purification system in top condition.',
      image: 'https://images.pexels.com/photos/443413/pexels-photo-443413.jpeg',
      slug: 'amc-plans',
      features: ['Regular servicing', 'Priority support', 'Discounted rates', 'Free checkups']
    },
    {
      title: 'Minor Repair',
      description: 'Quick and efficient minor repairs to keep your water purifier running smoothly.',
      image: 'https://images.unsplash.com/photo-1591805381693-1fc3d4f94956',
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
          <img 
            src="https://images.unsplash.com/photo-1662647343528-f7a5ed62c2dd" 
            alt="Services"
            className="w-full h-full object-cover opacity-20"
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
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Link href={`/services/${service.slug}`}>
                  <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <ChevronRight size={16} className="text-blue-600 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                        asChild
                      >
                        <span className="flex items-center justify-center">
                          View Details
                          <ChevronRight className="ml-2" size={18} />
                        </span>
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
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
