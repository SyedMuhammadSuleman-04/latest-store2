// import { sanityFetch } from "@/sanity/lib/fetch";
// import { categories } from "@/sanity/lib/query";
// import Image from "next/image";
// import Link from "next/link";

// type Product = {
//   _id: string;
//   productName: string;
//   description: string;
//   price: number;
//   category: string;
//   inventory: number;
//   colors: string;
//   status: string;
//   imageUrl: string; // Use any because it will be processed by urlFor
// };

// export default async function Home() {
//   // Fetch all products
//   const products: Product[] = await sanityFetch({ query: categories });

//   // Filter the products to only get those at the indices 6, 13, 20, 26
//   const selectedProducts = [
//     1, 3, 2, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 7, 9, 11, 17,
//   ]
//     .map((index) => products[index])
//     .filter(Boolean); // .filter(Boolean) to remove any undefined values

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50 p-6">
//       {/* Page Header */}
//       <header className="mb-6">
//         <h1 className="text-3xl font-bold text-center">Nike Shoes</h1>
//       </header>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {selectedProducts.map((product) => (
//           <Link
//             href={`/productdetails/${product._id}`}
//             key={product._id}
//             className="bg-white p-4 rounded-md shadow hover:shadow-lg"
//           >
//             <div>
//               <Image
//                 src={product.imageUrl}
//                 alt={product.productName}
//                 width={300}
//                 height={300}
//                 className="w-full h-48 object-cover rounded-md cursor-pointer"
//               />
//               <div className="mt-4">
//                 <h2 className="font-semibold text-lg">{product.productName}</h2>
//                 <p className="font-bold mt-1 text-green-600">
//                   ₹ {product.price}
//                 </p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

import { sanityFetch } from "@/sanity/lib/fetch";
import { categories } from "@/sanity/lib/query";
import Image from "next/image";
import Link from "next/link";

type Product = {
  _id: string;
  productName: string;
  description: string;
  price: number;
  category: string;
  inventory: number;
  colors: string;
  status: string;
  imageUrl: string;
};

export default async function Home() {
  // Fetch all products
  const products: Product[] = await sanityFetch({ query: categories });

  // Select specific products
  const selectedProducts = [
    1, 3, 2, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 7, 9, 11, 17,
  ]
    .map((index) => products[index])
    .filter(Boolean);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900 p-6">
      {/* Page Header */}
      <header className="mb-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-900">
          Nike Shoes Collection
        </h1>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {selectedProducts.map((product) => (
          <Link
            href={`/productdetails/${product._id}`}
            key={product._id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div>
              <Image
                src={product.imageUrl}
                alt={product.productName}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4">
                <h2 className="font-semibold text-lg text-gray-900">
                  {product.productName}
                </h2>
                <p className="font-bold mt-1 text-red-600">₹ {product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
