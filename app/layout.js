import './globals.css';
import ClientLayout from './ClientLayout';
import { LanguageProvider } from './context/LanguageContext';

export const metadata = {
  title: 'مؤسسة الأحمدي | Alahmadi co',
  description: 'Experience the future with Alahmadi Co',
  keywords: 'Alahmadi, الأحمدي, مؤسسة الأحمدي',
  authors: [{ name: 'Alahmadi Co' }],
  robots: 'index, follow',
  openGraph: {
    title: 'مؤسسة الأحمدي | Alahmadi co',
    description: 'Official website of Alahmadi Co',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>
          <ClientLayout>{children}</ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}