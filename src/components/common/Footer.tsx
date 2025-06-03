import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-neutral-100 dark:bg-neutral-900 text-gray-600 dark:text-gray-400 py-8 mt-20">
            <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm">&copy; {new Date().getFullYear()} Hayoung Lee. All rights reserved.</p>

                <div className="flex gap-4">
                    <a
                        href="mailto:madebyhayoung@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Email"
                        className="hover:text-indigo-600 transition"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                    <a
                        href="https://github.com/hayoungbuilds"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="hover:text-indigo-600 transition"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ha0lee"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-indigo-600 transition"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
