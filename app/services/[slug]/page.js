'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Phone, CheckCircle, Clock, Award, ChevronRight } from 'lucide-react'
import Navbar from '@/components/Navbar.js'
import Footer from '@/components/Footer.js'
import WhatsAppFloat from '@/components/WhatsAppFloat.js'
import QuoteModal from '@/components/QuoteModal.js'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useState } from 'react'
import Link from 'next/link'

export default function ServiceDetail() {
  const params = useParams()
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const servicesData = {
    'ro-repair-maintenance': {
      title: 'RO Repair & Maintenance',
      description: 'We diagnose and fix issues with all types of RO systems, ensuring optimal performance.',
      image: 'https://images.unsplash.com/photo-1584677191047-38f48d0db64e',
      detailedDescription: 'Our expert technicians are trained to handle all types of RO water purifier repairs and maintenance. Whether your RO system has low water flow, unusual taste or odor, leaks, or complete breakdown, we provide comprehensive solutions to restore optimal performance.',
      features: [
        'Complete system diagnosis and troubleshooting',
        'All major brands supported (Kent, Aquaguard, Pureit, etc.)',
        'Quick turnaround time - same day service available',
        'Warranty on all repairs',
        'Genuine spare parts only',
        'Post-service water quality testing'
      ],
      benefits: [
        'Extends the life of your RO system',
        'Ensures clean and safe drinking water',
        'Prevents costly breakdowns',
        'Improves water flow and taste',
        'Regular maintenance saves money long-term'
      ],
      process: [
        'Book service through call or online',
        'Technician arrives within 4 hours',
        'Complete system inspection and diagnosis',
        'Detailed explanation of issues found',
        'Transparent pricing before work begins',
        'Expert repair with quality parts',
        'Water quality testing and handover'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1584677191047-38f48d0db64e',
        'https://images.unsplash.com/photo-1591805381693-1fc3d4f94956',
        'https://images.unsplash.com/photo-1662647344062-b0cdb1ed7227'
      ]
    },
    'ro-installation-replacement': {
      title: 'RO Installation & Replacement',
      description: 'Professional installation and replacement of RO systems for homes and businesses.',
      image: 'https://images.unsplash.com/photo-1662647344507-3c22aa88397d',
      detailedDescription: 'Get your new RO water purifier professionally installed by our certified technicians. We ensure proper setup, optimal placement, and complete system integration for maximum efficiency and longevity of your water purification system.',
      features: [
        'Professional installation of all brands',
        'Free site inspection and consultation',
        'Proper water pressure assessment',
        'Installation warranty included',
        'Old system removal and disposal',
        'Complete system testing and certification'
      ],
      benefits: [
        'Ensures optimal system performance',
        'Prevents future leaks and issues',
        'Maximizes filter life',
        'Professional advice on placement',
        'Peace of mind with warranty coverage'
      ],
      process: [
        'Schedule installation appointment',
        'Technician conducts site survey',
        'Assessment of water quality and pressure',
        'Recommendation of best installation location',
        'Professional installation with quality fittings',
        'System testing and water quality check',
        'Usage demonstration and handover'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1662647344507-3c22aa88397d',
        'https://images.unsplash.com/photo-1662647343528-f7a5ed62c2dd',
        'https://images.unsplash.com/photo-1662647344062-b0cdb1ed7227'
      ]
    },
    'water-purifier-servicing': {
      title: 'Water Purifier Servicing',
      description: 'Regular servicing to enhance the efficiency and longevity of your water purifiers.',
      image: 'https://images.unsplash.com/photo-1662647344062-b0cdb1ed7227',
      detailedDescription: 'Regular servicing is essential to maintain your water purifier\'s performance and ensure clean, safe drinking water. Our comprehensive servicing includes cleaning, filter checks, and performance optimization.',
      features: [
        'Thorough cleaning of all components',
        'Filter condition assessment',
        'Membrane cleaning and inspection',
        'Performance and flow rate check',
        'Water quality testing (TDS check)',
        'Sanitization of water storage tank'
      ],
      benefits: [
        'Maintains water purity standards',
        'Extends equipment lifespan',
        'Prevents bacterial growth',
        'Ensures optimal water flow',
        'Early detection of potential issues'
      ],
      process: [
        'Schedule regular service',
        'Technician inspection and assessment',
        'Complete system cleaning',
        'Filter and membrane check',
        'Performance optimization',
        'TDS and water quality testing',
        'Service report and recommendations'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1662647344062-b0cdb1ed7227',
        'https://images.unsplash.com/photo-1584677191047-38f48d0db64e',
        'https://images.unsplash.com/photo-1591805381693-1fc3d4f94956'
      ]
    },
    'filter-membrane-replacement': {
      title: 'Filter & Membrane Replacement',
      description: 'High-quality replacement filters and membranes for better water quality.',
      image: 'https://images.unsplash.com/photo-1662647343354-5a03bbbd1d45',
      detailedDescription: 'Filters and membranes are the heart of your RO system. We provide genuine, high-quality replacement parts that ensure your water purifier continues to deliver pure, safe drinking water.',
      features: [
        'Genuine filters for all brands',
        'Sediment, carbon, and RO membrane replacement',
        'Post-carbon and inline filters',
        'Expert installation included',
        'Quality certification on all parts',
        'Disposal of old filters'
      ],
      benefits: [
        'Improved water taste and quality',
        'Better contaminant removal',
        'Extended system life',
        'Optimal water flow restored',
        'Health and safety assurance'
      ],
      process: [
        'Assess filter replacement needs',
        'Recommend appropriate filter types',
        'Source genuine replacement parts',
        'Professional installation',
        'System flushing and testing',
        'Water quality verification',
        'Filter replacement schedule guidance'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1662647343354-5a03bbbd1d45',
        'https://images.unsplash.com/photo-1662647344062-b0cdb1ed7227',
        'https://images.pexels.com/photos/443413/pexels-photo-443413.jpeg'
      ]
    },
    'amc-plans': {
      title: 'AMC Plans',
      description: 'Affordable Annual Maintenance Contracts to keep your water purification system in top condition.',
      image: 'https://images.pexels.com/photos/443413/pexels-photo-443413.jpeg',
      detailedDescription: 'Our Annual Maintenance Contract (AMC) plans provide hassle-free, comprehensive care for your water purifier throughout the year. Enjoy priority service, regular maintenance, and significant cost savings.',
      features: [
        'Regular scheduled servicing (quarterly/bi-annual)',
        'Priority service and support',
        'Free filter replacements (based on plan)',
        'Discounted rates on repairs and parts',
        'Free water quality testing',
        '24/7 customer support'
      ],
      benefits: [
        'Hassle-free maintenance',
        'Significant cost savings',
        'Extended equipment life',
        'Consistent water quality',
        'Peace of mind',
        'No unexpected repair costs'
      ],
      process: [
        'Choose suitable AMC plan',
        'Complete registration and payment',
        'Receive AMC schedule and benefits',
        'Automatic service reminders',
        'Regular technician visits as per plan',
        'Priority response for issues',
        'Annual plan renewal with benefits'
      ],
      gallery: [
        'https://images.pexels.com/photos/443413/pexels-photo-443413.jpeg',
        'https://images.unsplash.com/photo-1662647343528-f7a5ed62c2dd',
        'https://images.unsplash.com/photo-1580893246395-52aead8960dc'
      ]
    },
    'minor-repair': {
      title: 'Minor Repair',
      description: 'Quick and efficient minor repairs to keep your water purifier running smoothly.',
      image: 'https://images.unsplash.com/photo-1591805381693-1fc3d4f94956',
      detailedDescription: 'Don\'t let small issues become big problems. Our quick minor repair service addresses common water purifier issues promptly and affordably, ensuring your system runs smoothly.',
      features: [
        'Same day service for minor issues',
        'Affordable and transparent pricing',
        'Quick diagnostics and fixes',
        'Common issue resolution',
        'Expert technicians',
        'No hidden charges'
      ],
      benefits: [
        'Prevents major breakdowns',
        'Cost-effective solutions',
        'Minimal downtime',
        'Quick response time',
        'Professional workmanship'
      ],
      process: [
        'Report the issue via call/online',
        'Quick assessment by technician',
        'On-the-spot minor repairs',
        'Testing and verification',
        'Payment and service completion',
        'Service warranty provided'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1591805381693-1fc3d4f94956',
        'https://images.unsplash.com/photo-1584677191047-38f48d0db64e',
        'https://images.unsplash.com/photo-1662647344062-b0cdb1ed7227'
      ]
    }
  }

  const service = servicesData[params.slug] || servicesData['ro-repair-maintenance']

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
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 text-white/80 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight size={16} />
              <Link href="/services" className="hover:text-white">Services</Link>
              <ChevronRight size={16} />
              <span className="text-white">{service.title}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div variants={fadeInUp}>
                <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Service Overview
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.detailedDescription}
                  </p>
                </Card>
              </motion.div>

              {/* Features */}
              <motion.div variants={fadeInUp}>
                <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    What's Included
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Benefits */}
              <motion.div variants={fadeInUp}>
                <Card className="p-8 bg-gradient-to-br from-blue-600 to-cyan-600 border-0 shadow-xl">
                  <h2 className="text-3xl font-bold mb-6 text-white">
                    Key Benefits
                  </h2>
                  <div className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Award className="text-yellow-300 flex-shrink-0 mt-1" size={20} />
                        <span className="text-white">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Process */}
              <motion.div variants={fadeInUp}>
                <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Our Process
                  </h2>
                  <div className="space-y-4">
                    {service.process.map((step, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1 pt-2">
                          <p className="text-gray-700">{step}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Gallery */}
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Service Gallery
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {service.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      className="relative h-64 rounded-lg overflow-hidden shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={image} 
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <motion.div variants={fadeInUp}>
                <Card className="p-6 bg-gradient-to-br from-blue-600 to-cyan-600 border-0 shadow-xl sticky top-24">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Get This Service
                  </h3>
                  <p className="text-white/90 mb-6">
                    Contact us now to schedule this service. Our experts are ready to help!
                  </p>
                  <div className="space-y-3">
                    <Button 
                      size="lg"
                      className="w-full bg-white text-blue-600 hover:bg-blue-50"
                      onClick={() => setIsQuoteModalOpen(true)}
                    >
                      Get Free Quote
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600"
                      asChild
                    >
                      <a href="tel:7739692808" className="flex items-center justify-center">
                        <Phone className="mr-2" size={18} />
                        Call: 7739692808
                      </a>
                    </Button>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="flex items-center gap-3 text-white mb-3">
                      <Clock size={20} />
                      <div>
                        <p className="font-semibold">Service Time</p>
                        <p className="text-sm text-white/80">Within 4 hours</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <Award size={20} />
                      <div>
                        <p className="font-semibold">Warranty</p>
                        <p className="text-sm text-white/80">Service guaranteed</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <WhatsAppFloat />
    </div>
  )
}
