'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Phone, CheckCircle, Award, Users, Clock, Star, ChevronRight } from 'lucide-react'
import Navbar from '@/components/Navbar.js'
import Footer from '@/components/Footer.js'
import QuoteModal from '@/components/QuoteModal.js'
import WhatsAppFloat from '@/components/WhatsAppFloat.js'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  const services = [
    {
      title: 'RO Repair & Maintenance',
      description: 'We diagnose and fix issues with all types of RO systems, ensuring optimal performance.',
      image: 'https://images.unsplash.com/photo-1584677191047-38f48d0db64e',
      slug: 'ro-repair-maintenance'
    },
    {
      title: 'RO Installation & Replacement',
      description: 'Professional installation and replacement of RO systems for homes and businesses.',
      image: 'https://images.unsplash.com/photo-1662647344507-3c22aa88397d',
      slug: 'ro-installation-replacement'
    },
    {
      title: 'Water Purifier Servicing',
      description: 'Regular servicing to enhance the efficiency and longevity of your water purifiers.',
      image: 'https://images.unsplash.com/photo-1662647344062-b0cdb1ed7227',
      slug: 'water-purifier-servicing'
    },
    {
      title: 'Filter & Membrane Replacement',
      description: 'High-quality replacement filters and membranes for better water quality.',
      image: 'https://images.unsplash.com/photo-1662647343354-5a03bbbd1d45',
      slug: 'filter-membrane-replacement'
    },
    {
      title: 'AMC Plans',
      description: 'Affordable Annual Maintenance Contracts to keep your water purification system in top condition.',
      image: 'https://images.pexels.com/photos/443413/pexels-photo-443413.jpeg',
      slug: 'amc-plans'
    },
    {
      title: 'Minor Repair',
      description: 'Quick and efficient minor repairs to keep your water purifier running smoothly.',
      image: 'https://images.unsplash.com/photo-1591805381693-1fc3d4f94956',
      slug: 'minor-repair'
    }
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Excellent service! The technician arrived within 4 hours and fixed my RO system perfectly. Highly professional.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    {
      name: 'Priya Sharma',
      rating: 5,
      text: 'Very satisfied with the AMC plan. Regular maintenance keeps my water purifier running smoothly.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    },
    {
      name: 'Amit Patel',
      rating: 5,
      text: 'Transparent pricing and quality service. The technician was knowledgeable and explained everything clearly.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
    },
    {
      name: 'Sneha Reddy',
      rating: 5,
      text: 'Best RO service provider! Quick response, affordable rates, and excellent customer support.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
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
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Navbar onQuoteClick={() => setIsQuoteModalOpen(true)} />
      
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity, scale }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 opacity-90" />
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1662647343528-f7a5ed62c2dd" 
            alt="Water Purifier"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Water Purifier Service,
              <br />
              <span className="text-yellow-300">Repair and AMC</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Professional RO service all over India. Guaranteed service in just 4 hours!
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Get Free Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="tel:7739692808">
                  <Phone className="mr-2" />
                  Call Now: 7739692808
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronRight className="text-white rotate-90" size={40} />
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-16 bg-white/80 backdrop-blur-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: '70+', label: 'Expert Technicians' },
              { icon: Award, value: '10+', label: 'Years Experience' },
              { icon: CheckCircle, value: '10K+', label: 'Happy Customers' },
              { icon: Clock, value: '4 Hours', label: 'Service Guarantee' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <motion.div 
                  className="inline-block p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="text-white" size={32} />
                </motion.div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We Provide the Best Water Purifier Repair & Services
            </p>
          </motion.div>

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
                        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                        asChild
                      >
                        <span className="flex items-center justify-center">
                          Learn More
                          <ChevronRight className="ml-2" size={18} />
                        </span>
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            variants={fadeInUp}
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/services">
                View All Services
                <ChevronRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1580893246395-52aead8960dc" 
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How We Work
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Your time and money are valuable to us. Enjoy hassle-free services right at your door.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                step: '1',
                title: 'Book & Schedule Service',
                description: 'Select the services your water purifier needs. Schedule your request and choose the best time for service.'
              },
              {
                step: '2',
                title: 'Get Technician Details',
                description: 'Receive the service engineer\'s name and contact information, allowing you to track their whereabouts in real-time.'
              },
              {
                step: '3',
                title: 'Get Relax',
                description: 'Unwind and have fun in your spare time. Our professional will visit and fix your water purifier problems.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                <Card className="p-8 h-full bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 border-0 shadow-xl hover:shadow-2xl">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{item.title}</h3>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </Card>
                {index < 2 && (
                  <motion.div 
                    className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ChevronRight className="text-white" size={32} />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Excellent Ratings & Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our happy and satisfied clients
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="p-6 h-full bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-0">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-500"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </Card>
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
            Need RO Service?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get instant support from our expert technicians. Contact us now!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() => setIsQuoteModalOpen(true)}
            >
              Get Free Quote
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="tel:7739692808">
                <Phone className="mr-2" />
                Call: 7739692808
              </a>
            </Button>
          </div>
        </div>
      </motion.section>

      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <WhatsAppFloat />
    </div>
  )
}
