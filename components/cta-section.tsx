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

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when user starts typing
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() ? "" : "Name is required",
      phone: formData.phone.trim() ? "" : "Phone is required",
      message: formData.message.trim() ? "" : "Message is required",
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const sendToWhatsApp = () => {
    if (!validateForm()) return;

    const { name, phone, message } = formData;
    const whatsappNumber = "9638826667"; // Replace with your WhatsApp number (without +)

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
          <DialogContent className="max-w-md w-full mx-2 p-6 m-auto rounded-lg">
            <DialogHeader>
              <DialogTitle>Contact Us</DialogTitle>
            </DialogHeader>

            <div className="mb-4">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="mb-4">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            <div className="mb-4">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            <Button
              size="lg"
              className={`w-full ${Object.values(errors).some((err) => err) ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-700"}`}
              onClick={sendToWhatsApp}
              disabled={Object.values(errors).some((err) => err)}
            >
              <Send className="h-4 w-4 mr-1" /> Send to WhatsApp
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
