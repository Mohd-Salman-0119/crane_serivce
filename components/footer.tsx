import { COMPANY_DATA } from "@/lib/constants"
import { Facebook, Globe, Instagram, Locate, LocateIcon, Mail, MapPinned, Phone, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 lg:px-16 md:px-8 px-4 py-12 text-gray-300">
      <div className="container mx-auto grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Tiranga Crane Service</h3>
          <p className="text-sm">Elevating your projects with reliable and efficient crane services.</p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
          <ul className="space-y-2">
            {COMPANY_DATA.footer.services.map((service, index) => (
              <li key={index} className="hover:underline cursor-pointer">
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
          <ul className="space-y-2">
            <li className="flex gap-1 items-center"><Mail className="h-4 w-4 mr-1" /><a href="tel:+1234567890" className="hover:underline">{COMPANY_DATA.footer.contact.email}</a></li>
            <li className="flex gap-1 items-center"><Phone className="h-4 w-4 mr-1" /><a href="mailto:info@tirangacraneservice.com" className="hover:underline">{COMPANY_DATA.footer.contact.phone1}</a></li>
            <li className="flex gap-1 items-center"><Phone className="h-4 w-4 mr-1" /><a href="mailto:info@tirangacraneservice.com" className="hover:underline">{COMPANY_DATA.footer.contact.phone2}</a></li>
            <li className="flex gap-1 items-center"><Phone className="h-4 w-4 mr-1" /><a href="mailto:info@tirangacraneservice.com" className="hover:underline">{COMPANY_DATA.footer.contact.phone3}</a></li>
            <li className="flex gap-1 items-center whitespace-pre-line"><MapPinned className="h-4 w-4 mr-1" />{COMPANY_DATA.footer.contact.address}</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="text-gray-300 hover:text-blue-800">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-pink-500">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-800">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t border-gray-800 pt-8 text-center md:text-base text-sm">
        <p>&copy; {new Date().getFullYear()} Tiranga Crane Service. All rights reserved.</p>
        <p className="flex gap-1 items-center justify-center">
          <Globe className="inline-block h-4 w-4 mr-1" />
          Developed by <a href="https://mohd-salman-0119.github.io/" className="text-white hover:underline">Mohd Salman</a>
        </p>
      </div>

    </footer >
  )
}

