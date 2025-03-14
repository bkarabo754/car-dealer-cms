import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Mulish, Roboto } from 'next/font/google';
import { cn } from '../lib/utils';
// import { Toaster } from '../components/ui/sonner';
import NextTopLoader from 'nextjs-toploader';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Toaster } from '../components/ui/sonner';

export const metadata: Metadata = {
  title: 'Car Dealer Website',
  description: 'A sick dealer website with AI.',
};

const mulish = Mulish({
  weight: 'variable',
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <NextTopLoader showSpinner={false} />
      <body
        className={cn(
          'antialiased overscroll-none bg-background',
          roboto.variable,
          mulish.variable
        )}
      >
        <NuqsAdapter>{children}</NuqsAdapter>
        <Toaster />
      </body>
    </html>
  );
}
