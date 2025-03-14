// import Image from "next/image";

import { getCurrentSession } from "@/actions/auth";
import SalesCompaignBanner from "@/components/layout/SalesCompaignBanner";
import ProductGrid from "@/components/product/ProductGrid";
import { getAllProducts } from "@/sanity/lib/client";


export default async function Home() {
  const {user} = await getCurrentSession();
  const products = await getAllProducts();
  return (
    <div>
      <SalesCompaignBanner />
      <section className="container mx-auto px-6 py-6">
        <ProductGrid products={products} />
      </section>
    </div>
  );
}
