import type { Metadata, Viewport } from 'next';

import '@/styles/reset.css';
import '@/styles/fonts.css';
import '@/styles/global.css';

import ReactQueryProvider from '@/components/ReactQueryProvider';

// TODO WORK
export const metadata: Metadata = {
  title: "엘든위키",
  description: "",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
