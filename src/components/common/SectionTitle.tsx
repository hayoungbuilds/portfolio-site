type SectionTitleProps = {
    title: string;
    highlight?: string;
    className?: string;
};

export default function SectionTitle({ title, highlight, className = '' }: SectionTitleProps) {
    return (
        <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-10 ${className}`}>
            {highlight && <span className="text-indigo-600">{highlight}</span>} {title}
        </h2>
    );
}
