import { FrontPic, SliderImage1, SliderImage2, SliderImage3, SliderImage4, SliderImage5 } from "@/public/assets";
import {
  GalleryImage1,
  GalleryImage2,
  GalleryImage3,
  GalleryImage4,
  GalleryImage5,
  GalleryImage6,
  GalleryImage7,
  GalleryImage8,
  GalleryImage9,
  GalleryImage10,
  GalleryImage11,
  GalleryImage12,
  GalleryImage13,
  GalleryImage14,
  GalleryImage15,
  GalleryImage16,
  GalleryImage17,
  GalleryImage18,
  GalleryImage19,
  GalleryImage20,
  GalleryImage21,
  GalleryImage22,
  GalleryImage23,
  GalleryImage24,
  GalleryImage25,
  GalleryImage26,
  GalleryImage27,
  GalleryImage28,
  GalleryImage29,
  GalleryImage30,
  GalleryImage31,
  GalleryImage32,
} from '@/public/gallery'
import { Manager, OperationHead, Owner } from "@/public/team";



export const COMPANY_DATA = {
  hero: [
    FrontPic,
    SliderImage1,
    SliderImage2,
    SliderImage3,
    SliderImage4,
    SliderImage5,
  ],
  stats: [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Government Projects" },
    { number: "200+", label: "Satisfied Clients" },
    { number: "17", label: "Years Experience" },
  ],
  team: [
    {
      name: "Abid Husain Ansari",
      role: "Owner",
      image: Owner,
    },
    {
      name: "Ansari Wajid Ali",
      role: "Manager",
      image: Manager,
    },
    {
      name: "Khalid Ansari",
      role: "Operation Head",
      image: OperationHead,
    }
  ],
  galleryImages: [
    GalleryImage1,
    GalleryImage2,
    GalleryImage3,
    GalleryImage4,
    GalleryImage5,
    GalleryImage6,
    GalleryImage7,
    GalleryImage8,
    GalleryImage9,
    GalleryImage10,
    GalleryImage11,
    GalleryImage12,
    GalleryImage13,
    GalleryImage14,
    GalleryImage15,
    GalleryImage16,
    GalleryImage17,
    GalleryImage18,
    GalleryImage19,
    GalleryImage20,
    GalleryImage21,
    GalleryImage22,
    GalleryImage23,
    GalleryImage24,
    GalleryImage25,
    GalleryImage26,
    GalleryImage27,
    GalleryImage28,
    GalleryImage29,
    GalleryImage30,
    GalleryImage31,
    GalleryImage32,
  ],
  testimonials: [
    {
      text: "Tiranga Crane Service provided exceptional support for our project. Their team's expertise and state-of-the-art equipment ensured smooth operations throughout.",
      author: "Vikram Mehta",
      role: "Project Manager, MegaBuild Corp",
      rating: 5,
      image: "/assets/vikram-mehta.jpg"
    },
    {
      text: "We've been working with Tiranga for years, and their commitment to safety and efficiency is unmatched. They're our go-to crane service provider.",
      author: "Anita Desai",
      role: "Site Supervisor, Skyline Developers",
      rating: 5,
      image: "/assets/anita-desai.png"

    },
    {
      text: "The professionalism and skill of Tiranga's crane operators are truly work exceptionally impressive and outstanding. They handled our complex lifting requirements with ease.",
      author: "Sanjay Gupta",
      role: "Chief Engineer, InfraTech Solutions",
      rating: 5,
      image: "/assets/sanjay.jpg"

    },
  ],
  footer: {
    services: ["Crane Rental", "Construction Support", "Heavy Lifting", "Equipment Transport"],
    contact: {
      email: "tirangacraneservice@gmail.com",
      phone1: "+91 9638826667",
      phone2: "+91 9974767760",
      phone3: "+91 9081601077",
      address: "00 BHATIYA VISTAR BHACHAU, \nKachchh, Gujarat 370140",
    },
  },
  mechanicalServices: [
    {
      name: "Pipe Line",
      description: "We provide best quality service in pipe line fabrication, installation and testing",
      icon: "🔧",
      image: "/mechanical-services/pipe-line.jpg",
    },
    {
      name: "Structural Steel Works",
      description:
        "We are providing quality fabrication steel metal structures to our clients. E.g. Sheds, Walk Way, FOB, FEB, Towers, etc.",
      icon: "🏗️",
      image: "/mechanical-services/steel-works.jpeg",
    },
    {
      name: "MS Tanks",
      description: "We provide best tank fabrication service with experienced and dedicated team on field.",
      icon: "🛢️",
      image: "/mechanical-services/ms-tanks.webp",
    },
  ],
  buildingTypes: [
    { name: "Warehouse", icon: "🏭", image: "/building-types/warehouse.jpeg" },
    { name: "Industrial Building", icon: "🏗️", image: "/building-types/industrial-building.jpg" },
    { name: "Commercial Building", icon: "🏢", image: "/building-types/commercial-building.jpg" },
    { name: "Office Building", icon: "🏛️", image: "/building-types/office-building.jpg" },
    { name: "Showrooms", icon: "🏪", image: "/building-types/showrooms.webp" },
    { name: "Car Parking", icon: "🅿️", image: "/building-types/car-parking.jpg" },
  ]
}

