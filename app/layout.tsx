import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-sans',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'Dapper | Sustainable Thrift Fashion',
  description: 'Find unique, sustainable fashion pieces at Dapper - your premier thrift fashion destination.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}