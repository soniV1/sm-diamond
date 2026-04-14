import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[72vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://placehold.co/1800x1000?text=Luxury+Diamond+Banner')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
      <div className="section-container relative flex min-h-[72vh] items-center">
        <div className="max-w-2xl text-white">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gold">SM Diamonds PVT LTD</p>
          <h1 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Design Your Perfect Diamond Ring
          </h1>
          <p className="mt-4 text-base text-white/85 sm:text-lg">
            Crafted with precision. Designed for love.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#"
              className="rounded-sm bg-gold px-6 py-3 text-sm font-medium uppercase tracking-wide text-black transition hover:-translate-y-0.5 hover:bg-white"
            >
              Shop Diamonds
            </Link>
            <Link
              href="#"
              className="rounded-sm border border-white px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-black"
            >
              Create Your Ring
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
