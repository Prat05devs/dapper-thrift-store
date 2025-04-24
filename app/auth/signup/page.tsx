"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Loader2, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function SignUpPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors({ ...errors, [name]: null })
    }
  }
  
  const validateStep1 = () => {
    const newErrors = {}
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const validateStep2 = () => {
    const newErrors = {}
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleNext = () => {
    if (validateStep1()) {
      setStep(2)
    }
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateStep2()) return
    
    setIsSubmitting(true)
    
    try {
      // TODO: Connect to backend registration API
      // Example: const response = await fetch('/api/auth/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // const data = await response.json();
      // if (!response.ok) throw new Error(data.message || 'Sign up failed');
      
      // Simulate successful registration
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Move to success step
      setStep(3)
    } catch (err) {
      setErrors({ form: err.message || 'An error occurred during registration' })
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="grid w-full max-w-5xl grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="hidden lg:block relative rounded-xl overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg"
            alt="Sustainable Fashion"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/40 flex flex-col justify-between p-8 text-white">
            <div className="font-heading text-2xl font-bold">Dapper</div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Join Our Community</h2>
              <p className="text-white/90">
                Create an account to start your sustainable fashion journey with Dapper.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-md">
            {step === 3 ? (
              <div className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 bg-success/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-success" />
                  </div>
                </div>
                
                <CardTitle className="text-2xl font-heading mb-4">
                  Registration Successful!
                </CardTitle>
                
                <CardDescription className="text-base mb-6">
                  Your account has been created. You can now sign in to start exploring sustainable fashion with Dapper.
                </CardDescription>
                
                <Button asChild className="w-full">
                  <Link href="/auth/signin">Continue to Sign In</Link>
                </Button>
              </div>
            ) : (
              <>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl font-heading">
                    {step === 1 ? 'Create an Account' : 'Set Your Password'}
                  </CardTitle>
                  <CardDescription>
                    {step === 1 
                      ? 'Enter your details to create your account' 
                      : 'Choose a secure password for your account'}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={step === 1 ? handleNext : handleSubmit} className="space-y-4">
                    {errors.form && (
                      <div className="p-3 rounded-md bg-destructive/10 text-destructive text-sm">
                        {errors.form}
                      </div>
                    )}
                    
                    {step === 1 ? (
                      <>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              required
                            />
                            {errors.firstName && (
                              <p className="text-sm text-destructive">{errors.firstName}</p>
                            )}
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              required
                            />
                            {errors.lastName && (
                              <p className="text-sm text-destructive">{errors.lastName}</p>
                            )}
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                          {errors.email && (
                            <p className="text-sm text-destructive">{errors.email}</p>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="password">Password</Label>
                          <div className="relative">
                            <Input
                              id="password"
                              name="password"
                              type={showPassword ? 'text' : 'password'}
                              value={formData.password}
                              onChange={handleChange}
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
                          {errors.password && (
                            <p className="text-sm text-destructive">{errors.password}</p>
                          )}
                          <p className="text-xs text-muted-foreground">
                            Password must be at least 8 characters long
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Confirm Password</Label>
                          <div className="relative">
                            <Input
                              id="confirmPassword"
                              name="confirmPassword"
                              type={showConfirmPassword ? 'text' : 'password'}
                              value={formData.confirmPassword}
                              onChange={handleChange}
                              className="pr-10"
                              required
                            />
                            <button
                              type="button"
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                              {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                          {errors.confirmPassword && (
                            <p className="text-sm text-destructive">{errors.confirmPassword}</p>
                          )}
                        </div>
                      </>
                    )}
                    
                    <div className="flex justify-between items-center pt-2">
                      {step === 2 && (
                        <Button type="button" variant="outline" onClick={() => setStep(1)}>
                          Back
                        </Button>
                      )}
                      <Button 
                        type={step === 1 ? 'button' : 'submit'} 
                        onClick={step === 1 ? handleNext : undefined}
                        className={step === 1 ? 'w-full' : ''}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Creating Account...
                          </>
                        ) : step === 1 ? (
                          'Continue'
                        ) : (
                          'Create Account'
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
                
                <CardFooter className="flex flex-col">
                  <p className="text-center text-sm">
                    Already have an account?{' '}
                    <Link href="/auth/signin" className="text-primary hover:underline">
                      Sign in
                    </Link>
                  </p>
                  
                  <div className="relative w-full mt-4">
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
              </>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}