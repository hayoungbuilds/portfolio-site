'use client';

import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';

export default function AboutSection() {
    const HIGHLIGHT = 'font-semibold text-indigo-600';

    return (
        <SectionWrapper id={'about'} className="bg-white">
            <SectionTitle highlight="INTRODUCE" title="MYSELF" />

            <div className="flex flex-col md:flex-row items-center gap-12">
                {/* LEFT: Introduction */}
                <div className="md:w-2/3 space-y-6">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        안녕하세요 프론트엔드 개발자 <strong>이하영</strong>입니다.
                        <br />
                        <br />
                        React/TypeScript 기반으로 제품을 개발·운영해왔고, SAIGE에서 <strong>총 5개 프로젝트</strong>의
                        프론트엔드 개발을 담당했습니다.
                        <br />
                        <br />
                        담당 범위는 화면 UI 구현에 그치지 않고 <span className={HIGHLIGHT}>
                            상태 관리 로직 설계
                        </span>, <span className={HIGHLIGHT}>API 연동 및 예외 케이스 처리</span>,{' '}
                        <span className={HIGHLIGHT}>공통 컴포넌트 개발·개선</span>까지 포함해 기능을 구현하고
                        유지보수·이슈 대응을 수행했습니다.
                        <br />
                        <br />
                        또한 제품의 <span className={HIGHLIGHT}>사용자 매뉴얼을 작성·정리</span>해 사용자가 기능을
                        이해하고 사용할 수 있도록 가이드를 제공했습니다.
                        <br />
                        <br />
                        기능 구현 경험 중에서는 <span className={HIGHLIGHT}>영상 재생–차트 컴포넌트 동기화</span>,{' '}
                        <span className={HIGHLIGHT}>Recharts 기반 데이터 시각화와 영상 컨트롤 연동</span>
                        처럼 상태 변화와 이벤트 처리가 많은 분석 화면을 개발했습니다.
                        <br />
                        <br />
                        다국어(i18n)는 <strong>영어·중국어</strong>를 지원하도록 적용했으며, <br /> 주요 기술은{' '}
                        <strong>Next.js</strong>, <strong>React</strong>, <strong>TypeScript</strong>,{' '}
                        <strong>Tailwind CSS</strong>입니다.
                    </p>
                </div>
                {/* RIGHT: Profile Image */}
                <div className="md:w-1/3 flex justify-center">
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={400}>
                        <Image
                            src="/hayoung.jpeg"
                            alt="Hayoung's profile picture"
                            width={300}
                            height={100}
                            className="rounded-full"
                            priority
                        />
                    </Tilt>
                </div>
            </div>
        </SectionWrapper>
    );
}
