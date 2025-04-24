import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { 
  ShoppingBag, 
  Banknote, 
  Heart, 
  RefreshCw, 
  ShieldCheck, 
  Leaf,
  ArrowRight 
} from 'lucide-react'
import { FeaturedProducts } from '@/components/featured-products'
import { TestimonialCarousel } from '@/components/testimonial-carousel'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg"
            alt="Sustainable Fashion"
            fill
            priority
            className="object-cover object-center brightness-75"
          />
        </div>
        
        <div className="container relative z-10 text-center text-white space-y-6 mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold max-w-4xl mx-auto leading-tight">
            Sustainable Style for the Conscious Consumer
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Discover unique fashion pieces that are kind to the planet and your wallet.
            Join our circular fashion movement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button size="lg" asChild>
              <Link href="/buy">Shop Now</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
              <Link href="/sell">Sell With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-muted">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Our Circular Fashion Mission
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground mb-12">
            Dapper is built on the philosophy that fashion can be sustainable, 
            affordable, and stylish. We connect conscious consumers with pre-loved 
            fashion pieces that deserve a second life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
              <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Buy</h3>
              <p className="text-muted-foreground text-center">
                Discover unique, pre-loved fashion pieces at a fraction of retail prices.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
              <div className="h-14 w-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Banknote className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sell</h3>
              <p className="text-muted-foreground text-center">
                Give your gently-used clothing a new home and earn extra income.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
              <div className="h-14 w-14 bg-success/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-7 w-7 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Donate</h3>
              <p className="text-muted-foreground text-center">
                Support our community initiatives by donating items to those in need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-heading font-bold">Featured Items</h2>
            <Link href="/buy" className="text-accent flex items-center font-medium">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          {/* Featured Products Component */}
          <FeaturedProducts />
          
          <div className="mt-12 text-center">
            <Button size="lg" className="min-w-[160px]" asChild>
              <Link href="/buy">Explore Collection</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Fashion That Doesn't Cost the Earth
              </h2>
              <p className="text-lg">
                Every garment has a story and an environmental footprint. At Dapper, 
                we extend the lifecycle of clothing, reducing waste and demand for 
                new production.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <RefreshCw className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Circular Economy</h3>
                    <p>We keep clothing in circulation, extending its useful life and reducing landfill waste.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Leaf className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Reduced Carbon Footprint</h3>
                    <p>Second-hand shopping produces up to 80% less carbon emissions than buying new.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <ShieldCheck className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Quality Assurance</h3>
                    <p>Each item is carefully inspected to ensure it meets our quality standards.</p>
                  </div>
                </div>
              </div>
              
              <Button className="mt-4 bg-white text-primary hover:bg-white/90" size="lg" asChild>
                <Link href="/sustainability">Learn More</Link>
              </Button>
            </div>
            
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg"
                alt="Sustainable Fashion"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            What Our Community Says
          </h2>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Join Our Sustainable Fashion Movement
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Whether you're buying, selling, or donating, you're making a positive impact 
            on the planet and supporting ethical fashion.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-accent hover:bg-white/90" asChild>
              <Link href="/auth/signup">Create Account</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}