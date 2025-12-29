'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navbar({ onQuoteClick }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm md:bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-16 w-40 md:h-20 md:w-48">
                <Image 
                  src="/logo.png" 
                  alt="RO Service Center" 
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} className="relative group">
                <motion.span
                  className={`font-medium transition-colors cursor-pointer flex flex-col items-center ${
                    pathname === item.path
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                  <span 
                    className={`h-0.5 bg-blue-600 mt-1 w-0 group-hover:w-full transition-all duration-300 ${
                      pathname === item.path ? 'w-full' : 'w-0'
                    }`}
                  />
                </motion.span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              className={`font-semibold ${
                isScrolled
                  ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700 border-0'
                  : 'bg-white text-blue-600 border-0 hover:bg-blue-50'
              }`}
              asChild
            >
              <a href="tel:7739692808">
                <Phone size={16} className="mr-2" />
                Call Now
              </a>
            </Button>
            <Button
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
              onClick={onQuoteClick}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button - Increased size and padding */}
          <button
            className="md:hidden p-3 -mr-2" // Added padding and negative margin for better tap target
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Enhanced with better touch targets */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="container mx-auto px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  href={item.path}
                  className={`block w-full py-4 px-4 -mx-2 rounded-lg transition-all font-medium ${
                    pathname === item.path
                      ? 'bg-blue-600/10 text-blue-600 border-r-4 border-blue-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:pl-6 transition-all duration-200'
                  }`}
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    // Smooth scroll to top when navigating
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <span className="flex items-center font-medium text-base">
                    {item.name}
                  </span>
                </Link>
              ))}
              <div className="pt-2 space-y-3 border-t border-gray-100 mt-2">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full py-6 text-base font-medium border-blue-600 text-blue-600 hover:bg-blue-50"
                  asChild
                >
                  <a href="tel:7739692808" className="flex items-center justify-center">
                    <Phone size={20} className="mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="w-full py-6 text-base font-medium bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                  onClick={() => {
                    onQuoteClick()
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Add smooth scrolling for anchor links */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
        /* Improve tap targets on mobile */
        @media (max-width: 768px) {
          a, button, [role="button"], input, textarea, select, label[for] {
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
          }
        }
      `}</style>
    </motion.nav>
  )
}
