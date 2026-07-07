import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = { title: "Riley's A/C and Heat", description: 'hvac • manhattan • 4.9 rating • 42 Google reviews • 817 Broadway, New York, NY 10003, USA' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
