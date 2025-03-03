import React from 'react'
import { HeroSection } from '@/components/HeroSection'
import { ServiceSection } from '@/components/ServiceSection'
import { BrandSection } from '@/components/BrandSection'
import { WorkSection } from '@/components/WorkSection'
import  {TestimonialSection}  from '@/components/TestimonialSection'

export default function Home() {
  return (
    <div className=' space-y-32 px-4 mb-16'>

      {/* hero section */}
      <HeroSection/>

      {/* service section */}
      <ServiceSection/>

      {/* brands */}
      <BrandSection />

      {/* work section  */}
      <WorkSection/>

      {/* testimonial section*/}
      <TestimonialSection/>
    </div>
  )
}
