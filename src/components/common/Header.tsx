'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#profile' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md border-b border-gray-200 z-50">
            <div className="container mx-auto max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 h-16 flex justify-between items-center">
                {/* 로고 */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logos/hayoung-logo.png"
                        alt="Hayoung 로고"
                        width={36}
                        height={36}
                        className="object-contain"
                    />
                </Link>

                {/* 데스크탑 네비게이션 */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* 모바일 메뉴 버튼 */}
                <button
                    className="md:hidden text-gray-700 hover:text-indigo-600"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* 모바일 드롭다운 메뉴 */}
            {open && (
                <div className="md:hidden bg-white border-t border-gray-200 px-6 pb-4 shadow-sm">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="block py-3 text-sm font-medium text-gray-700 hover:text-indigo-600 transition"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
