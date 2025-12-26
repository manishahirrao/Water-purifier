'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Award, Users, Clock, Shield, ThumbsUp } from 'lucide-react'
import Navbar from '@/components/Navbar.js'
import Footer from '@/components/Footer.js'
import WhatsAppFloat from '@/components/WhatsAppFloat.js'
import QuoteModal from '@/components/QuoteModal.js'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useState } from 'react'

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
            src="https://images.unsplash.com/photo-1584677191047-38f48d0db64e" 
            alt="About Us"
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
                <img 
                  src="https://images.unsplash.com/photo-1662647343528-f7a5ed62c2dd" 
                  alt="RO Service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Professional RO Water Purifier Servicing, Repairs & Upkeep
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                At RO Service Center, we are committed to delivering reliable and efficient RO repair and maintenance services. With over 10 years of experience in the water purification industry, our team of 70+ expert technicians ensures that your water filters and purifiers function at their best.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our mission is to provide clean, safe, and healthy drinking water through innovative solutions and quality services. As an independent RO service provider, we guarantee service within just 4 hours!
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Get Free Quote
              </Button>
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
                Why Choose Us
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
                <img 
                  src="https://images.unsplash.com/photo-1580893246395-52aead8960dc" 
                  alt="Our Values"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
              </div>
            </motion.div>
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
