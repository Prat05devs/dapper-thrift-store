"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { mockProducts } from '@/lib/mock-data'

export function FeaturedProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Replace with actual API call to fetch featured products
    // Example: const fetchProducts = async () => {
    //   try {
    //     const response = await fetch('/api/products/featured');
    //     const data = await response.json();
    //     setProducts(data);
    //   } catch (error) {
    //     console.error('Error fetching products:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    
    // Simulate API call with mock data
    const timer = setTimeout(() => {
      setProducts(mockProducts.slice(0, 4));
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false)
  
  const toggleFavorite = (e) => {
    e.preventDefault()
    setIsFavorite(!isFavorite)
    
    // TODO: Send favorite status to API
    // Example: await fetch('/api/favorites', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ productId: product.id, isFavorite: !isFavorite })
    // });
  }
  
  return (
    <Link 
      href={`/buy/${product.id}`} 
      className="group card card-hover h-full flex flex-col"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button 
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors"
          onClick={toggleFavorite}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart 
            className={`h-5 w-5 ${isFavorite ? 'fill-destructive text-destructive' : 'text-foreground/60'}`} 
          />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex justify-between items-center">
            <span className="text-white font-semibold">${product.price.toFixed(2)}</span>
            <span className="bg-accent/90 text-white text-xs px-2 py-1 rounded-full">
              {product.size}
            </span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col flex-grow p-4">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
        
        <div className="mt-auto">
          <div className="flex justify-between items-center">
            <div className="text-sm">
              <span className={`badge ${product.condition === 'New' ? 'badge-primary' : 'badge-secondary'}`}>
                {product.condition}
              </span>
            </div>
            <Button variant="ghost" size="sm" className="text-sm">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}