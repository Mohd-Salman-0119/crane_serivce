"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { COMPANY_DATA } from '@/lib/constants'

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [showAll, setShowAll] = useState(false)

  const visibleImages = showAll ? COMPANY_DATA.galleryImages : COMPANY_DATA.galleryImages.slice(0, 4)

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % COMPANY_DATA.galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + COMPANY_DATA.galleryImages.length) % COMPANY_DATA.galleryImages.length)
  }

  return (
    <section className="py-8 bg-gray-100" id="project-gallery">
      <div className="container mx-auto lg:px-16 md:px-8 px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Our Projects Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openLightbox(index)}
            >
              <Image src={image} alt={`${image}`} fill className="object-cover" />
            </div>
          ))}
        </div>
        {!showAll && (
          <div className="text-center">
            <Button onClick={() => setShowAll(true)} className="bg-primary hover:bg-primary/90 text-white">
              View All Projects
            </Button>
          </div>
        )}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button className="absolute top-4 right-4 text-white" onClick={closeLightbox}>
            <X size={24} />
          </button>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold"
            onClick={prevImage}
          >
            &lt;
          </button>
          <Image
            src={COMPANY_DATA.galleryImages[currentImage] || "/placeholder.svg"}
            alt={`${COMPANY_DATA.galleryImages[currentImage]}`}
            width={800}
            height={600}
            className="max-w-full max-h-full object-contain"
          />
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold"
            onClick={nextImage}
          >
            &gt;
          </button>
        </div>
      )}
    </section>
  )
}

