// import Image from "next/image";

import { getCurrentSession } from "@/actions/auth";
import { getAllProducts } from "@/sanity/lib/client";


export default async function Home() {
  const {user} = await getCurrentSession();
  const products = await getAllProducts();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product: any) => (
      <div key={product._id} className="border p-4 rounded shadow">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p>{product.description}</p>
        <p className="text-sm text-gray-600">${product.price}</p>
      </div>
      ))}
    </div>
  );
}
