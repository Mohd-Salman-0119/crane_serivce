"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, MapPinned, Menu, Phone, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { TcsLogo, TcsLogo2, TcsLogoRB, TcsLogoRB2 } from "@/public/assets"
import { COMPANY_DATA } from "@/lib/constants"

const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Building Types", href: "#building-types" },
    { name: "Mechanical Services", href: "#mechanical-services" },
    { name: "Certificates", href: "#certificates" },
    { name: "Projects Gallery", href: "#project-gallery" },
    { name: "Team", href: "#team" },
    { name: "Review", href: "#review" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-background shadow-md fixed w-full z-50 md:mt-8 mt-0">
            <div className="container mx-auto lg:px-16 lmd:px-4 px-4 t">
                <div className="flex items-center justify-between py-4">
                    <div className="flex gap-2 items-center">
                        <Image src={TcsLogoRB} alt="Tiranga Crane Service" className="md:w-14 md:h-14 w-12 h-12" />
                        <h1 className="font-bold tracking-tight text-lg bg-clip-text text-black lg:hidden flex"
                        >
                            Tiranga Crane Service
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    {/* <div className="hidden lg:flex items-center space-x-4">
                        {navItems.map((item) => (
                            <Link key={item.name} href={item.href} className="text-gray-700 hover:text-primary">
                                {item.name}
                            </Link>
                        ))}
                        <ContactDialog />
                    </div> */}
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative text-gray-700 hover:text-primary font-semibold py-1 transition duration-300
                before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:rounded-lg before:bg-gradient-to-r 
                before:from-orange-500 before:via-white before:to-green-500 
                before:transition-all before:duration-300 hover:before:w-full"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <ContactDialog />
                    </div>

                    {/* Mobile Navigation */}
                    <div className="lg:hidden">
                        <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X /> : <Menu className="h-12 w-12" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2 rounded-md text-base font-bold text-gray-700 hover:text-primary hover:bg-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <ContactDialog />
                    </div>
                </div>
            )}
        </nav>
    )
}

function ContactDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default">Contact Us</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Contact Us</DialogTitle>
                    <DialogDescription>Get in touch with our team for any inquiries.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <ul className="flex flex-wrap items-center justify-start gap-x-2 gap-y-1 text-base">
                        <li className="flex items-center gap-1">
                            <Phone className="h-4 w-4 mr-1" />
                            <a href={`tel:${COMPANY_DATA.footer.contact.phone1}`} className="hover:underline">
                                {COMPANY_DATA.footer.contact.phone1}
                            </a>
                        </li>
                        <li className="flex items-center gap-1">
                            <Phone className="h-4 w-4 mr-1" />
                            <a href={`tel:${COMPANY_DATA.footer.contact.phone2}`} className="hover:underline">
                                {COMPANY_DATA.footer.contact.phone2}
                            </a>
                        </li>
                        <li className="flex items-center gap-1">
                            <Phone className="h-4 w-4 mr-1" />
                            <a href={`tel:${COMPANY_DATA.footer.contact.phone3}`} className="hover:underline">
                                {COMPANY_DATA.footer.contact.phone3}
                            </a>
                        </li>
                    </ul>
                    <li className="flex gap-1 items-center">
                        <Mail className="h-4 w-4 mr-1" />
                        <a href={`mailto:${COMPANY_DATA.footer.contact.email}`} className="hover:underline">
                            {COMPANY_DATA.footer.contact.email}
                        </a>
                    </li>
                    <li className="flex gap-1 items-center">
                        <MapPinned className="h-4 w-4 mr-1" />
                        {COMPANY_DATA.footer.contact.address}
                    </li>
                </div>
            </DialogContent>
        </Dialog>
    )
}
