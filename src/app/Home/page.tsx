// import Image from "next/image";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <div className="w-screen bg-gray-100 font-sans">
//       <div className="bg-gradient-to-r from-blue-500 to-teal-500 py-6 text-center rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
//         <h2 className="text-3xl font-bold text-white tracking-wide drop-shadow-lg">
//           WELCOME TO THE APP
//         </h2>
//         <p className="text-lg mt-2 text-white opacity-80">
//           Get ready to explore and experience the best features!
//         </p>
//       </div>

//       {/* Fullscreen Sneaker Image */}
//       <div className="relative w-full py-4 px-4 sm:px-12 bg-white">
//         <div className="max-w-12xl mx-auto">
//           <Image
//             src="/sneaker.png"
//             alt="Sneaker"
//             width={800}
//             height={350}
//             className="w-full h-auto object-cover object-center"
//           />
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="relative flex flex-col items-center text-center bg-white py-12">
//         <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">
//           First Look
//         </p>
//         <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
//           NIKE AIR MAX PULSE
//         </h1>
//         <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
//           Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
//           Pulse—designed to push you past your limits and help you go to the
//           max.
//         </p>
//         <div className="flex space-x-4">
//           <Link href="/Allproducts">
//             <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
//               Shop Air Max
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Best of Nike Shoes Section */}
//       <div className="bg-gray-100 px-6 py-8 relative rounded-lg shadow-lg mt-8">
//         <div className="flex justify-center items-center mb-6">
//           <div className="relative">
//             <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
//               <span>BEST OF NIKE SHOES</span>
//             </h2>
//             <div className="absolute bottom-0 left-0 right-0 h-1 mt-2 z-0"></div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
//           {/* Nike Shoes Image 1 */}
//           <Link href="/Categories">
//             <div className="border border-gray-200 rounded-xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 bg-white mx-auto mb-6 transform hover:bg-yellow-50">
//               <Image
//                 src="/30.png"
//                 alt="Nike Air Max Pulse"
//                 width={350}
//                 height={350}
//                 className="mx-auto h-auto w-full object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
//               />
//               <div className="mt-4 text-center">
//                 <h3 className="font-semibold text-xl text-gray-800">
//                   Nike Air Max Pulse
//                 </h3>
//                 <p className="text-gray-500 text-sm">Women&apos;s Shoes</p>
//                 <p className="font-bold mt-3 text-xl text-gray-800">₹ 13,995</p>
//               </div>
//             </div>
//           </Link>

//           {/* Nike Shoes Image 2 */}
//           <Link href="/Categories">
//             <div className="border border-gray-200 rounded-xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 bg-white mx-auto mb-6 transform hover:bg-yellow-50">
//               <Image
//                 src="/image2.png"
//                 alt="Nike Air Max Pulse"
//                 width={350}
//                 height={350}
//                 className="mx-auto h-auto w-full object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
//               />
//               <div className="mt-4 text-center">
//                 <h3 className="font-semibold text-xl text-gray-800">
//                   Nike Air Max Pulse
//                 </h3>
//                 <p className="text-gray-500 text-sm">Men&apos;s Shoes</p>
//                 <p className="font-bold mt-3 text-xl text-gray-800">₹ 13,995</p>
//               </div>
//             </div>
//           </Link>

//           {/* Nike Shoes Image 3 */}
//           <Link href="/Allproducts">
//             <div className="border border-gray-200 rounded-xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 bg-white mx-auto mb-6 transform hover:bg-yellow-50">
//               <Image
//                 src="/image3.png"
//                 alt="Nike Air Max 97 SE"
//                 width={350}
//                 height={350}
//                 className="mx-auto h-auto w-full object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
//               />
//               <div className="mt-4 text-center">
//                 <h3 className="font-semibold text-xl text-gray-800">
//                   Nike Air Max 97 SE
//                 </h3>
//                 <p className="text-gray-500 text-sm">Men&apos;s Shoes</p>
//                 <p className="font-bold mt-3 text-xl text-gray-800">₹ 16,995</p>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>

//       {/* Best of Nike Shirts Section */}
//       <div className="bg-blue-100 px-6 py-8 relative rounded-lg shadow-lg mt-8">
//         <div className="flex justify-center items-center mb-6">
//           <div className="relative">
//             <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
//               <span>BEST OF NIKE SHIRTS</span>
//             </h2>
//             <div className="absolute bottom-0 left-0 right-0 h-1 mt-2 z-0"></div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
//           {/* Nike Shirts Image 1 */}
//           <Link href="/Categories">
//             <div className="border border-gray-200 rounded-xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 bg-white mx-auto mb-6 transform hover:bg-blue-50">
//               <Image
//                 src="/20.png"
//                 alt="Nike Air Max Pulse"
//                 width={350}
//                 height={350}
//                 className="mx-auto h-auto w-full object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
//               />
//               <div className="mt-4 text-center">
//                 <h3 className="font-semibold text-xl text-gray-800">
//                   Nike Training Shirt
//                 </h3>
//                 <p className="text-gray-500 text-sm">Women&apos;s Shirt</p>
//                 <p className="font-bold mt-3 text-xl text-gray-800">₹ 2,495</p>
//               </div>
//             </div>
//           </Link>

//           {/* Nike Shirts Image 2 */}
//           <Link href="/Categories">
//             <div className="border border-gray-200 rounded-xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 bg-white mx-auto mb-6 transform hover:bg-blue-50">
//               <Image
//                 src="/image5.png"
//                 alt="Nike Air Max Pulse"
//                 width={350}
//                 height={350}
//                 className="mx-auto h-auto w-full object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
//               />
//               <div className="mt-4 text-center">
//                 <h3 className="font-semibold text-xl text-gray-800">
//                   Nike Sports Shirt
//                 </h3>
//                 <p className="text-gray-500 text-sm">Men&apos;s Shirt</p>
//                 <p className="font-bold mt-3 text-xl text-gray-800">₹ 2,495</p>
//               </div>
//             </div>
//           </Link>

//           {/* Nike Shirts Image 3 */}
//           <Link href="/Categories">
//             <div className="border border-gray-200 rounded-xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 bg-white mx-auto mb-6 transform hover:bg-blue-50">
//               <Image
//                 src="/image7.png"
//                 alt="Nike Air Max 97 SE"
//                 width={350}
//                 height={350}
//                 className="mx-auto h-auto w-full object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
//               />
//               <div className="mt-4 text-center">
//                 <h3 className="font-semibold text-xl text-gray-800">
//                   Nike Graphic Shirt
//                 </h3>
//                 <p className="text-gray-500 text-sm">Men&apos;s Shirt</p>
//                 <p className="font-bold mt-3 text-xl text-gray-800">₹ 2,995</p>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// import Image from "next/image";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <div className="w-full bg-gray-100 font-sans">
//       <div className="bg-gradient-to-r from-gray-700 to-gray-900 py-12 text-center rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
//         <h2 className="text-4xl font-bold text-white tracking-wide drop-shadow-lg">
//           WELCOME TO THE APP
//         </h2>
//         <p className="text-lg mt-2 text-white opacity-90">
//           Discover top-tier products designed for you!
//         </p>
//       </div>

//       {/* Hero Image Section */}
//       <div className="relative w-full py-8 px-4 sm:px-12 flex justify-center">
//         <Image
//           src="/sneaker.png"
//           alt="Sneaker"
//           width={600}
//           height={300}
//           className="w-full max-w-4xl h-auto object-cover rounded-lg shadow-lg"
//         />
//       </div>

//       {/* Product Showcase */}
//       <div className="text-center bg-white py-12 px-4">
//         <p className="text-sm text-gray-500 uppercase tracking-wide">
//           First Look
//         </p>
//         <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
//           NIKE AIR MAX PULSE
//         </h1>
//         <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
//           Hyper durable. Max comfort. Introducing the Air Max Pulse, crafted to
//           push your limits.
//         </p>
//         <Link href="/Allproducts">
//           <button className="px-8 py-3 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-900 transition">
//             Shop Now
//           </button>
//         </Link>
//       </div>

//       {/* Product Grid */}
//       <div className="bg-gray-200 px-6 py-12 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
//           Best of Nike Shoes
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {["/30.png", "/image2.png", "/image3.png"].map((img, index) => (
//             <Link key={index} href="/Categories">
//               <div className="border border-gray-300 rounded-xl p-6 bg-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
//                 <Image
//                   src={img}
//                   alt="Nike Shoes"
//                   width={350}
//                   height={350}
//                   className="w-full h-auto object-cover rounded-lg"
//                 />
//                 <div className="mt-4 text-center">
//                   <h3 className="font-semibold text-xl text-gray-800">
//                     Nike Air Max
//                   </h3>
//                   <p className="text-gray-500 text-sm">Men's Shoes</p>
//                   <p className="font-bold mt-3 text-xl text-gray-800">
//                     ₹ 13,995
//                   </p>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full bg-gray-100 font-sans">
      <div className="bg-gradient-to-r from-gray-700 to-gray-900 py-12 text-center rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
        <h2 className="text-4xl font-bold text-white tracking-wide drop-shadow-lg">
          WELCOME TO THE APP
        </h2>
        <p className="text-lg mt-2 text-white opacity-90">
          Discover top-tier products designed for you!
        </p>
      </div>

      {/* Hero Image Section */}
      <div className="relative w-full py-8 px-4 sm:px-12 flex justify-center">
        <Image
          src="/sneaker.png"
          alt="Sneaker"
          width={600}
          height={300}
          className="w-full max-w-4xl h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Product Showcase */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8 gap-8">
        <Link href="/Shirts">
          <div className="border border-gray-300 rounded-xl p-6 bg-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
            <Image
              src="/image5.png"
              alt="Nike Air Max Pulse"
              width={350}
              height={350}
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="font-bold text-2xl text-gray-800">Nike Shirts</h3>
              {/* <p className="text-gray-500 text-sm">Nike Shirts</p> */}
              {/* <p className="font-bold mt-3 text-xl text-gray-800">₹ 13,995</p> */}
            </div>
          </div>
        </Link>

        <Link href="/Categories">
          <div className="border border-gray-300 rounded-xl p-6 bg-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
            <Image
              src="/image2.png"
              alt="Nike Air Force 1"
              width={350}
              height={350}
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="font-bold text-2xl text-gray-800">Nike Shoes</h3>
              {/* <p className="text-gray-500 text-sm">Men's Shoes</p>
              <p className="font-bold mt-3 text-xl text-gray-800">₹ 14,995</p> */}
            </div>
          </div>
        </Link>

        <Link href="/Allproducts">
          <div className="border border-gray-300 rounded-xl p-6 bg-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
            <Image
              src="/image3.png"
              alt="Nike Air Max 97"
              width={350}
              height={350}
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="font-bold text-2xl text-gray-800">
                Nike All Products
              </h3>
              {/* <p className="text-gray-500 text-sm">Men's Shoes</p>
              <p className="font-bold mt-3 text-xl text-gray-800">₹ 16,995</p> */}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
