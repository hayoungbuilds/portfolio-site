import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '../lib/utils';
import ResumeButton from '@/components/common/ResumeButton';
import Footer from '@/components/common/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: "hayoung's Portfolio",
    description: 'Frontend Developer Portfolio',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn('min-h-screen bg-white text-gray-900', inter.className)}>
                {children}
                <Footer />
                <ResumeButton />
            </body>
        </html>
    );
}
