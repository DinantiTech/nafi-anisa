import type { Metadata, Viewport } from 'next';
import { Comfortaa } from 'next/font/google';
import '@/styles/globals.css';

const comfortaa = Comfortaa({ subsets: ['latin'] });

const metaDesc: string = "Menjadi sebuah kebahagiaan bagi kami untuk mengumumkan awal dari babak baru kehidupan kami bersama. Silakan klik tautan situs Undangan Website di bawah untuk informasi lebih lanjut";

const metaTitle: string = 'Amelia & Hanif - The Wedding Of Invitation';
// const metaImage: string = "https://res.cloudinary.com/storyline-beta/image/upload/v1717233748/themes/ASA_270624/meta-image.png"; // HQ

const metaImage: string = "https://res.cloudinary.com/storyline-beta/image/upload/c_thumb,w_200,g_face/v1730473096/themes/ASA_291024/xdd82ebke2ddankvgxu8.jpg";
const siteUrl = 'https://dinanti.id';

export const metadata: Metadata = {
  metadataBase: new URL('https://dinanti.id'),
  title: metaTitle,
  description: metaDesc,

  generator: 'dinanti generator',
  applicationName: 'Amelia & Hanif',
  referrer: 'origin-when-cross-origin',
  keywords: ['dinanti', 'Dinanti', 'Digital Invitation', 'invitation', 'dinanti.id', 'undangan digital', 'pernikahan', 'undangan pernikahan', 'khitan', 'undangan khitanan'],
  authors: [{ name: 'dinanti author' }, { name: 'Saepudin'}, { name: 'Arnoud' }, { name: 'Danes' }, { name: 'Asa' }],
  creator: 'Dinanti Creator',
  publisher: 'Dinanti Publisher',
  category: 'digital invitation',

  appleWebApp: {
    title: metaTitle,
    capable: true,
    statusBarStyle: 'default',
    startupImage: metaImage
  },

  alternates: {
    canonical: '/',
  },

  // Opengraph
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: '/',
    siteName: siteUrl,
    type: "website",
    images: metaImage
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: metaTitle,
    description: metaDesc,
    creator: 'Dinanti Creator',
    images: metaImage,
    site: siteUrl
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme: 'light dark',
  viewportFit: 'auto',
  // Also supported by less commonly used
  interactiveWidget: 'resizes-visual',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={comfortaa.className}>{children}</body>
    </html>
  )
}
