import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/types/project';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';

const projects: Project[] = [
    {
        title: '디즈니 자막 확장 프로그램',
        period: '2025.05 ~ 프로토타입',
        description:
            '디즈니플러스 자막 UX를 개선하기 위한 크롬 확장 프로그램 프로토타입을 구현했습니다. 자막 동기화 흐름을 구성하고, 다국어 자막 표시를 위한 UI/로직을 실험하며 기능 동작 기반을 만들었습니다.',
        stack: ['TypeScript', 'React', 'Manifest V3'],
        image: '/projects/disney-lingo.png',
        link: 'https://github.com/hayoungbuilds/disney-lingo',
        role: 'Frontend (확장 프로그램 UI/로직 · 자막 표시 흐름 구성)',
        outputs: ['자막 동기화 흐름 프로토타입', '다국어 자막 표시 UI/로직'],
    },
    {
        title: '노무법인 유영 홈페이지 제작',
        period: '2025.04',
        description:
            '노무법인 유영 공식 웹사이트를 단독으로 기획·디자인·개발했습니다. 반응형 레이아웃을 적용하고, Next.js로 구현한 정적 페이지를 Vercel로 배포했습니다.',
        stack: ['Next.js', 'TypeScript', 'NextUI', 'Tailwind CSS', 'Vercel'],
        image: '/projects/yuyoung.png',
        link: 'https://yuyounglabor-basic.vercel.app/',
        role: 'Frontend (기획 · 디자인 · 개발 · 배포)',
        outputs: ['반응형 페이지 구성', '정적 페이지 구현 및 Vercel 배포'],
    },
    {
        title: 'Vision Developer',
        period: '2023.03 ~ 2024.07',
        description:
            'Vision 관련 프로젝트(IAD, SEG, CLS, OCR 등)에서 화면 기능을 구현·운영했습니다. 상태 관리 로직과 API 연동을 포함해 로딩/에러/빈 상태를 정의해 적용했고, 공통 UI 컴포넌트를 개발·개선했습니다. i18n(영어/중국어)을 적용했으며, 데이터 시각화 화면은 ECharts로 구현했습니다.',
        stack: ['React', 'TypeScript', 'Electron', 'Material-UI', 'XState', 'ECharts'],
        image: '/projects/vision.png',
        private: true,
        role: 'Frontend (화면 구현 · 상태관리 · API 연동 · 예외처리 · 유지보수/이슈 대응)',
        outputs: [
            '공통 UI 컴포넌트 개발·개선',
            'i18n(영어·중국어)',
            '에러코드/예외 처리 기준 적용',
            'ECharts 시각화 화면',
        ],
    },
    {
        title: 'Defect Generator / Image Enhancer 박람회 웹앱',
        period: '2024.02',
        description:
            '박람회용 웹앱에서 Image Enhancer 프로젝트를 담당했습니다. 개선 전·후 이미지를 한 화면에서 비교할 수 있도록 이미지 비교 슬라이더 UI를 구현하고 데모 플로우에 맞춰 화면을 구성했습니다.',
        stack: ['React', 'TypeScript', 'Material-UI', 'XState'],
        private: true,
        role: 'Frontend (데모 화면 구현 · 인터랙션 컴포넌트 개발)',
        outputs: ['이미지 비교 슬라이더 UI', '데모 플로우 기반 화면 구성'],
    },
    {
        title: 'VAD (Video Anomaly Detection) Developer',
        period: '2022.11 ~ 2023.02',
        description:
            '이상 탐지 검사/학습 시스템에서 사용자 플로우에 필요한 화면을 구현했습니다. 상태 관리와 API 연동, 로딩/에러/빈 상태 처리 및 예외 케이스 처리를 포함해 검사 화면과 흐름을 구성했고, 공통 UI 컴포넌트 개선에 기여했습니다.',
        stack: ['React', 'TypeScript', 'Styled-components', 'MobX'],
        image: '/projects/vad-developer.png',
        private: true,
        role: 'Frontend (검사 화면 구현 · 상태관리 · API 연동 · 예외처리)',
        outputs: ['검사 화면/플로우 구현', 'API 연동/예외 처리', '공통 UI 컴포넌트 기여'],
    },
    {
        title: 'VAD MLOps 시스템',
        period: '2022.05 ~ 2023.02',
        description:
            'MLOps 운영 시스템의 프론트엔드를 개발했습니다. Recharts로 학습 데이터를 시각화하고, 영상 컨트롤러와 차트/지표를 연동해 재생/탐색 흐름에서 분석이 끊기지 않도록 구성했습니다. i18n(영어/중국어) 적용과 사용자 매뉴얼 작성·정리, API 연동 화면 개발을 수행했습니다.',
        stack: ['React', 'TypeScript', 'Styled-components', 'MobX', 'Recharts'],
        private: true,
        role: 'Frontend (운영 화면 개발 · 시각화 · 영상/차트 연동 · API 연동 · 유지보수/이슈 대응)',
        outputs: ['Recharts 시각화', '영상 컨트롤 연동/동기화', 'i18n(영어·중국어)', '사용자 매뉴얼 작성·정리'],
    },
    {
        title: 'VAD 검사/학습 윈도우 앱',
        period: '2021.03 ~ 2022.08',
        description:
            'Windows(WPF) 클라이언트에서 학습/검사 기능을 구현했습니다. C++ DLL을 C#에서 사용할 수 있도록 마샬링을 적용하고 MSI 인스톨러를 구성했으며, 학습 화면에 LiveCharts 기반 실시간 차트 시각화를 구현했습니다. i18n(영어/중국어) 적용을 포함해 클라이언트 로직을 담당했습니다.',
        stack: ['WPF', 'C#', 'LiveCharts', 'MSI Installer'],
        image: '/projects/vad-window.png',
        private: true,
        role: 'Client (WPF) (화면 개발 · DLL 연동 · 인스톨러 구성)',
        outputs: ['C++ DLL 마샬링(C#)', 'MSI 인스톨러 구성', 'LiveCharts 실시간 시각화', 'Localization(영어·중국어)'],
    },
];

export default function ProjectsSection() {
    return (
        <SectionWrapper id={'projects'} className="bg-neutral-50">
            <SectionTitle highlight="PROJECT" title="WORK" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} project={project} />
                ))}
            </div>
        </SectionWrapper>
    );
}
