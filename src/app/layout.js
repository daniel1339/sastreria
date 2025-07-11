import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import { generateMetadata } from './constants/metadata.js';
import { generateStructuredData } from './utils/seo.js';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = generateMetadata('home');

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={generateStructuredData()}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
