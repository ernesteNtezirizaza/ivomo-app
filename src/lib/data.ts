import { TreePine, Wind, Coffee, Footprints, Bike, Utensils, Brush, Hammer, PartyPopper } from "lucide-react";
import React from "react";

export const servicesData = [
  {
    icon: React.createElement(TreePine, { size: 32 }),
    name: "Cultural Tours",
    description: "Discover authentic community life through guided cultural visits, local stories, and traditions. Connect directly with the people and culture of Ivomo.",
    color: "bg-primary",
    image: "/images/cultural_tour.png"
  },
  {
    icon: React.createElement(Wind, { size: 32 }),
    name: "Nature Walks",
    description: "Enjoy a peaceful guided walk through natural landscapes while learning about local plants and conservation with knowledgeable community guides.",
    color: "bg-organic-leaf",
    image: "/images/nature_walk.png"
  },
  {
    icon: React.createElement(Coffee, { size: 32 }),
    name: "Tea Time",
    description: "Visit nearby tea plantations and learn how tea is grown and processed. End your visit by enjoying freshly prepared tea in a scenic setting.",
    color: "bg-secondary",
    image: "/images/tea_experience.png"
  },
  {
    icon: React.createElement(Footprints, { size: 32 }),
    name: "Hiking",
    description: "Explore scenic hills and rural trails on a guided hike suitable for different fitness levels. Share insights about the land and local life.",
    color: "bg-organic-clay",
    image: "/images/hiking.png"
  },
  {
    icon: React.createElement(Bike, { size: 32 }),
    name: "Biking",
    description: "Cycle through villages and countryside routes while enjoying fresh air and beautiful views. Guided by local youth who know the area well.",
    color: "bg-accent",
    image: "/images/biking.png"
  },
  {
    icon: React.createElement(Utensils, { size: 32 }),
    name: "Gastronomy",
    description: "Taste traditional meals prepared by local community members using fresh, local ingredients. A true taste of local culture and hospitality.",
    color: "bg-orange-600",
    image: "/images/gastronomy.png"
  },
  {
    icon: React.createElement(Brush, { size: 32 }),
    name: "Pottery",
    description: "Take part in a hands-on pottery session guided by skilled local artisans. Learn traditional techniques and create your own handmade piece.",
    color: "bg-amber-800",
    image: "/images/pottery.png"
  },
  {
    icon: React.createElement(Hammer, { size: 32 }),
    name: "Blacksmith",
    description: "Observe traditional blacksmith work and learn how tools are made using age-old techniques. A rare look into an important local craft.",
    color: "bg-zinc-800",
    image: "/images/blacksmith.png"
  },
  {
    icon: React.createElement(PartyPopper, { size: 32 }),
    name: "Events",
    description: "Join community events such as cultural performances and celebrations. A lively and memorable way to experience local culture.",
    color: "bg-rose-500",
    image: "/images/wedding.png"
  }
];
