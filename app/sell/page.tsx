"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { SellerDashboard } from '@/components/seller-dashboard'
import { ListingForm } from '@/components/listing-form'
import { mockUser } from '@/lib/mock-data'

export default function SellPage() {
  const [user, setUser] = useState(mockUser)
  // This would normally be fetched from your auth system
  const isAuthenticated = true

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-muted py-12">
        <div className="container">
          <h1 className="text-4xl font-heading font-bold mb-4">Seller Dashboard</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Manage your listings, track sales, and list new items for the Dapper community.
          </p>
        </div>
      </div>

      {isAuthenticated ? (
        <div className="container py-8 md:py-12">
          <Tabs defaultValue="dashboard">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="new-listing">Create Listing</TabsTrigger>
            </TabsList>
            
            <TabsContent value="dashboard" className="mt-0">
              <SellerDashboard user={user} />
            </TabsContent>
            
            <TabsContent value="new-listing" className="mt-0">
              <ListingForm />
            </TabsContent>
          </Tabs>
        </div>
      ) : (
        <div className="container py-12 text-center">
          <div className="max-w-md mx-auto bg-card rounded-lg border p-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">Sign In to Start Selling</h2>
            <p className="text-muted-foreground mb-6">
              You need to create an account or sign in to access the seller dashboard and list items.
            </p>
            <div className="space-y-4">
              <Button size="lg" className="w-full" asChild>
                <Link href="/auth/signin">Sign In</Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full" asChild>
                <Link href="/auth/signup">Create Account</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}