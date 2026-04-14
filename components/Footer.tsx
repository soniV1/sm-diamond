import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 bg-black py-14 text-white">
      <div className="section-container grid gap-10 md:grid-cols-4">
        <div>
          <h3 className="font-serif text-2xl">SM Diamonds</h3>
          <p className="mt-3 text-sm text-white/70">Timeless diamond jewelry crafted with precision.</p>
        </div>

        <div>
          <h4 className="font-serif text-lg">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            {['Home', 'Diamonds', 'Jewelry', 'Custom Design'].map((item) => (
              <li key={item}>
                <Link href="#" className="transition hover:text-gold">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>hello@smdiamonds.com</li>
            <li>+1 (800) 123-4567</li>
            <li>New York, United States</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg">Follow Us</h4>
          <div className="mt-3 flex gap-3 text-white/80">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="rounded-full border border-white/20 p-2 transition hover:border-gold hover:text-gold"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
