"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { X } from 'lucide-react'
import { Certificate1, Certificate2, Certificate3, Certificate4 } from "@/public/certifications"

const certificates = [
  { name: "UDYAM Registration", image: Certificate1 },
  { name: "GSTIN", image: Certificate2 },
  { name: "Certificate", image: Certificate3 },
  { name: "Registration", image: Certificate4 },
]

export function CertificateSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  return (
    <section id="certificates" className="container mx-auto lg:px-16 md:px-8 px-4 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold">Our Certifications</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {certificates.map((cert, index) => (
          <div key={index} className="rounded-lg cursor-pointer border shadow-sm p-2 " onClick={() => setSelectedCertificate(cert.image)}>
            <div className="relative h-64 w-full">
              <Image src={cert.image || "/placeholder.svg"} alt={cert.name} fill className="object-cover rounded-md" />
            </div>
            <p className="mt-2 text-center font-semibold">{cert.name}</p>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl w-full mx-2 sm:mx-auto p-4 sm:p-6 rounded-lg sm:h-auto">
          {/* Close Button with Icon */}
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" />

          {selectedCertificate && (
            <div className="relative w-full h-[75vh] sm:h-[70vh]">
              <Image src={selectedCertificate || "/placeholder.svg"} alt="Certificate" fill className="object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>

    </section>
  )
}
