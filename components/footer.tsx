import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-muted py-12 mt-16">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link href="/" className="inline-block font-heading text-xl font-bold">
            Dapper
          </Link>
          <p className="text-muted-foreground">
            Sustainable fashion for the conscious consumer. Join our circular economy mission.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Shop</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/buy" className="text-muted-foreground hover:text-accent transition-colors">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/buy?category=clothing" className="text-muted-foreground hover:text-accent transition-colors">
                Clothing
              </Link>
            </li>
            <li>
              <Link href="/buy?category=accessories" className="text-muted-foreground hover:text-accent transition-colors">
                Accessories
              </Link>
            </li>
            <li>
              <Link href="/buy?category=shoes" className="text-muted-foreground hover:text-accent transition-colors">
                Shoes
              </Link>
            </li>
            <li>
              <Link href="/sell" className="text-muted-foreground hover:text-accent transition-colors">
                Sell Items
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-accent transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/sustainability" className="text-muted-foreground hover:text-accent transition-colors">
                Sustainability
              </Link>
            </li>
            <li>
              <Link href="/donate" className="text-muted-foreground hover:text-accent transition-colors">
                Donate
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-muted-foreground hover:text-accent transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-muted-foreground hover:text-accent transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-muted-foreground hover:text-accent transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="text-muted-foreground hover:text-accent transition-colors">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t border-muted-foreground/20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Dapper. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-accent transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-accent transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-accent transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}