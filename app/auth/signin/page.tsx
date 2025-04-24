"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function SignInPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)
    
    try {
      // TODO: Connect to backend authentication API
      // Example: const response = await fetch('/api/auth/signin', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password })
      // });
      
      // const data = await response.json();
      // if (!response.ok) throw new Error(data.message || 'Sign in failed');
      
      // Simulate successful authentication
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Redirect to dashboard or home page
      router.push('/')
    } catch (err) {
      setError(err.message || 'An error occurred during sign in')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="grid w-full max-w-5xl grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="hidden lg:block relative rounded-xl overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg"
            alt="Sustainable Fashion"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/40 flex flex-col justify-between p-8 text-white">
            <div className="font-heading text-2xl font-bold">Dapper</div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
              <p className="text-white/90">
                Sign in to continue your sustainable fashion journey with Dapper.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-heading">Sign In</CardTitle>
              <CardDescription>
                Enter your email and password to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 rounded-md bg-destructive/10 text-destructive text-sm">
                    {error}
                  </div>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      href="/auth/forgot-password"
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pr-10"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </Button>
              </form>
              
              <div className="mt-4 text-center text-sm">
                <p>
                  Don't have an account?{' '}
                  <Link href="/auth/signup" className="text-primary hover:underline">
                    Sign up
                  </Link>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <div className="relative w-full">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full" type="button">
                  <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="w-full" type="button">
                  <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" />
                  </svg>
                  Facebook
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}