"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, ShoppingBag, User, Sun, Moon, Search, X } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Buy', href: '/buy' },
    { name: 'Sell', href: '/sell' },
    { name: 'Donate', href: '/donate' },
    { name: 'About', href: '/about' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center space-x-2 font-heading text-2xl font-bold"
            >
              <ShoppingBag className="h-6 w-6 text-accent" />
              <span>Dapper</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  pathname === link.href 
                    ? 'text-accent' 
                    : 'text-foreground/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="btn-ghost p-2 rounded-full" 
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link href="/auth/signin" className="btn-ghost p-2 rounded-full">
              <User className="h-5 w-5" />
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <button
              className="btn-ghost p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t animate-fade-in">
          <div className="container mx-auto px-4 py-4 bg-background">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`py-2 text-base font-medium transition-colors hover:text-accent ${
                    pathname === link.href 
                      ? 'text-accent' 
                      : 'text-foreground/80'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t pt-4 mt-2">
                <Link
                  href="/auth/signin"
                  className="flex items-center py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-5 w-5 mr-2" />
                  <span>Account</span>
                </Link>
                <button className="flex items-center py-2 text-base font-medium w-full text-left">
                  <Search className="h-5 w-5 mr-2" />
                  <span>Search</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}