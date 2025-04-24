"use client"

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, Heart, Share2, ShoppingBag, AlertCircle, Truck, RotateCcw, Shield, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { mockProducts } from '@/lib/mock-data'
import { BidModal } from '@/components/bid-modal'

export default function ProductDetailPage() {
  const { id } = useParams()
  const router = useRouter()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [showBidModal, setShowBidModal] = useState(false)
  
  useEffect(() => {
    // TODO: Replace with actual API call to fetch product details
    // Example: const fetchProduct = async () => {
    //   try {
    //     const response = await fetch(`/api/products/${id}`);
    //     const data = await response.json();
    //     setProduct(data);
    //   } catch (error) {
    //     console.error('Error fetching product:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    
    // Simulate API call with mock data
    const timer = setTimeout(() => {
      const foundProduct = mockProducts.find(p => p.id === id);
      
      if (foundProduct) {
        // Add mock additional images if not present
        if (!foundProduct.additionalImages || foundProduct.additionalImages.length === 0) {
          foundProduct.additionalImages = [foundProduct.imageUrl];
        }
        
        setProduct(foundProduct);
      }
      
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    
    // TODO: Send favorite status to API
    // Example: await fetch('/api/favorites', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ productId: product.id, isFavorite: !isFavorite })
    // });
  };
  
  const handleBidSubmit = (bidData) => {
    console.log('Bid submitted:', bidData);
    // TODO: Send bid data to API
    // Example: await fetch('/api/bids', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(bidData)
    // });
    
    setShowBidModal(false);
    // Show success message
  };
  
  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <AlertCircle className="w-16 h-16 text-destructive mb-4" />
        <h1 className="text-2xl font-bold mb-2">Product Not Found</h1>
        <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/buy">Browse Products</Link>
        </Button>
      </div>
    );
  }
  
  // Combine main image with additional images
  const allImages = [product.imageUrl, ...product.additionalImages];
  
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container">
        <div className="mb-6">
          <Button variant="ghost" onClick={() => router.back()} className="hover:bg-transparent pl-0">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to products
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Images */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
              <Image
                src={allImages[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {allImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    className={`relative aspect-square rounded-md overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-4">
              <span className={`badge ${product.condition === 'New' ? 'badge-primary' : 'badge-secondary'}`}>
                {product.condition}
              </span>
            </div>
            
            <h1 className="text-3xl font-heading font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-2">
              <p className="text-lg font-medium mr-4">${product.price.toFixed(2)}</p>
              {product.originalPrice && (
                <p className="text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </p>
              )}
            </div>
            
            <p className="text-muted-foreground mb-6">
              Size: <span className="font-medium text-foreground">{product.size}</span>
            </p>
            
            <p className="text-muted-foreground mb-6">Brand: {product.brand}</p>
            
            <div className="space-y-6 border-t border-b py-6 mb-6">
              <p>{product.description}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="flex-1" onClick={() => setShowBidModal(true)}>
                <ShoppingBag className="mr-2 h-5 w-5" />
                Place Bid
              </Button>
              
              <Button size="lg" variant="outline" className="flex-1" onClick={toggleFavorite}>
                <Heart className={`mr-2 h-5 w-5 ${isFavorite ? 'fill-destructive text-destructive' : ''}`} />
                {isFavorite ? 'Saved' : 'Save Item'}
              </Button>
              
              <Button size="lg" variant="ghost" className="sm:flex-none">
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
            
            <div className="space-y-4 mt-auto">
              <div className="flex items-start">
                <Truck className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Free shipping & returns</p>
                  <p className="text-sm text-muted-foreground">On all US orders over $50</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <RotateCcw className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
                <div>
                  <p className="font-medium">14-day returns</p>
                  <p className="text-sm text-muted-foreground">Return items within 14 days</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Shield className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Secure payments</p>
                  <p className="text-sm text-muted-foreground">Your data is protected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Seller Information */}
        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-heading font-semibold mb-6">About the Seller</h2>
          
          <div className="bg-card rounded-lg border p-6">
            <div className="flex items-center">
              <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4">
                <Image
                  src={`https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg`}
                  alt={product.seller.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div>
                <h3 className="font-medium text-lg">{product.seller.name}</h3>
                <div className="flex items-center">
                  <div className="flex items-center mr-2">
                    {Array(5).fill(0).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.seller.rating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm">
                    {product.seller.rating.toFixed(1)} ({product.seller.sales} sales)
                  </span>
                </div>
              </div>
              
              <div className="ml-auto">
                <Button variant="outline" size="sm" asChild>
                  <Link href="#">View Profile</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Similar Products */}
        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-heading font-semibold mb-6">You May Also Like</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mockProducts.slice(0, 4).map((relatedProduct) => (
              product.id !== relatedProduct.id && (
                <Link
                  key={relatedProduct.id}
                  href={`/buy/${relatedProduct.id}`}
                  className="group card card-hover"
                >
                  <div className="relative aspect-square overflow-hidden rounded-t-lg">
                    <Image
                      src={relatedProduct.imageUrl}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-3 w-full">
                        <p className="text-white font-medium">${relatedProduct.price.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="line-clamp-1 text-sm font-medium">{relatedProduct.name}</h3>
                    <p className="text-xs text-muted-foreground">{relatedProduct.brand}</p>
                  </div>
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
      
      {/* Bid Modal */}
      <BidModal
        isOpen={showBidModal}
        onClose={() => setShowBidModal(false)}
        onSubmit={handleBidSubmit}
        product={product}
      />
    </div>
  )
}