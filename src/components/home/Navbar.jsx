import React, { useState } from 'react'
import { NavItemDesk } from './UiElements'
import { Link } from 'react-router-dom'
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [serviceMenu, setServiceMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className='sticky top-0 z-50 bg-white shadow-sm border-b border-blue-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to='/' className='flex items-center space-x-3 group'>
              <div className="h-10 w-10 sm:h-12 sm:w-12 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-blue-200 transition-all duration-300">
                <span className="text-white font-bold text-xl sm:text-2xl">N</span>
              </div>
              <div className="hidden sm:block">
                <h1 className='text-xl sm:text-2xl font-bold text-blue-900 tracking-tight'>NCDB</h1>
                <p className="text-xs text-blue-600 -mt-1 font-medium">Northern Cooperative Development Bank</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-1">
            <NavItemDesk name="Home" href="/" />
            <NavItemDesk name="About" href="/about" />
            <NavItemDesk name="Build Together" href="/buildTogether" />
            <NavItemDesk
              name="Core Functions"
              HoverContent={CoreFunctionsDropdown}
              isOpen={openDropdown === 'coreFunctions'}
              onMouseEnter={() => setOpenDropdown('coreFunctions')}
              onMouseLeave={() => setOpenDropdown(null)}
            />
            <NavItemDesk name="Media Room" href="/mediaroom" />
            <NavItemDesk name="Shared Endeavours" href="/sharedEndeavours" />
            <NavItemDesk name="Careers" href="/careers" />
          </ul>

          {/* Mobile: menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-700 hover:text-blue-900 hover:bg-blue-50 focus:outline-none transition-colors"
            >
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6 sm:h-7 sm:w-7" />
              ) : (
                <Bars3Icon className="block h-6 w-6 sm:h-7 sm:w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-blue-100 shadow-xl"
          >
            <div className="px-4 py-4 space-y-1">
              <MobileNavItem href="/" label="Home" onClick={() => setIsMenuOpen(false)} />
              <MobileNavItem href="/about" label="About" onClick={() => setIsMenuOpen(false)} />
              <MobileNavItem href="/buildTogether" label="Build Together" onClick={() => setIsMenuOpen(false)} />

              <div className="py-2">
                <button
                  onClick={() => setServiceMenu(!serviceMenu)}
                  className="flex items-center justify-between w-full py-3 px-4 text-blue-900 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <span className="font-semibold">Core Functions</span>
                  <ChevronDownIcon className={`h-5 w-5 transition-transform ${serviceMenu ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {serviceMenu && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-1 mt-1 border-l-2 border-blue-100 ml-3"
                    >
                      <MobileNavItem href="/research" label="Research" onClick={() => setIsMenuOpen(false)} />
                      <MobileNavItem href="/developmentBanking" label="Development Banking" onClick={() => setIsMenuOpen(false)} />
                      <MobileNavItem href="/technology" label="Technology" onClick={() => setIsMenuOpen(false)} />
                      <MobileNavItem href="/marketing" label="Marketing" onClick={() => setIsMenuOpen(false)} />
                      <MobileNavItem href="/finance" label="Finance" onClick={() => setIsMenuOpen(false)} />
                      <MobileNavItem href="/hr-admin" label="HR & Administration" onClick={() => setIsMenuOpen(false)} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <MobileNavItem href="/mediaroom" label="Media Room" onClick={() => setIsMenuOpen(false)} />
              <MobileNavItem href="/sharedEndeavours" label="Shared Endeavours" onClick={() => setIsMenuOpen(false)} />
              <MobileNavItem href="/careers" label="Careers" onClick={() => setIsMenuOpen(false)} />
              <MobileNavItem href="/contact" label="Contact" onClick={() => setIsMenuOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

// Mobile Navigation Item Component
const MobileNavItem = ({ href, label, onClick }) => (
  <Link
    to={href}
    onClick={onClick}
    className="block py-3 px-4 text-blue-900 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
  >
    {label}
  </Link>
)

// Core Functions Dropdown Component for Desktop
const CoreFunctionsDropdown = () => {
  const coreFunctions = [
    { name: "Research", path: "/research" },
    { name: "Development Banking", path: "/developmentBanking" },
    { name: "Technology", path: "/technology" },
    { name: "Marketing", path: "/marketing" },
    { name: "Finance", path: "/finance" },
    // { name: "HR & Administration", path: "/hr-admin" }
  ]

  return (
    <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-blue-100">
      <div className="py-2">
        {coreFunctions.map((func) => (
          <Link
            key={func.path}
            to={func.path}
            className="block px-4 py-3 text-blue-800 hover:text-blue-700 hover:bg-blue-50 transition-colors duration-150 font-medium"
          >
            {func.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar