export type Category = {
  title: string;
  image: string;
};

export type Product = {
  name: string;
  price: string;
  image: string;
};

export const categories: Category[] = [
  { title: "Engagement Rings", image: "https://placehold.co/800x1000?text=Engagement+Rings" },
  { title: "Wedding Bands", image: "https://placehold.co/800x1000?text=Wedding+Bands" },
  { title: "Earrings", image: "https://placehold.co/800x1000?text=Earrings" },
  { title: "Necklaces", image: "https://placehold.co/800x1000?text=Necklaces" },
  { title: "Bracelets", image: "https://placehold.co/800x1000?text=Bracelets" },
];

export const featuredProducts: Product[] = [
  { name: "Radiant Solitaire Ring", price: "$2,499", image: "https://placehold.co/600x700?text=Ring+1" },
  { name: "Classic Halo Ring", price: "$3,199", image: "https://placehold.co/600x700?text=Ring+2" },
  { name: "Pear Diamond Pendant", price: "$1,899", image: "https://placehold.co/600x700?text=Pendant" },
  { name: "Diamond Tennis Bracelet", price: "$2,099", image: "https://placehold.co/600x700?text=Bracelet" },
];

export const trustItems = [
  { title: "Free Shipping", description: "Fast and secure delivery worldwide." },
  { title: "Lifetime Warranty", description: "Timeless quality with lifetime care." },
  { title: "Certified Diamonds", description: "GIA and IGI certified brilliance." },
  { title: "24/7 Support", description: "Luxury support whenever you need us." },
];

export const educationItems = [
  { title: "Diamond Buying Guide", image: "https://placehold.co/700x500?text=Buying+Guide" },
  { title: "4Cs Explained", image: "https://placehold.co/700x500?text=4Cs" },
  { title: "Ring Size Guide", image: "https://placehold.co/700x500?text=Ring+Size" },
];

export const testimonials = [
  {
    name: "Sophia M.",
    review:
      "The custom ring experience was seamless. The final piece is breathtaking and exactly what I envisioned.",
    rating: "★★★★★",
  },
  {
    name: "Daniel R.",
    review:
      "Exceptional craftsmanship and transparent diamond quality. Truly a premium shopping experience.",
    rating: "★★★★★",
  },
  {
    name: "Ava L.",
    review:
      "Elegant designs, excellent support, and fast shipping. I highly recommend SM Diamonds.",
    rating: "★★★★★",
  },
];
