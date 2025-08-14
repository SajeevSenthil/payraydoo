'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export function ConditionalFooter() {
  const pathname = usePathname();
  
  // Don't show footer on AP Invoice Processing page
  if (pathname === '/ap-invoice-processing') {
    return null;
  }
  
  return <Footer />;
}
