"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle } from 'lucide-react'

export function BidModal({ isOpen, onClose, onSubmit, product }) {
  const [step, setStep] = useState(1)
  const [bidAmount, setBidAmount] = useState(product?.price || 0)
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      onSubmit({
        productId: product.id,
        amount: bidAmount,
        message: message,
      })
      
      setIsSubmitting(false)
      setStep(2) // Move to success step
    }, 1000)
  }
  
  const resetAndClose = () => {
    setStep(1)
    setBidAmount(product?.price || 0)
    setMessage('')
    onClose()
  }
  
  return (
    <Dialog open={isOpen} onOpenChange={resetAndClose}>
      <DialogContent className="sm:max-w-[500px]">
        {step === 1 ? (
          <>
            <DialogHeader>
              <DialogTitle>Place a Bid</DialogTitle>
              <DialogDescription>
                Enter your bid amount and add a message for the seller.
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-6 py-4">
              <div className="flex gap-4 items-start">
                <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src={product?.imageUrl || ''}
                    alt={product?.name || 'Product image'}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div>
                  <h4 className="font-medium">{product?.name}</h4>
                  <p className="text-sm text-muted-foreground">Size: {product?.size}</p>
                  <p className="text-sm font-medium">Listed Price: ${product?.price.toFixed(2)}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bid-amount">Bid Amount ($)</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <Input
                    id="bid-amount"
                    type="number"
                    step="0.01"
                    min={0}
                    value={bidAmount}
                    onChange={(e) => setBidAmount(parseFloat(e.target.value))}
                    className="pl-7"
                    required
                  />
                </div>
                {bidAmount < product?.price && (
                  <p className="text-sm text-destructive">
                    Your bid is below the listed price.
                  </p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message to Seller (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Introduce yourself and explain why you're interested in this item..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="resize-none min-h-[100px]"
                />
              </div>
              
              <DialogFooter>
                <Button type="button" variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting || bidAmount <= 0}>
                  {isSubmitting ? 'Submitting...' : 'Place Bid'}
                </Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <div className="py-6 flex flex-col items-center text-center">
            <div className="bg-success/10 rounded-full p-3 mb-4">
              <CheckCircle className="h-10 w-10 text-success" />
            </div>
            
            <DialogTitle className="mb-2">Bid Submitted Successfully!</DialogTitle>
            <DialogDescription className="mb-6">
              We've sent your bid of ${bidAmount.toFixed(2)} to the seller. 
              You'll receive a notification when they respond.
            </DialogDescription>
            
            <Button onClick={resetAndClose}>Done</Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}