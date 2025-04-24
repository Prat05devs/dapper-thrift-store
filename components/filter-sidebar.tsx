"use client"

import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Filter, X, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { productCategories, sizeOptions, conditionOptions } from '@/lib/mock-data'

export function FilterSidebar() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [priceRange, setPriceRange] = useState({ min: '', max: '' })
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    sizes: true,
    condition: true,
    price: true,
    color: true
  })
  
  // Get current filter values from URL
  const currentCategory = searchParams.get('category') || 'all'
  const currentSize = searchParams.get('size') || ''
  const currentCondition = searchParams.get('condition') || ''
  const currentColor = searchParams.get('color') || ''
  const currentMinPrice = searchParams.get('minPrice') || ''
  const currentMaxPrice = searchParams.get('maxPrice') || ''
  
  // Initialize state with current values from URL
  const [filters, setFilters] = useState({
    category: currentCategory,
    size: currentSize,
    condition: currentCondition,
    color: currentColor,
    minPrice: currentMinPrice,
    maxPrice: currentMaxPrice
  })
  
  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    })
  }
  
  const handleFilterChange = (type, value) => {
    setFilters({
      ...filters,
      [type]: value
    })
  }
  
  const handlePriceChange = (type, value) => {
    setPriceRange({
      ...priceRange,
      [type]: value
    })
  }
  
  const applyFilters = () => {
    // TODO: Connect to backend API with filters
    // For now, we'll just update the URL params
    
    const params = new URLSearchParams()
    
    if (filters.category && filters.category !== 'all') {
      params.set('category', filters.category)
    }
    
    if (filters.size) {
      params.set('size', filters.size)
    }
    
    if (filters.condition) {
      params.set('condition', filters.condition)
    }
    
    if (filters.color) {
      params.set('color', filters.color)
    }
    
    if (priceRange.min) {
      params.set('minPrice', priceRange.min)
    }
    
    if (priceRange.max) {
      params.set('maxPrice', priceRange.max)
    }
    
    const queryString = params.toString()
    router.push(queryString ? `/buy?${queryString}` : '/buy')
  }
  
  const clearAllFilters = () => {
    setFilters({
      category: 'all',
      size: '',
      condition: '',
      color: '',
      minPrice: '',
      maxPrice: ''
    })
    
    setPriceRange({ min: '', max: '' })
    router.push('/buy')
  }
  
  return (
    <div className="bg-card rounded-lg border shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Filter className="mr-2 h-5 w-5" />
          <h2 className="text-lg font-semibold">Filters</h2>
        </div>
        
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={clearAllFilters}
          className="text-sm hover:text-destructive"
        >
          <X className="mr-1 h-4 w-4" />
          Clear All
        </Button>
      </div>
      
      {/* Categories Section */}
      <div className="mb-6">
        <button
          className="flex items-center justify-between w-full text-left font-medium mb-2"
          onClick={() => toggleSection('categories')}
        >
          Categories
          {expandedSections.categories ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
        
        {expandedSections.categories && (
          <div className="space-y-2 mt-2">
            {productCategories.map((category) => (
              <div key={category.id} className="flex items-center">
                <input
                  type="radio"
                  id={`category-${category.id}`}
                  name="category"
                  value={category.id}
                  checked={filters.category === category.id}
                  onChange={() => handleFilterChange('category', category.id)}
                  className="h-4 w-4 text-primary border-input rounded focus:ring-primary"
                />
                <label 
                  htmlFor={`category-${category.id}`}
                  className="ml-2 text-sm text-foreground cursor-pointer"
                >
                  {category.name}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Size Section */}
      <div className="mb-6">
        <button
          className="flex items-center justify-between w-full text-left font-medium mb-2"
          onClick={() => toggleSection('sizes')}
        >
          Size
          {expandedSections.sizes ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
        
        {expandedSections.sizes && (
          <div className="grid grid-cols-3 gap-2 mt-2">
            {sizeOptions.map((size) => (
              <button
                key={size.id}
                className={`text-sm border rounded-md py-1 px-2 focus:outline-none ${
                  filters.size === size.id
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-input hover:border-primary/50'
                }`}
                onClick={() => handleFilterChange('size', size.id)}
              >
                {size.name}
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Condition Section */}
      <div className="mb-6">
        <button
          className="flex items-center justify-between w-full text-left font-medium mb-2"
          onClick={() => toggleSection('condition')}
        >
          Condition
          {expandedSections.condition ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
        
        {expandedSections.condition && (
          <div className="space-y-2 mt-2">
            {conditionOptions.map((condition) => (
              <div key={condition.id} className="flex items-center">
                <input
                  type="radio"
                  id={`condition-${condition.id}`}
                  name="condition"
                  value={condition.id}
                  checked={filters.condition === condition.id}
                  onChange={() => handleFilterChange('condition', condition.id)}
                  className="h-4 w-4 text-primary border-input rounded focus:ring-primary"
                />
                <label 
                  htmlFor={`condition-${condition.id}`}
                  className="ml-2 text-sm text-foreground cursor-pointer"
                >
                  {condition.name}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Price Range Section */}
      <div className="mb-6">
        <button
          className="flex items-center justify-between w-full text-left font-medium mb-2"
          onClick={() => toggleSection('price')}
        >
          Price Range
          {expandedSections.price ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
        
        {expandedSections.price && (
          <div className="mt-2">
            <div className="flex items-center space-x-2">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange.min}
                  onChange={(e) => handlePriceChange('min', e.target.value)}
                  className="input pl-7 py-1 h-9 text-sm w-full"
                />
              </div>
              <span className="text-muted-foreground">to</span>
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange.max}
                  onChange={(e) => handlePriceChange('max', e.target.value)}
                  className="input pl-7 py-1 h-9 text-sm w-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Color Section */}
      <div className="mb-6">
        <button
          className="flex items-center justify-between w-full text-left font-medium mb-2"
          onClick={() => toggleSection('color')}
        >
          Color
          {expandedSections.color ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
        
        {expandedSections.color && (
          <div className="grid grid-cols-4 gap-2 mt-2">
            {['Black', 'White', 'Blue', 'Red', 'Green', 'Yellow', 'Purple', 'Brown', 'Gray', 'Pink', 'Orange', 'Beige'].map((color) => (
              <button
                key={color}
                className={`text-sm border rounded-md py-1 px-2 focus:outline-none ${
                  filters.color === color.toLowerCase()
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-input hover:border-primary/50'
                }`}
                onClick={() => handleFilterChange('color', color.toLowerCase())}
              >
                {color}
              </button>
            ))}
          </div>
        )}
      </div>
      
      <Button onClick={applyFilters} className="w-full">
        Apply Filters
      </Button>
    </div>
  )
}