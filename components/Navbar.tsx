import React, { useState } from 'react';
import { Phone, Download } from 'lucide-react';
import { motion , AnimatePresence} from "motion/react"
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home'},
    { label: 'About ACM-JU'  },
    { label: 'Events' },
    { label: 'Subscriptions' },
  ]

  // const handleNavClick = () => {
    
  //   setIsMobileMenuOpen(false)
  // }

  // const handleSignup = () => {
    
  //   setIsMobileMenuOpen(false)
  // }

  return (
    <nav className={`w-full bg-transparent pt-4 pb-0 px-8 ${className} `}>
      <div className="max-w-screen-2xl mx-auto  items-center justify-between hidden md:flex ">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-white text-4xl font-bold lowercase tracking-wider">
            acm
          </h1>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {/* Contact Us Button */}
          <button className="flex items-center gap-2 px-6 py-3 bg-white/90 hover:bg-white text-teal-600 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg">
            <span>Contact Us</span>
            <Phone className="w-4 h-4" />
          </button>

          {/* Download Brochure Button */}
          <a href='/brochure.pdf' target='_blank'>
          <button className="flex items-center gap-2 px-6 py-3 bg-white/90 hover:bg-white text-teal-600 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg">
            <span>Download Brochure</span>
            <Download className="w-4 h-4" />
          </button></a>
        </div>
      </div>
      <div className='w-full h-16 absolute top-0 left-0 z-50 md:hidden'>
        <div className='h-full w-full flex items-center justify-between px-6'>
          <div className="flex items-center">
          <h1 className="text-white text-4xl font-bold lowercase tracking-wider">
            acm
          </h1>
        </div>

          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-[60] w-10 h-10 flex items-center justify-center text-[#1e5a7a]"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Menu */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-[80%] max-w-sm z-50 backdrop-blur-3xl bg-white/80 shadow-2xl border-l border-white/10"
              >
                <div className={` flex flex-col h-full pt-24 pb-8 px-8`}>
                  <nav className="flex flex-col gap-2 flex-1">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.label}
                        
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        whileHover={{ x: 8, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                        whileTap={{ scale: 0.95 }}
                        className="text-left px-6 py-4 rounded-xl text-[#1e5a7a] uppercase text-sm font-medium tracking-wide transition-colors"
                      >
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                          className="inline-block"
                        >
                          {item.label}
                        </motion.span>
                      </motion.button>
                    ))}
                  </nav>

                  <div className="flex flex-col gap-3 mt-6">
                    <motion.button
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.3 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-white/90 hover:bg-white text-teal-600 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <span>Contact Us</span>
                      <Phone className="w-4 h-4" />
                    </motion.button>
                    <a href='/brochure.pdf' target='_blank'>
                    <motion.button
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.45, duration: 0.3 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-white/90 hover:bg-white text-teal-600 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <span>Download Brochure</span>
                      <Download className="w-4 h-4" />
                    </motion.button>
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      
      
    </nav>
  );
};


export default Navbar;