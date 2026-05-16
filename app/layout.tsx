import type { Metadata } from "next";
import { AppNav } from "@/components/app-nav";
import { StatusBar } from "@/components/status-bar";
import { CosmicEventBanner } from "@/components/cosmic-event-banner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Worlds — Operating System for Sovereign Digital Worlds",
  description:
    "An infrastructure for sovereign digital worlds. Each world is fully isolated with its own physics, economy, and lifecycle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white antialiased">
        <AppNav />
        <StatusBar />
        <CosmicEventBanner />
        <main className="ml-64 mt-14 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
