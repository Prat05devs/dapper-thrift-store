"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Edit2, Trash2, Plus, ArrowUpRight, AlertCircle, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

export function SellerDashboard({ user }) {
  const [listings, setListings] = useState(user.listings || [])
  const [selectedListing, setSelectedListing] = useState(null)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  
  // Stats data
  const salesData = [
    { name: 'Jan', value: 14 },
    { name: 'Feb', value: 22 },
    { name: 'Mar', value: 18 },
    { name: 'Apr', value: 30 },
    { name: 'May', value: 24 },
    { name: 'Jun', value: 28 },
  ]
  
  const statsCards = [
    { title: 'Active Listings', value: listings.filter(l => l.status === 'Active').length, icon: Plus },
    { title: 'Total Sales', value: '$1,284.50', icon: ArrowUpRight },
    { title: 'Avg. Item Price', value: '$32.65', icon: BarChart3 },
  ]
  
  const handleDelete = (listing) => {
    setSelectedListing(listing)
    setShowDeleteDialog(true)
  }
  
  const confirmDelete = () => {
    // TODO: Connect to backend API to delete listing
    // Example: await fetch(`/api/listings/${selectedListing.id}`, { method: 'DELETE' });
    
    // Update local state for now
    setListings(listings.filter(l => l.id !== selectedListing.id))
    setShowDeleteDialog(false)
  }
  
  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statsCards.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Sales Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Sales Overview</CardTitle>
          <CardDescription>
            Your sales activity over the last 6 months
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      {/* Listings Table */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Your Listings</h2>
          <Button asChild>
            <Link href="/sell?tab=new-listing">
              <Plus className="mr-2 h-4 w-4" />
              New Listing
            </Link>
          </Button>
        </div>
        
        {listings.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="bg-muted rounded-full p-3 mb-4">
                <AlertCircle className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No Listings Found</h3>
              <p className="text-muted-foreground text-center mb-4">
                You haven't created any listings yet. Start selling your pre-loved items today!
              </p>
              <Button asChild>
                <Link href="/sell?tab=new-listing">Create Your First Listing</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-3 font-medium text-muted-foreground">Item</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Price</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Stats</th>
                  <th className="text-right p-3 font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {listings.map((listing) => (
                  <tr key={listing.id} className="bg-card">
                    <td className="p-3">
                      <div className="flex items-center">
                        <div className="relative h-12 w-12 rounded overflow-hidden mr-3">
                          <Image
                            src={listing.imageUrl}
                            alt={listing.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="font-medium">{listing.name}</span>
                      </div>
                    </td>
                    <td className="p-3">${listing.price.toFixed(2)}</td>
                    <td className="p-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        listing.status === 'Active' 
                          ? 'bg-success/10 text-success' 
                          : listing.status === 'Sold' 
                            ? 'bg-accent/10 text-accent' 
                            : 'bg-muted text-muted-foreground'
                      }`}>
                        {listing.status}
                      </span>
                    </td>
                    <td className="p-3 text-sm">
                      <div className="flex flex-col">
                        <span>{listing.views} views</span>
                        <span>{listing.likes} likes</span>
                      </div>
                    </td>
                    <td className="p-3 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            Actions
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Manage Listing</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Edit2 className="mr-2 h-4 w-4" />
                            Edit Listing
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDelete(listing)} className="text-destructive focus:text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      
      {/* Delete Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the listing "{selectedListing?.name}". 
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}