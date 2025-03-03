'use client'
import type { Metadata } from 'next'
import { generateMetadata as generateSiteMetadata } from './seo'
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { TeamSection } from "@/components/team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { TopNavbar } from "@/components/top-navbar"
import { Navbar } from "@/components/main-navbar"
import { GallerySection } from "@/components/gallery-section"
import { GoogleMaps } from "@/components/google-map"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MechanicalServices } from "@/components/mechanical-services"
import { BuildingTypes } from "@/components/building-types"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"
import { CertificateSection } from "@/components/certificates-section"
import DownloadProfile from '@/components/download-profile'

export default function Page() {


  return (
    <div className="flex min-h-screen flex-col"
    >
      <TopNavbar />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <BuildingTypes />
      <MechanicalServices />
      <CertificateSection />
      <GallerySection />
      <TeamSection />
      <TestimonialsSection />
      <GoogleMaps />
      <CTASection />
      <DownloadProfile />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

