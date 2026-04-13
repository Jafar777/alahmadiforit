import './globals.css';
import ClientLayout from './ClientLayout';

export const metadata = {
  title: 'مؤسسة الأحمدي | Alahmadi co',
  description: 'Experience the future with Alahmadi Co',
  keywords: 'Alahmadi, الأحمدي, مؤسسة الأحمدي',
  authors: [{ name: 'Alahmadi Co' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'مؤسسة الأحمدي | Alahmadi co',
    description: 'Official website of Alahmadi Co',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}