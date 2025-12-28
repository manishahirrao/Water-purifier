'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import QuoteModal from '@/components/QuoteModal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import Image from 'next/image'

export default function Contact() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: 'Message sent!',
          description: 'Thank you for contacting us. We\'ll get back to you soon.',
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        throw new Error(data.error || 'Failed to send message')
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
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

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '7739692808',
      link: 'tel:7739692808'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'support@roservicecenter.in',
      link: 'mailto:support@roservicecenter.in'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: 'All over India',
      link: null
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: '24/7 Emergency Service',
      link: null
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Navbar onQuoteClick={() => setIsQuoteModalOpen(true)} />
      
      {/* Hero Section */}
      <motion.section 
        className="relative py-24 md:py-32 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 opacity-90" />
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1606214554814-e8a9f97bdbb0" 
            alt="Contact Us"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 md:mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Get in touch with our expert team. We're here to help!
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Info & Form Section */}
      <div className="bg-gray-50">
        {/* Contact Info Cards */}
        <div className="container mx-auto px-4 pt-32 pb-12 md:py-20">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-32 relative z-10 mb-12 sm:mb-16 md:mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <Card className="p-5 sm:p-6 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border-0 h-full flex flex-col">
                  <motion.div 
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mb-3 sm:mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5, type: 'spring', stiffness: 300 }}
                  >
                    <info.icon className="text-white" size={20} />
                  </motion.div>
                  <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-2">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      className="text-blue-600 hover:text-blue-700 text-sm sm:text-base transition-colors duration-200 inline-block mt-auto"
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-sm sm:text-base">{info.details}</p>
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full py-3 px-4 text-base"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full py-3 px-4 text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full py-3 px-4 text-base"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full py-3 px-4 text-base"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full py-3 px-4 text-base"
                    placeholder="Please share the details of your inquiry..."
                  />
                </div>

                <div className="pt-2">
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-base sm:text-lg py-5 sm:py-6 transition-all duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg active:translate-y-0 active:shadow-md"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Info Section */}
        <div className="container mx-auto px-4 pb-20">
          <motion.div 
            className="space-y-6 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <Card className="p-6 sm:p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Quick Response
              </h3>
              <p className="text-gray-600 mb-6">
                We understand the importance of clean drinking water. Our team is available 24/7 to address your concerns and provide immediate assistance.
              </p>
              <div className="space-y-4">
                <Button 
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                  onClick={() => setIsQuoteModalOpen(true)}
                >
                  Get Free Quote
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full"
                  asChild
                >
                  <a href="tel:7739692808">
                    <Phone className="mr-2" size={18} />
                    Call Now: 7739692808
                  </a>
                </Button>
              </div>
            </Card>

            <Card className="p-6 sm:p-8 bg-gradient-to-br from-blue-600 to-cyan-600 border-0 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Emergency Service
              </h3>
              <p className="text-white/90 mb-6">
                Need immediate assistance? We guarantee service within 4 hours of your call!
              </p>
              <div className="flex items-center gap-3 text-white">
                <Clock size={24} />
                <div>
                  <p className="font-semibold">24/7 Available</p>
                  <p className="text-sm text-white/80">Round the clock support</p>
                </div>
              </div>
            </Card>

            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1580893246395-52aead8960dc" 
                alt="Customer Support"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="text-2xl font-bold">Expert Support</p>
                  <p className="text-white/90">Our team is here to help</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <WhatsAppFloat />
    </div>
  )
}