import {
  CircleCheck,
  Headset,
  ShieldCheck,
  Truck,
  Star,
} from "lucide-react";
import CategoryGrid from "@/components/CategoryGrid";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import {
  categories,
  educationItems,
  featuredProducts,
  testimonials,
  trustItems,
} from "@/data/homeData";

const trustIcons = [Truck, ShieldCheck, CircleCheck, Headset];

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <CategoryGrid categories={categories} />

      <section className="section-container py-16">
        <div className="grid items-center gap-8 rounded-sm bg-[#f8f6f1] p-6 shadow-luxe md:grid-cols-2 md:p-10">
          <img
            src="https://placehold.co/900x650?text=Custom+Ring+Builder"
            alt="Create your own ring"
            className="h-full w-full rounded-sm object-cover"
          />
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-gold">Unique Craftsmanship</p>
            <h2 className="mt-3 font-serif text-3xl">Create Your Own Ring</h2>
            <p className="mt-4 max-w-md text-black/70">
              Personalize your dream ring by selecting the diamond, setting, and metal that reflect your story.
            </p>
            <button
              type="button"
              className="mt-6 rounded-sm bg-black px-6 py-3 text-sm uppercase tracking-wide text-white transition hover:bg-gold hover:text-black"
            >
              Start Designing
            </button>
          </div>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.25em] text-gold">Signature Pieces</p>
          <h2 className="font-serif text-3xl">Featured Products</h2>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-2">
          {featuredProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#fafafa] py-16">
        <div className="section-container grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => {
            const Icon = trustIcons[index];
            return (
              <article key={item.title} className="rounded-sm bg-white p-6 shadow-luxe">
                <Icon className="text-gold" size={24} />
                <h3 className="mt-4 font-serif text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-black/70">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-container py-16">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.25em] text-gold">Education</p>
          <h2 className="font-serif text-3xl">Learn Before You Buy</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {educationItems.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-sm shadow-luxe">
              <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
              <div className="bg-white p-5">
                <h3 className="font-serif text-xl">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-container py-16">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.25em] text-gold">Testimonials</p>
          <h2 className="font-serif text-3xl">Loved by Our Customers</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-sm border border-black/10 bg-white p-6 shadow-luxe">
              <Star className="fill-gold text-gold" size={20} />
              <p className="mt-4 text-black/80">“{item.review}”</p>
              <p className="mt-4 font-serif text-lg">{item.name}</p>
              <p className="text-gold">{item.rating}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-black py-16 text-white">
        <div className="section-container text-center">
          <h2 className="font-serif text-3xl">Stay Updated</h2>
          <p className="mt-2 text-white/70">Get new arrivals, design inspiration, and exclusive offers.</p>
          <form className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row" action="#">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-sm border border-white/40 bg-transparent px-4 py-3 text-white placeholder:text-white/60 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-sm bg-gold px-6 py-3 text-sm font-medium uppercase tracking-wide text-black transition hover:bg-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
