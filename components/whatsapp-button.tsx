import { Phone } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/1234567890" // Replace with your actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:bg-green-600"
    >
      <Phone className="h-6 w-6" />
    </a>
  )
}

