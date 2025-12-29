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

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Format the message for WhatsApp
      const whatsappMessage = `*New Contact Form Submission*%0A%0A` +
        `*Name:* ${formData.name}%0A` +
        `*Phone:* ${formData.phone}%0A` +
        `*Email:* ${formData.email}%0A` +
        `*Subject:* ${formData.subject || 'Not specified'}%0A` +
        `*Message:* ${formData.message}%0A%0A` +
        `_This message was sent from the contact form on RO Service Center website_`

      // Phone number for WhatsApp (with country code, remove any non-numeric characters)
      const phoneNumber = '917739692808' // Adding 91 for India
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank')
      
      // Show success message
      toast({
        title: 'Opening WhatsApp',
        description: 'Please complete your message on WhatsApp',
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to open WhatsApp. Please try again or call us directly.',
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
      title: 'Our Location',
      details: 'Patna, Bihar',
      link: 'https://maps.app.goo.gl/your-google-maps-link'
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
        <div className="container mx-auto px-4 pb-8 md:pb-12">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 relative z-10 mb-8 sm:mb-12"
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

        {/* Contact Form with Map */}
        <div className="py-6 md:py-12">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
            >
              <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-8">
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
              </div>
              
              {/* Map Section */}
              <div className="lg:col-span-1 h-full">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                  <div className="p-5 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
                    <h3 className="text-xl font-bold mb-2">Our Location</h3>
                    <p className="text-sm text-blue-100">Patna, Bihar, India</p>
                  </div>
                  <div className="h-64 md:h-80 lg:h-96">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.8735363007!2d85.07805224335938!3d25.608034199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x831a0e05f477b09e!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      className="w-full h-full"
                      title="Our Location"
                    ></iframe>
                  </div>
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <strong>Address:</strong> Patna, Bihar, India
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/your-google-maps-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                    >
                      <MapPin className="w-4 h-4 mr-1" />
                      View on Map
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <WhatsAppFloat />
    </div>
  )
}