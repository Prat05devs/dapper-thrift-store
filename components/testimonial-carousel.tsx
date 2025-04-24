"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { mockTestimonials } from '@/lib/mock-data'

export function TestimonialCarousel() {
  const [testimonials, setTestimonials] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Replace with actual API call to fetch testimonials
    // Example: const fetchTestimonials = async () => {
    //   try {
    //     const response = await fetch('/api/testimonials');
    //     const data = await response.json();
    //     setTestimonials(data);
    //   } catch (error) {
    //     console.error('Error fetching testimonials:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    
    // Simulate API call with mock data
    const timer = setTimeout(() => {
      setTestimonials(mockTestimonials);
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  if (loading || testimonials.length === 0) {
    return (
      <div className="h-64 flex items-center justify-center">
        <div className="animate-pulse bg-muted rounded-lg w-full max-w-5xl h-48"></div>
      </div>
    )
  }

  const testimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="bg-card rounded-xl overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-64 md:h-auto">
            <Image
              src={testimonial.imageUrl}
              alt={testimonial.name}
              fill
              className="object-cover object-center"
            />
          </div>
          
          <div className="p-8 flex flex-col justify-center">
            <div className="mb-6 text-accent">
              <Quote className="h-8 w-8" />
            </div>
            
            <blockquote className="text-lg italic mb-6">
              "{testimonial.quote}"
            </blockquote>
            
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
      
      <button
        onClick={prevTestimonial}
        className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 h-10 w-10 bg-background shadow-md rounded-full flex items-center justify-center text-foreground hover:bg-muted transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      
      <button
        onClick={nextTestimonial}
        className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 h-10 w-10 bg-background shadow-md rounded-full flex items-center justify-center text-foreground hover:bg-muted transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}