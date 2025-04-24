"use client"

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Loader2, Grid, List } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { mockProducts } from '@/lib/mock-data'

export default function ProductListing() {
  const searchParams = useSearchParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  
  // Get filter values from URL
  const category = searchParams.get('category')
  const size = searchParams.get('size')
  const condition = searchParams.get('condition')
  const color = searchParams.get('color')
  const minPrice = searchParams.get('minPrice')
  const maxPrice = searchParams.get('maxPrice')
  
  // Sort options
  const [sortBy, setSortBy] = useState('newest')
  
  useEffect(() => {
    // TODO: Replace with actual API call to fetch products with filters
    // Example: const fetchProducts = async () => {
    //   try {
    //     const response = await fetch(`/api/products?category=${category}&size=${size}...`);
    //     const data = await response.json();
    //     setProducts(data);
    //   } catch (error) {
    //     console.error('Error fetching products:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    
    // Simulate API call with filtered mock data
    setLoading(true);
    
    const timer = setTimeout(() => {
      // Apply filters to mock data
      let filteredProducts = [...mockProducts];
      
      if (category && category !== 'all') {
        filteredProducts = filteredProducts.filter(p => 
          p.category.toLowerCase() === category.toLowerCase()
        );
      }
      
      if (size) {
        filteredProducts = filteredProducts.filter(p => 
          p.size.toLowerCase() === size.toLowerCase()
        );
      }
      
      if (condition) {
        filteredProducts = filteredProducts.filter(p => 
          p.condition.toLowerCase().replace(/\s+/g, '_') === condition.toLowerCase()
        );
      }
      
      if (color) {
        filteredProducts = filteredProducts.filter(p => 
          p.color.toLowerCase().includes(color.toLowerCase())
        );
      }
      
      if (minPrice) {
        filteredProducts = filteredProducts.filter(p => 
          p.price >= parseFloat(minPrice)
        );
      }
      
      if (maxPrice) {
        filteredProducts = filteredProducts.filter(p => 
          p.price <= parseFloat(maxPrice)
        );
      }
      
      // Sort products
      switch (sortBy) {
        case 'price_low':
          filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price_high':
          filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case 'newest':
          filteredProducts.sort((a, b) => new Date(b.listed) - new Date(a.listed));
          break;
        case 'popular':
          filteredProducts.sort((a, b) => b.favorites - a.favorites);
          break;
        default:
          break;
      }
      
      setProducts(filteredProducts);
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [category, size, condition, color, minPrice, maxPrice, sortBy]);
  
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };
  
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
        <p className="mt-4 text-muted-foreground">Loading products...</p>
      </div>
    );
  }
  
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <p className="text-muted-foreground">
          Showing {products.length} {products.length === 1 ? 'result' : 'results'}
        </p>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-muted' : ''}`}
              aria-label="Grid view"
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-muted' : ''}`}
              aria-label="List view"
            >
              <List className="h-5 w-5" />
            </button>
          </div>
          
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="input h-9 px-3 py-1 text-sm"
          >
            <option value="newest">Newest First</option>
            <option value="price_low">Price: Low to High</option>
            <option value="price_high">Price: High to Low</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>
      </div>
      
      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="bg-muted rounded-full p-8 mb-4">
            <svg className="h-12 w-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">No products found</h3>
          <p className="text-muted-foreground max-w-md">
            We couldn't find any products that match your filters. Try adjusting your criteria or check back later.
          </p>
          <Button className="mt-6" asChild>
            <Link href="/buy">Clear Filters</Link>
          </Button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {products.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </div>
      )}
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

function ProductListItem({ product }) {
  const [isFavorite, setIsFavorite] = useState(false)
  
  const toggleFavorite = (e) => {
    e.preventDefault()
    setIsFavorite(!isFavorite)
    
    // TODO: Send favorite status to API
  }
  
  return (
    <Link 
      href={`/buy/${product.id}`} 
      className="group card card-hover w-full flex flex-col sm:flex-row overflow-hidden"
    >
      <div className="relative w-full sm:w-48 h-64 sm:h-48 flex-shrink-0">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover"
        />
        <span className="absolute top-3 left-3 bg-accent/90 text-white text-xs px-2 py-1 rounded-full">
          {product.size}
        </span>
      </div>
      
      <div className="flex-grow p-4 flex flex-col">
        <div className="flex justify-between">
          <div>
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.brand}</p>
          </div>
          <div className="text-lg font-semibold">${product.price.toFixed(2)}</div>
        </div>
        
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{product.description}</p>
        
        <div className="mt-auto pt-4 flex items-center justify-between">
          <div className="space-x-2">
            <span className={`badge ${product.condition === 'New' ? 'badge-primary' : 'badge-secondary'}`}>
              {product.condition}
            </span>
            
            <span className="text-sm text-muted-foreground">
              Listed {new Date(product.listed).toLocaleDateString()}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              className="p-2 rounded-full hover:bg-muted transition-colors"
              onClick={toggleFavorite}
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart 
                className={`h-5 w-5 ${isFavorite ? 'fill-destructive text-destructive' : 'text-foreground/60'}`} 
              />
            </button>
            <Button variant="ghost" size="sm">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}