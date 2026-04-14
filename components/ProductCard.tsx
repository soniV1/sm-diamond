import { Product } from "@/data/homeData";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="min-w-[260px] overflow-hidden rounded-sm border border-black/10 bg-white shadow-luxe sm:min-w-[300px]">
      <img src={product.image} alt={product.name} className="h-72 w-full object-cover" />
      <div className="space-y-3 p-5">
        <h3 className="font-serif text-xl">{product.name}</h3>
        <p className="text-gold">{product.price}</p>
        <button
          type="button"
          className="w-full rounded-sm border border-black bg-black px-4 py-2 text-sm uppercase tracking-wide text-white transition hover:bg-white hover:text-black"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}
