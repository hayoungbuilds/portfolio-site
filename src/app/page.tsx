import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from '@/components/sections/HeroSection';
import ProfileSection from '@/components/sections/ProfileSection';
import ProjectsSection from '@/components/sections/ProjectsSection';

export default function Home() {
    return (
        <main>
            <HeroSection />
            <AboutSection />
            <ProfileSection />
            <ProjectsSection />
            <ContactSection />
        </main>
    );
}
