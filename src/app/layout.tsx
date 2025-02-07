// import type { Metadata } from "next";
// import "./globals.css";
// import Header from "@/components/Header";
// import UtilityBar from "@/components/Utilitynavbar"; // Ensure correct path
// import Footer from "@/components/Footer";
// import {
//   ClerkProvider,
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from "@clerk/nextjs";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body>
//           <SignedOut>
//             <SignInButton />
//           </SignedOut>
//           <SignedIn>
//             <UserButton />
//           </SignedIn>
//           <UtilityBar />
//           <Header />
//           {children}
//           <Footer />
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }

// // <ClerkProvider>
// //   {/* Now ClerkProvider is wrapping everything, including UtilityBar */}
// //   <html lang="en">
// //     <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
// //       <UtilityBar /> {/* ✅ Now inside ClerkProvider */}
// //       <Header />
// //       {children}
// //       <Footer />
// //     </body>
// //   </html>
// // </ClerkProvider>

// // const geistSans = localFont({
// //   src: "./fonts/GeistVF.woff",
// //   variable: "--font-geist-sans",
// //   weight: "100 900",
// // });
// // const geistMono = localFont({
// //   src: "./fonts/GeistMonoVF.woff",
// //   variable: "--font-geist-mono",
// //   weight: "100 900",
// // });

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import UtilityBar from "@/components/Utilitynavbar"; // Ensure correct path
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      {/* Now ClerkProvider is wrapping everything, including UtilityBar */}
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <UtilityBar /> {/* ✅ Now inside ClerkProvider */}
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
