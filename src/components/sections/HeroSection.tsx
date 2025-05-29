'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

export default function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen flex items-center bg-neutral-50">
            <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 py-16">
                {/* LEFT */}
                <motion.div
                    className="md:w-1/2 text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">
                        Hi there{' '}
                        <span role="img" aria-label="wave">
                            👋🏻
                        </span>
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
                        I'M <span className="text-indigo-600">HAYOUNG</span>
                    </h2>

                    <div className="text-lg text-gray-700">
                        <Typewriter
                            options={{
                                strings: [
                                    'Frontend Developer',
                                    'Clean & Maintainable Code Lover',
                                    'Rebuilding with Purpose 💫',
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </motion.div>

                {/* RIGHT */}
                <motion.div
                    className="md:w-1/2 flex justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <Image
                        src="/profile-hero.svg"
                        alt="Hero Illustration"
                        width={400}
                        height={400}
                        className="max-h-[450px]"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}
