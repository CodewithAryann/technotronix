import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CyberEz - Empowering You in the Digital Age',
  description: 'Leading cybersecurity solutions for modern businesses',
};

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}