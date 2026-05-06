import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nandita | Premium UI/UX & Product Designer",
  description: "Neo-Brutalist portfolio of Nandita, a Product Designer specialized in creating high-end futuristic user experiences and interactive interfaces.",
  keywords: ["UI/UX Designer", "Product Designer", "Visual Design", "Neo-Brutalism", "User Research", "Figma"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700&f[]=satoshi@500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-brand-yellow selection:text-black">
        {children}
      </body>
    </html>
  );
}
