import { Download } from 'lucide-react';
import Link from 'next/link';

export default function ResumeButton() {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Link
                href="/files/resume.pdf"
                download="hayoung_resume.pdf"
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full bg-white text-gray-800 text-sm font-medium hover:shadow-md transition-all"
            >
                <Download className="w-4 h-4" />
                Resume
            </Link>
        </div>
    );
}
