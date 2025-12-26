'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
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
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">RO</span>
              </div>
              <div>
                <h1 className={`text-xl font-bold ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}>
                  RO Service Center
                </h1>
                <p className={`text-xs ${
                  isScrolled ? 'text-gray-600' : 'text-white/80'
                }`}>
                  Professional Water Care
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <motion.span
                  className={`font-medium transition-colors cursor-pointer ${
                    pathname === item.path
                      ? isScrolled
                        ? 'text-blue-600'
                        : 'text-yellow-300'
                      : isScrolled
                      ? 'text-gray-700 hover:text-blue-600'
                      : 'text-white hover:text-yellow-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              className={`${
                isScrolled
                  ? 'border-blue-600 text-blue-600 hover:bg-blue-50'
                  : 'border-white text-white hover:bg-white hover:text-blue-600'
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <div
                    className={`block py-2 font-medium ${
                      pathname === item.path
                        ? 'text-blue-600'
                        : 'text-gray-700'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </div>
                </Link>
              ))}
              <Button
                variant="outline"
                className="w-full border-blue-600 text-blue-600"
                asChild
              >
                <a href="tel:7739692808">
                  <Phone size={16} className="mr-2" />
                  Call Now
                </a>
              </Button>
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                onClick={() => {
                  onQuoteClick()
                  setIsMobileMenuOpen(false)
                }}
              >
                Get Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
