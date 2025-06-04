import { GraduationCap, BookOpenText, Settings2, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';

const skills = [
    'TypeScript',
    'JavaScript',
    'React',
    'Next.js',
    'Electron',
    'C#',
    'WPF',
    'Tailwind CSS',
    'Styled-components',
    'Material-UI',
    'MobX',
    'XState',
    'GitHub',
    'Vercel',
];

const educations = [
    {
        title: '멋쟁이 사자처럼 React 교육 이수',
        date: '2022.09',
        desc: 'To Do List app / Netflix clone cording 후 데이터 핸들링 등',
    },
    {
        title: '윈도우 플랫폼 기반 IoT 시스템 개발자 교육 이수',
        date: '2020.02',
        desc: '사물인터넷 시스템 구축 언어 학습 및 오픈 하드웨어 플랫폼을 활용한 설계, 구현 (사용언어: C#)',
    },
    {
        title: '파워모듈 및 IoT를 위한 아두이노 활용 교육 이수',
        date: '2019.12',
        desc: '웹을 통한 아두이노 제어 기초 수업 (사용언어: C, HTML)',
    },
];

export default function ProfileSection() {
    return (
        <SectionWrapper id="profile" className="bg-white">
            <SectionTitle highlight="MY JOURNEY" title="SO FAR" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Career Card */}
                <div>
                    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 sm:p-6 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/logos/saige-logo.png"
                                    alt="Saige 로고"
                                    width={40}
                                    height={40}
                                    className="rounded-md"
                                />
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">SAIGE</h3>
                                    <p className="text-sm text-gray-500">Frontend Developer | 정규직</p>
                                </div>
                            </div>
                            <div className="text-sm text-gray-500 sm:text-right">
                                <p>2020.10 – 2024.07</p>
                                <p className="text-xs">(3년 10개월)</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-indigo-600" /> 주요 성과
                            </h4>
                            <ul className="list-disc list-outside pl-5 text-sm text-gray-700 space-y-1">
                                <li>Electron 기반 Vision 앱 UI 개발 및 상태 관리 로직 구현</li>
                                <li>박람회용 IEN DEMO 앱 프론트엔드 개발</li>
                                <li>VAD 검사 화면에서 영상 재생과 차트 컴포넌트 동기화 기능 개발</li>
                                <li>공통 컴포넌트 구조 설계 및 다국어 지원</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Education + Training + Skills */}
                <div>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <GraduationCap className="w-5 h-5 text-indigo-600" /> 학력
                            </h3>
                            <div className="flex items-start gap-4">
                                <Image
                                    src="/logos/dong-a-logo.png"
                                    alt="동아대학교 로고"
                                    width={36}
                                    height={36}
                                    className="rounded-md mt-1"
                                />
                                <div>
                                    <p className="text-sm text-gray-800 leading-snug">
                                        동아대학교 스포츠지도학과 <br />
                                        <span className="text-gray-500">2012.03 – 2016.02</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <BookOpenText className="w-5 h-5 text-indigo-600" /> 교육 이수
                            </h3>
                            <div className="space-y-4">
                                {educations.map((edu, index) => (
                                    <div key={index}>
                                        <p className="text-sm font-semibold text-gray-800">{edu.title}</p>
                                        <p className="text-xs text-gray-500 mb-1">{edu.date}</p>
                                        <p className="text-sm text-gray-700 leading-snug">{edu.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <Settings2 className="w-5 h-5 text-indigo-600" /> 기술 스택
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
