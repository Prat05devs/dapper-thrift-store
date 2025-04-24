"use client"

import { useState } from 'react'
import Image from 'next/image'
import { AlertCircle, Calendar, Clock, MapPin, Truck, CheckCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function DonatePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    date: '',
    time: '',
    itemTypes: [],
    description: '',
    instructions: ''
  })
  
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    
    // TODO: Connect to backend API to schedule pickup
    // Example: await fetch('/api/donation/schedule', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setSubmitting(false)
    setSubmitted(true)
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      date: '',
      time: '',
      itemTypes: [],
      description: '',
      instructions: ''
    })
  }
  
  const toggleItemType = (type) => {
    const current = [...formData.itemTypes]
    
    if (current.includes(type)) {
      setFormData({
        ...formData,
        itemTypes: current.filter(t => t !== type)
      })
    } else {
      setFormData({
        ...formData,
        itemTypes: [...current, type]
      })
    }
  }
  
  const acceptedItems = [
    { type: 'Clothing', description: 'Clean, gently used clothing in good condition' },
    { type: 'Shoes', description: 'Pairs in wearable condition with minimal wear' },
    { type: 'Accessories', description: 'Bags, belts, scarves, and jewelry in good condition' },
    { type: 'Home Textiles', description: 'Clean towels, sheets, and blankets' }
  ]
  
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-muted py-12">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-heading font-bold mb-4">Donate Items</h1>
            <p className="text-lg text-muted-foreground">
              Give your gently used fashion items a new life and help support our 
              community programs. Schedule a free pickup or learn about drop-off options.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="pickup">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="pickup">Schedule Pickup</TabsTrigger>
              <TabsTrigger value="guidelines">Donation Guidelines</TabsTrigger>
            </TabsList>
            
            <TabsContent value="pickup">
              {submitted ? (
                <div className="bg-card rounded-lg border shadow-sm p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-success/10 rounded-full p-4">
                      <CheckCircle className="h-12 w-12 text-success" />
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-heading font-bold mb-4">Donation Pickup Scheduled!</h2>
                  <p className="text-lg mb-6">
                    Thank you for your generosity. We've scheduled your pickup and 
                    sent a confirmation to your email.
                  </p>
                  
                  <div className="max-w-md mx-auto bg-muted p-6 rounded-lg mb-6">
                    <div className="flex items-start mb-4">
                      <Calendar className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                      <div>
                        <p className="font-medium">Pickup Date & Time</p>
                        <p className="text-muted-foreground">May 15, 2023 • Between 9:00 AM - 12:00 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                      <div>
                        <p className="font-medium">Pickup Address</p>
                        <p className="text-muted-foreground">123 Pine St, San Francisco, CA 94111</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    Please have your items ready in bags or boxes by 9:00 AM on the scheduled date.
                    Our driver will call you 30 minutes before arrival.
                  </p>
                  
                  <Button onClick={() => setSubmitted(false)}>Schedule Another Pickup</Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="bg-card rounded-lg border shadow-sm p-6">
                      <h2 className="text-xl font-semibold mb-6">Schedule a Free Pickup</h2>
                      
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Contact Information */}
                        <div>
                          <h3 className="text-lg font-medium mb-4">Contact Information</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="name">Full Name <span className="text-destructive">*</span></Label>
                              <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone Number <span className="text-destructive">*</span></Label>
                              <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        
                        {/* Pickup Address */}
                        <div>
                          <h3 className="text-lg font-medium mb-4">Pickup Address</h3>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="address">Street Address <span className="text-destructive">*</span></Label>
                              <Input
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="city">City <span className="text-destructive">*</span></Label>
                                <Input
                                  id="city"
                                  name="city"
                                  value={formData.city}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="state">State <span className="text-destructive">*</span></Label>
                                <Select 
                                  value={formData.state} 
                                  onValueChange={(value) => setFormData({...formData, state: value})}
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select State" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="ca">California</SelectItem>
                                    <SelectItem value="ny">New York</SelectItem>
                                    <SelectItem value="tx">Texas</SelectItem>
                                    {/* Add more states as needed */}
                                  </SelectContent>
                                </Select>
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="zip">ZIP Code <span className="text-destructive">*</span></Label>
                                <Input
                                  id="zip"
                                  name="zip"
                                  value={formData.zip}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Pickup Schedule */}
                        <div>
                          <h3 className="text-lg font-medium mb-4">Pickup Schedule</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="date">Preferred Date <span className="text-destructive">*</span></Label>
                              <Input
                                id="date"
                                name="date"
                                type="date"
                                value={formData.date}
                                onChange={handleChange}
                                min={new Date().toISOString().split('T')[0]}
                                required
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="time">Preferred Time <span className="text-destructive">*</span></Label>
                              <Select 
                                value={formData.time} 
                                onValueChange={(value) => setFormData({...formData, time: value})}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select Time" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
                                  <SelectItem value="afternoon">Afternoon (12pm - 4pm)</SelectItem>
                                  <SelectItem value="evening">Evening (4pm - 7pm)</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            We'll try to accommodate your preferred time, but exact pickup windows may vary.
                          </p>
                        </div>
                        
                        {/* Donation Details */}
                        <div>
                          <h3 className="text-lg font-medium mb-4">Donation Details</h3>
                          
                          <div className="space-y-4">
                            <div>
                              <Label className="mb-2 block">Types of Items <span className="text-destructive">*</span></Label>
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                {['Clothing', 'Shoes', 'Accessories', 'Bags', 'Jewelry', 'Home Textiles'].map((item) => (
                                  <div key={item} className="flex items-center">
                                    <input
                                      type="checkbox"
                                      id={`item-${item.toLowerCase()}`}
                                      checked={formData.itemTypes.includes(item)}
                                      onChange={() => toggleItemType(item)}
                                      className="h-4 w-4 text-primary border-input rounded focus:ring-primary"
                                    />
                                    <label
                                      htmlFor={`item-${item.toLowerCase()}`}
                                      className="ml-2 text-sm cursor-pointer"
                                    >
                                      {item}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="description">Item Description</Label>
                              <Textarea
                                id="description"
                                name="description"
                                placeholder="Please provide a brief description of the items you're donating..."
                                value={formData.description}
                                onChange={handleChange}
                                className="resize-none min-h-[80px]"
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="instructions">Special Instructions</Label>
                              <Textarea
                                id="instructions"
                                name="instructions"
                                placeholder="Any pickup instructions for our driver? (e.g., 'Ring bell for apartment 3B')"
                                value={formData.instructions}
                                onChange={handleChange}
                                className="resize-none min-h-[80px]"
                              />
                            </div>
                          </div>
                        </div>
                        
                        {/* Agreement & Submit */}
                        <div className="border-t pt-6">
                          <div className="flex items-start mb-6">
                            <input
                              type="checkbox"
                              id="agreement"
                              required
                              className="h-4 w-4 mt-1 text-primary border-input rounded focus:ring-primary"
                            />
                            <label htmlFor="agreement" className="ml-2 text-sm">
                              I confirm that all items are clean, in good condition, and meet the donation guidelines. 
                              I understand that items that do not meet the requirements may not be accepted.
                            </label>
                          </div>
                          
                          <Button type="submit" disabled={submitting} className="w-full">
                            {submitting ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Scheduling...
                              </>
                            ) : (
                              'Schedule Pickup'
                            )}
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="bg-card rounded-lg border shadow-sm p-6 space-y-6 sticky top-24">
                      <h3 className="text-lg font-semibold">How It Works</h3>
                      
                      <div className="space-y-4">
                        <div className="flex">
                          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
                            1
                          </div>
                          <div className="ml-4">
                            <h4 className="font-medium">Schedule</h4>
                            <p className="text-sm text-muted-foreground">
                              Fill out the form with your pickup details and preferred time.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex">
                          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
                            2
                          </div>
                          <div className="ml-4">
                            <h4 className="font-medium">Prepare</h4>
                            <p className="text-sm text-muted-foreground">
                              Pack your clean, gently used items in bags or boxes.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex">
                          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
                            3
                          </div>
                          <div className="ml-4">
                            <h4 className="font-medium">Pickup</h4>
                            <p className="text-sm text-muted-foreground">
                              Our driver will collect your donations at the scheduled time.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex">
                          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
                            4
                          </div>
                          <div className="ml-4">
                            <h4 className="font-medium">Impact</h4>
                            <p className="text-sm text-muted-foreground">
                              Your items help support our community programs and reduce waste.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t pt-4">
                        <div className="flex items-start">
                          <AlertCircle className="h-5 w-5 text-primary mt-0.5 mr-2" />
                          <p className="text-sm">
                            All donations are tax-deductible. You'll receive a donation receipt via email.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="guidelines">
              <div className="bg-card rounded-lg border shadow-sm p-8">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-heading font-semibold mb-6">Donation Guidelines</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-medium mb-4">What We Accept</h3>
                      
                      <div className="space-y-4">
                        {acceptedItems.map((item, index) => (
                          <div key={index} className="flex">
                            <CheckCircle className="h-5 w-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                            <div>
                              <p className="font-medium">{item.type}</p>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">What We Cannot Accept</h3>
                      
                      <div className="space-y-4">
                        <div className="flex">
                          <AlertCircle className="h-5 w-5 text-destructive mt-0.5 mr-3 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Damaged Items</p>
                            <p className="text-sm text-muted-foreground">Items with holes, stains, excessive wear, or strong odors</p>
                          </div>
                        </div>
                        
                        <div className="flex">
                          <AlertCircle className="h-5 w-5 text-destructive mt-0.5 mr-3 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Certain Materials</p>
                            <p className="text-sm text-muted-foreground">Fur, leather from exotic animals, or items containing harmful chemicals</p>
                          </div>
                        </div>
                        
                        <div className="flex">
                          <AlertCircle className="h-5 w-5 text-destructive mt-0.5 mr-3 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Non-Clothing Items</p>
                            <p className="text-sm text-muted-foreground">Electronics, furniture, toys, or household appliances</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Preparation Requirements</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                          <CardContent className="p-6">
                            <h4 className="font-medium mb-2 flex items-center">
                              <Truck className="h-5 w-5 mr-2 text-primary" /> Pickup Requirements
                            </h4>
                            <ul className="text-sm space-y-2">
                              <li>Items should be placed in bags or boxes</li>
                              <li>Ensure donations are ready at the scheduled time</li>
                              <li>Place in a visible, easily accessible location</li>
                              <li>Label boxes/bags with "Dapper Donation"</li>
                            </ul>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardContent className="p-6">
                            <h4 className="font-medium mb-2 flex items-center">
                              <Clock className="h-5 w-5 mr-2 text-primary" /> Drop-off Information
                            </h4>
                            <ul className="text-sm space-y-2">
                              <li>Drop-off hours: Monday-Saturday, 10am-6pm</li>
                              <li>Locations in San Francisco, Oakland, and Berkeley</li>
                              <li>No appointment needed for drop-offs</li>
                              <li>Tax receipt provided on the spot</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                    
                    <div className="bg-muted rounded-lg p-6">
                      <h3 className="text-lg font-medium mb-2">Your Impact</h3>
                      <p className="mb-4">
                        Your donations make a significant difference in our community and the environment:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary">70%</div>
                          <p className="text-sm text-muted-foreground">of donations go directly to those in need</p>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary">20%</div>
                          <p className="text-sm text-muted-foreground">are sold to fund community programs</p>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary">10%</div>
                          <p className="text-sm text-muted-foreground">are recycled if they can't be reused</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Button asChild>
                      <a href="#pickup">Schedule a Pickup</a>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}