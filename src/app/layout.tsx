import type { Metadata, Viewport } from 'next';
import { Comfortaa } from 'next/font/google';
import '@/styles/globals.css';

const comfortaa = Comfortaa({ subsets: ['latin'] });

const metaDesc: string = "Selamat datang dalam petualangan kreatif undangan kami, di mana kesempurnaan dan keunikan menyatu! Temukan tema undangan yang mencerminkan kepribadian dan impian Anda di menu utama kami. Dengan pilihan tema eksklusif, tim desainer berpengalaman kami siap mewujudkan ide Anda menjadi undangan yang elegan. Jelajahi koleksi tema unik kami yang dapat disesuaikan sepenuhnya sesuai keinginan Anda. Mulailah perjalanan Anda dengan pilihan tema yang sesuai dengan persona Anda. Dengan ketelitian dan dedikasi, tim kami akan mengolah tema impian Anda menjadi undangan yang memikat hati. Bagikan kebahagiaan Anda dengan mudah, undangan dapat segera dibagikan di berbagai media sosial. Setiap sentuhan elegan dan desain personal akan membuat momen istimewa Anda lebih berkesan. Jangan lewatkan kesempatan untuk menciptakan undangan yang mencerminkan identitas Anda, mudah ditemukan di mesin pencarian. Temukan tema undangan eksklusif Anda dan buat kenangan tak terlupakan dengan sentuhan kreatif dari tim ahli kami";

const metaTitle: string = 'Dinanti | Digital Invitation: Temukan Tema Undangan Eksklusif untuk Momen Istimewa Anda!';

export const metadata: Metadata = {
  metadataBase: new URL('https://dinanti.id'),
  title: metaTitle,
  description: metaDesc,

  generator: 'dinanti generator',
  applicationName: 'Dinanti',
  referrer: 'origin-when-cross-origin',
  keywords: ['dinanti', 'Dinanti', 'Digital Invitation', 'invitation', 'dinanti.id', 'undangan digital', 'pernikahan', 'undangan pernikahan', 'khitan', 'undangan khitanan'],
  authors: [{ name: 'dinanti author' }, { name: 'Saepudin'}, { name: 'Arnoud' }],
  creator: 'Dinanti Creator',
  publisher: 'Dinanti Publisher',
  category: 'digital invitation',

  appleWebApp: {
    title: metaTitle,
    capable: true,
    statusBarStyle: 'default'
  },

  alternates: {
    canonical: '/',
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'standard',
      'max-snippet': -1,
    },
  },

  // Opengraph
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: '/',
    siteName: 'Dinanti',
    type: "website"
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: metaTitle,
    description: metaDesc,
    creator: 'Dinanti Creator',
    // images: ['https://nextjs.org/og.png'],
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
    <html lang="en">
      <body className={comfortaa.className}>{children}</body>
    </html>
  )
}
