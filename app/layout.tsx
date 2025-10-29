import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';
import type { ReactNode } from 'react';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Technotronix',
  description: 'Leading cybersecurity solutions for modern businesses',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-gray-900`} suppressHydrationWarning>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
