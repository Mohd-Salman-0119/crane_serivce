"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const { name, phone, message } = formData;
    const whatsappNumber = "7668264646"; // Replace with your WhatsApp number (without +)
    
    const text = `Hello, my name is ${name}. My phone number is ${phone}. Message: ${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="container mx-auto lg:px-16 md:px-8 px-4 py-16">
      <div className="rounded-lg bg-primary p-8 text-center text-primary-foreground md:p-16">
        <h2 className="mb-4 text-3xl font-bold">Ready to Elevate Your Project?</h2>
        <p className="mb-8 text-lg">Contact us today for a free consultation and quote</p>

        {/* Dialog for Contact Form */}
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" variant="secondary">Get in Touch</Button>
          </DialogTrigger>
          <DialogContent className="max-w-md w-full mx-2 p-6 rounded-lg">
            {/* Added DialogHeader and DialogTitle for accessibility */}
            <DialogHeader>
              <DialogTitle>Contact Us</DialogTitle>
            </DialogHeader>

            <div className="mb-4">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
            </div>

            <Button size="lg" className="w-full bg-green-500 hover:bg-green-700" onClick={sendToWhatsApp}>
              <Send className="h-4 w-4 mr-1"/> Send to WhatsApp
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
