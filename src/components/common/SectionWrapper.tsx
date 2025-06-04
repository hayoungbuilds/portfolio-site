import { ReactNode } from 'react';

type SectionWrapperProps = {
    id?: string;
    className?: string;
    children: ReactNode;
};

export default function SectionWrapper({ id, className = '', children }: SectionWrapperProps) {
    return (
        <section id={id} className={`py-24 ${className}`}>
            <div className="container mx-auto max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12">{children}</div>
        </section>
    );
}
