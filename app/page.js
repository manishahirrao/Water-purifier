'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'
import Link from 'next/link'
import { Phone, CheckCircle, Award, Users, Clock, Star, ChevronRight, ShieldCheck, Heart } from 'lucide-react'
import Navbar from '@/components/Navbar.js'
import Footer from '@/components/Footer.js'
import QuoteModal from '@/components/QuoteModal.js'
import WhatsAppFloat from '@/components/WhatsAppFloat.js'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [showAllServices, setShowAllServices] = useState(false)
  
  // Initialize scroll-based animations
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  const services = [
    {
      title: 'RO Repair & Maintenance',
      description: 'We diagnose and fix issues with all types of RO systems, ensuring optimal performance.',
      image: '/RO Repair & Maintenance.webp',
      slug: 'ro-repair-maintenance'
    },
    {
      title: 'RO Installation & Replacement',
      description: 'Professional installation and replacement of RO systems for homes and businesses.',
      image: '/RO Installation & Replacement.png',
      slug: 'ro-installation-replacement'
    },
    {
      title: 'Water Purifier Servicing',
      description: 'Regular servicing to enhance the efficiency and longevity of your water purifiers.',
      image: '/Water Purifier Servicing.jpg',
      slug: 'water-purifier-servicing'
    },
    {
      title: 'Filter & Membrane Replacement',
      description: 'High-quality replacement filters and membranes for better water quality.',
      image: '/Filter & Membrane Replacement.jpeg',
      slug: 'filter-membrane-replacement'
    },
    {
      title: 'AMC Plans',
      description: 'Affordable Annual Maintenance Contracts to keep your water purification system in top condition.',
      image: '/AMC Plans.png',
      slug: 'amc-plans'
    },
    {
      title: 'Minor Repair',
      description: 'Quick and efficient minor repairs to keep your water purifier running smoothly.',
      image: '/Minor Repair.jpg',
      slug: 'minor-repair'
    }
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      name: 'Rajiv Malhotra',
      location: 'Connaught Place, Delhi',
      rating: 5,
      text: 'Outstanding service! The technician arrived in CP within 2 hours and fixed my RO system. The water quality has improved significantly. Highly recommended for Delhi residents!',
      initial: 'R'
    },
    {
      name: 'Neha Kapoor',
      location: 'Dwarka, Delhi',
      rating: 5,
      text: 'In Dwarka, we face severe water quality issues. Their RO service is prompt and efficient. The technician was very knowledgeable about Delhi\'s water conditions.',
      initial: 'N'
    },
    {
      name: 'Arjun Mehta',
      location: 'Rohini, Delhi',
      rating: 5,
      text: 'Best RO service in Rohini! They understand the hard water problems in our area. The technician was on time and very professional.',
      initial: 'A'
    },
    {
      name: 'Priya Sharma',
      location: 'Pitampura, Delhi',
      rating: 5,
      text: 'Living in Pitampura, water purifier service is crucial. Their team is very reliable and provides excellent maintenance. Highly recommended!',
      initial: 'P'
    },
    {
      name: 'Vikram Singh',
      location: 'Janakpuri, Delhi',
      rating: 5,
      text: 'Their service in West Delhi is exceptional! They understand the local water problems and provide customized solutions. The RO is working better than ever!',
      initial: 'V'
    }
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

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
          <Image 
            src="/home-hero.jpg" 
            alt="Water Purifier Service"
            fill
            className="object-cover blur-md"
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q=="
          />
        </div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl z-20 hidden lg:block">
          <Image 
            src="/home-hero1.jpg" 
            alt="Professional RO Service"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
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

      {/* Why Choose Us Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Excellence in Every Service
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are committed to providing the highest quality water purifier services with a personal touch
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                icon: <Award className="w-12 h-12 text-blue-600" />,
                title: 'Certified Experts',
                description: 'Our technicians are certified professionals with years of experience in RO and water purifier services.'
              },
              {
                icon: <Clock className="w-12 h-12 text-blue-600" />,
                title: 'Quick Response',
                description: 'We understand urgency. Our team reaches your doorstep within 4 hours of your service request.'
              },
              {
                icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
                title: 'Genuine Parts',
                description: 'We use only 100% genuine spare parts for all repairs and replacements.'
              },
              {
                icon: <Heart className="w-12 h-12 text-blue-600" />,
                title: 'Customer First',
                description: 'Your satisfaction is our top priority. We ensure 100% satisfaction with our services.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-16 text-center"
            variants={fadeInUp}
          >
            <Link href="/services">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                View Our Services
                <ChevronRight className="ml-2" />
              </Button>
            </Link>
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
<section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 mb-4">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <span className="text-gray-600 font-semibold">5.0</span>
      </div>
      <h2 className="text-4xl font-bold text-gray-900 mb-3">
        Excellent Ratings & Reviews
      </h2>
      <p className="text-gray-600 text-lg">
        Hear from our happy and satisfied clients
      </p>
    </div>

    <div className="relative max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`${
              currentTestimonial === index ? 'block' : 'hidden'
            }`}
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {testimonial.initial}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 text-sm mb-2">
                  {testimonial.location}
                </p>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed italic">
              "{testimonial.text}"
            </p>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentTestimonial === index
                ? 'bg-blue-600 w-8'
                : 'bg-gray-300 w-2 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  </div>
</section>

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
