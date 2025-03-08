"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogClose, DialogHeader } from "@/components/ui/dialog"
import { X } from 'lucide-react'
import { Certificate1, Certificate2, Certificate3, Certificate4 } from "@/public/certifications"
import { DialogTitle } from "@radix-ui/react-dialog"

const certificates = [
  { name: "UDYAM Registration", image: '/certifications/certificate1.jpg' },
  { name: "GSTIN", image: "/certifications/certificate2.jpg" },
  { name: "Certificate", image: "/certifications/certificate3.jpg" },
  { name: "Registration", image: "/certifications/certificate4.jpg" },
]

export function CertificateSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  return (
    <section id="certificates" className="container mx-auto lg:px-16 md:px-8 px-4 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold">Our Certifications</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {certificates.map((cert, index) => (
          <div key={index} className="rounded-lg cursor-pointer border shadow-sm p-2 " onClick={() => setSelectedCertificate(cert?.image)}>
            <div className="relative h-64 w-full">
              <Image src={cert.image || "/placeholder.svg"} alt={cert.name} fill className="object-cover rounded-md" />
            </div>
            <p className="mt-2 text-center font-semibold">{cert.name}</p>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl w-full mx-2 sm:mx-auto p-4 sm:p-6 rounded-lg sm:h-auto">
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" />

          <DialogHeader className="w-full flex justify-between items-center">
            <DialogTitle className="text-lg font-semibold">Certificate Preview</DialogTitle>
          </DialogHeader>
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
