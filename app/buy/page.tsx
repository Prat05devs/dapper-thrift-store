import ProductListing from '@/components/product-listing'
import { FilterSidebar } from '@/components/filter-sidebar'

export default function BuyPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-muted py-12">
        <div className="container">
          <h1 className="text-4xl font-heading font-bold mb-4">Discover Unique Fashion</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Browse our curated collection of pre-loved clothing, accessories, and more. 
            Each piece has a story and is waiting for its next chapter with you.
          </p>
        </div>
      </div>

      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <FilterSidebar />
          </div>
          
          <div className="lg:col-span-3">
            <ProductListing />
          </div>
        </div>
      </div>
    </div>
  )
}