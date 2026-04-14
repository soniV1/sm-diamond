import Link from "next/link";
import { Search, ShoppingBag, User } from "lucide-react";

const menuItems = ["Home", "Engagement Rings", "Diamonds", "Jewelry", "Custom Design"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="section-container flex h-20 items-center justify-between">
        <Link href="/" className="font-serif text-xl tracking-wide">
          SM Diamonds
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {menuItems.map((item) => (
            <Link
              key={item}
              href="#"
              className="text-sm uppercase tracking-wide text-black/80 transition-colors duration-300 hover:text-gold"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {[Search, ShoppingBag, User].map((Icon, idx) => (
            <button
              key={idx}
              type="button"
              className="rounded-full p-2 text-black transition-all duration-300 hover:bg-black hover:text-white"
              aria-label="action"
            >
              <Icon size={18} />
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
