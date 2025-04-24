"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Upload, X, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { productCategories, conditionOptions, sizeOptions } from '@/lib/mock-data'

export function ListingForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [images, setImages] = useState([])
  const [preview, setPreview] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    brand: '',
    size: '',
    color: '',
    condition: '',
    price: '',
    tags: ''
  })
  
  const handleTextChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  
  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value })
  }
  
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files)
    
    if (files.length === 0) return
    
    // Create preview URLs
    const newPreviews = files.map(file => URL.createObjectURL(file))
    setPreview([...preview, ...newPreviews])
    
    // Store file objects for upload
    setImages([...images, ...files])
  }
  
  const removeImage = (index) => {
    // Revoke object URL to avoid memory leaks
    URL.revokeObjectURL(preview[index])
    
    const newPreviews = [...preview]
    newPreviews.splice(index, 1)
    setPreview(newPreviews)
    
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // TODO: Upload images to a service like Cloudinary
      // Example:
      // const imageUrls = await Promise.all(
      //   images.map(async (image) => {
      //     const formData = new FormData();
      //     formData.append('file', image);
      //     formData.append('upload_preset', 'your_preset');
      //     const response = await fetch(
      //       'https://api.cloudinary.com/v1_1/your_cloud_name/image/upload',
      //       { method: 'POST', body: formData }
      //     );
      //     const data = await response.json();
      //     return data.secure_url;
      //   })
      // );
      
      // TODO: Send form data to your backend API
      // Example:
      // const response = await fetch('/api/listings', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     ...formData,
      //     images: imageUrls,
      //     tags: formData.tags.split(',').map(tag => tag.trim())
      //   })
      // });
      
      // Simulate success after 2 seconds
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Reset form or redirect
      router.push('/sell')
    } catch (error) {
      console.error('Error creating listing:', error)
      // Show error message
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Information */}
      <div className="bg-card rounded-lg border p-6">
        <h2 className="text-lg font-semibold mb-6">Item Details</h2>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Item Name <span className="text-destructive">*</span></Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleTextChange}
                placeholder="e.g., Vintage Denim Jacket"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="brand">Brand <span className="text-destructive">*</span></Label>
              <Input
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleTextChange}
                placeholder="e.g., Levi's"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description <span className="text-destructive">*</span></Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleTextChange}
              placeholder="Describe your item in detail, including any flaws or wear..."
              className="resize-none min-h-[120px]"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Category <span className="text-destructive">*</span></Label>
              <Select 
                value={formData.category} 
                onValueChange={(value) => handleSelectChange('category', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {productCategories.filter(c => c.id !== 'all').map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="size">Size <span className="text-destructive">*</span></Label>
              <Select 
                value={formData.size} 
                onValueChange={(value) => handleSelectChange('size', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Size" />
                </SelectTrigger>
                <SelectContent>
                  {sizeOptions.map((size) => (
                    <SelectItem key={size.id} value={size.id}>
                      {size.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="condition">Condition <span className="text-destructive">*</span></Label>
              <Select 
                value={formData.condition} 
                onValueChange={(value) => handleSelectChange('condition', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Condition" />
                </SelectTrigger>
                <SelectContent>
                  {conditionOptions.map((condition) => (
                    <SelectItem key={condition.id} value={condition.id}>
                      {condition.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="color">Color <span className="text-destructive">*</span></Label>
              <Input
                id="color"
                name="color"
                value={formData.color}
                onChange={handleTextChange}
                placeholder="e.g., Dark Blue"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="price">Price ($) <span className="text-destructive">*</span></Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.price}
                  onChange={handleTextChange}
                  placeholder="0.00"
                  className="pl-7"
                  required
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="tags">Tags (comma separated)</Label>
            <Input
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleTextChange}
              placeholder="e.g., vintage, denim, jacket"
            />
            <p className="text-sm text-muted-foreground">
              Add tags to make your item more discoverable
            </p>
          </div>
        </div>
      </div>
      
      {/* Photo Upload */}
      <div className="bg-card rounded-lg border p-6">
        <h2 className="text-lg font-semibold mb-6">Photos</h2>
        
        <div className="space-y-4">
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
            <div className="flex flex-col items-center">
              <Upload className="h-10 w-10 text-muted-foreground mb-3" />
              <h3 className="text-lg font-medium mb-1">Upload Photos</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Drag and drop or browse to choose files
              </p>
              <Label 
                htmlFor="photo-upload" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md cursor-pointer"
              >
                Browse Files
              </Label>
              <Input
                id="photo-upload"
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="hidden"
              />
              <p className="text-xs text-muted-foreground mt-4">
                Upload up to 5 high-quality images (max 5MB each)
              </p>
            </div>
          </div>
          
          {preview.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-6">
              {preview.map((src, index) => (
                <div key={index} className="relative aspect-square rounded-md overflow-hidden bg-muted">
                  <Image
                    src={src}
                    alt={`Preview ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-background/80 backdrop-blur-sm p-1 rounded-full hover:bg-background"
                    aria-label="Remove image"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  {index === 0 && (
                    <span className="absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground text-xs text-center py-1">
                      Main Photo
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Terms & Submission */}
      <div className="bg-card rounded-lg border p-6">
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <input 
              id="terms" 
              type="checkbox" 
              required
              className="h-4 w-4 text-primary border-input rounded focus:ring-primary"
            />
            <label htmlFor="terms" className="ml-2 text-sm">
              I confirm this item is authentic and I have the right to sell it.
            </label>
          </div>
          
          <div className="flex items-center">
            <input 
              id="policies" 
              type="checkbox" 
              required
              className="h-4 w-4 text-primary border-input rounded focus:ring-primary"
            />
            <label htmlFor="policies" className="ml-2 text-sm">
              I agree to Dapper's <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Selling Policies</a>.
            </label>
          </div>
        </div>
        
        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline">
            Save as Draft
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'List Item'
            )}
          </Button>
        </div>
      </div>
    </form>
  )
}