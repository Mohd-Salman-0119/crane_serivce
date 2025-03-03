import { Phone, Mail } from "lucide-react"

export function TopNavbar() {
    return (
        <div className="bg-gray-100 py-2 md:text-sm fixed text-xs lg:px-16 md:px-8 px-4 w-full z-50 md:flex hidden">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="flex md:flex-row items-center md:space-x-4 w-full md:w-auto justify-between">
                    <span className="flex items-center gap-4">
                        <Phone className="h-4 w-4 mr-1" />
                        <a href="tel:+91 9638826667" className="text-primary hover:underline">+91 9638826667</a>
                        <a href="tel:+91 9974767760" className="text-primary hover:underline">+91 9974767760</a>
                        <a href="tel:+91 9081601077" className="text-primary hover:underline">+91 9081601077</a>
                    </span>
                </div>
                <span className="flex items-center">
                    <Mail className="h-4 w-4 mr-1" />
                    <a href="mailto:tirangacraneservice@gmail.com" className="text-primary hover:underline">tirangacraneservice@gmail.com</a>
                </span>
            </div>
        </div>
    )
}

