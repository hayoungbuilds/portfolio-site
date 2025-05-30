'use client';

import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/types/project';

const projects: Project[] = [
    {
        title: '디즈니 자막 확장 프로그램',
        period: '2025.05 ~ 진행중',
        description:
            '디즈니플러스에서 자막 동기화, 다국어 자막 등 사용자 친화적인 기능을 제공하는 크롬 확장 프로그램을 개발 중입니다. 넷플릭스/유튜브에 비해 부족한 기능을 직접 개선하고자 시작한 프로젝트입니다.',
        stack: ['TypeScript', 'React', 'Manifest V3'],
        image: '/projects/disney-lingo.png',
        link: 'https://github.com/hayoungbuilds/disney-lingo',
    },
    {
        title: '노무법인 유영 홈페이지 제작',
        period: '2025.04',
        description:
            '노무법인 유영의 공식 웹사이트를 단독으로 기획, 디자인, 개발했습니다. 반응형 디자인을 적용해 모바일/PC 환경 모두에 최적화되었으며, 정적인 콘텐츠 위주로 구성된 사이트를 Next.js와 Vercel을 활용해 빠르게 배포했습니다.',
        stack: ['Next.js', 'TypeScript', 'Next-ui', 'Tailwind CSS', 'Vercel'],
        image: '/projects/yuyoung.png',
        link: 'https://www.yuyounglabor.com/',
    },
    {
        title: 'Vision Developer',
        period: '2023.03 ~ 2024.07',
        description:
            '7개 이상의 프로젝트(IAD, SEG, CLS, OCR 등)에서 화면 UI 및 기능 개발을 담당했습니다. 공통 컴포넌트 구조를 설계하고 API 연동 및 상태 관리 로직을 구축했습니다.',
        stack: ['React', 'TypeScript', 'Material-UI', 'XState'],
        image: '/projects/vision.png',
        private: true,
    },
    {
        title: 'Defect Generator/Image Enhancer 박람회 웹앱',
        period: '2024.02',
        description:
            '박람회에서 사용된 웹앱 중 Image Enhancer 프로젝트를 담당했습니다. 화질 개선 전후 이미지를 비교할 수 있는 슬라이더 컴포넌트를 구현하여, 개선 효과를 직관적으로 확인할 수 있도록 개발했습니다.',
        stack: ['React', 'TypeScript', 'Material-UI', 'XState'],
        private: true,
    },
    {
        title: 'VAD (Video Anomaly Detection) Developer',
        period: '2022.11 ~ 2023.02',
        description:
            '이상 탐지 검사 시스템의 화면 및 기능을 구현했습니다. 검사 화면 구성, API 연동, 공통 UI 컴포넌트를 개발하며 사용자 중심의 인터페이스를 구축했습니다.',
        stack: ['React', 'TypeScript', 'Styled-components', 'MobX'],
        image: '/projects/vad-developer.png',
        private: true,
    },
    {
        title: 'VAD MLOps 시스템',
        period: '2022.05 ~ 2023.02',
        description:
            'MLOps 운영 시스템의 프론트엔드 전반을 개발했습니다. Recharts를 활용해 학습 데이터를 시각화하고, 영상 컨트롤러와 차트를 연동하여 사용자 분석 편의성을 높였습니다. 그 외에도 다국어 처리, 사용자 매뉴얼 작성, API 연동 등을 통해 운영 환경에 최적화된 화면을 구축했습니다.',
        stack: ['React', 'TypeScript', 'Styled-components', 'MobX'],
        private: true,
    },
    {
        title: 'VAD 검사/학습 윈도우 앱',
        period: '2021.03 ~ 2022.08',
        description:
            'C++ DLL을 C#에서 사용할 수 있도록 마샬링을 적용하고, MSI 인스톨러를 구성했습니다. 학습 화면을 개발하면서 LiveCharts를 이용한 실시간 차트 시각화를 구현했고, 다국어 지원 및 사용자 중심의 클라이언트 로직 전반을 담당했습니다.',
        stack: ['WPF', 'C#', 'MSI Installer'],
        image: '/projects/vad-window.png',
        private: true,
    },
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="bg-neutral-50 py-20">
            <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 max-w-7xl">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
                    <span className="text-indigo-600">Project</span> Work
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
