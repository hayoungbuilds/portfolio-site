import { Mail, Download, Github, Linkedin } from 'lucide-react';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';

export default function ContactSection() {
    const contacts = [
        {
            label: 'Mail',
            href: 'mailto:madebyhayoung@gmail.com',
            icon: Mail,
        },
        {
            label: 'GitHub',
            href: 'https://github.com/hayoungbuilds',
            icon: Github,
        },
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/ha0lee',
            icon: Linkedin,
        },
        {
            label: 'Resume',
            href: '/files/resume.pdf',
            icon: Download,
            download: 'hayoung_resume.pdf',
        },
    ];

    return (
        <SectionWrapper id="contact" className="bg-white">
            <SectionTitle highlight="CONTACT" title="ME" />
            <p className="text-xl sm:text-2xl font-semibold text-gray-800 mb-12 leading-relaxed break-words">
                포트폴리오를 봐주셔서 감사합니다. <br className="block sm:hidden" />
                협업이나 제안이 있으시다면 언제든지 편하게 연락주세요!
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {contacts.map((item, idx) => (
                    <a
                        key={idx}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={item.label}
                        {...(item.download ? { download: item.download } : {})}
                        className="flex items-center gap-3 p-4 border rounded-xl transition hover:shadow-lg hover:bg-indigo-50 group"
                    >
                        <item.icon className="w-6 h-6 text-indigo-600 group-hover:scale-110 transition-transform" />
                        <span className="text-sm sm:text-base text-gray-800 font-medium group-hover:underline">
                            {item.label}
                        </span>
                    </a>
                ))}
            </div>
        </SectionWrapper>
    );
}
