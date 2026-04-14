import { Category } from "@/data/homeData";

type CategoryGridProps = {
  categories: Category[];
};

export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <section className="section-container py-16">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-gold">Collections</p>
          <h2 className="font-serif text-3xl">Shop by Category</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {categories.map((category) => (
          <article key={category.title} className="group overflow-hidden rounded-sm bg-white shadow-luxe">
            <div className="overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-serif text-lg">{category.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
