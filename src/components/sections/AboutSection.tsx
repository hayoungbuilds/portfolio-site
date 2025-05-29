'use client';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

export default function AboutSection() {
    return (
        <section id="about" className="bg-white py-24 sm:py-28">
            <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 max-w-7xl">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
                    LET ME <span className="text-indigo-600">INTRODUCE</span> MYSELF
                </h1>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* LEFT: Introduction */}
                    <div className="md:w-2/3 space-y-6">
                        <p className="text-gray-700 text-lg leading-relaxed">
                            안녕하세요 프론트엔드 개발자 <strong>이하영</strong>입니다.
                            <br />
                            <br />
                            단순하고 깔끔한 구조, 그리고 유지보수가 쉬운 웹 애플리케이션을 만드는 걸 좋아해요. 그런
                            코드는 개발자에게만 좋은 게 아니라,{' '}
                            <span className="font-semibold text-indigo-600">
                                사용자에게도 더 편리하고 안정적인 경험
                            </span>
                            을 줄 수 있다고 생각해요.
                            <br />
                            <br />
                            4년 동안 프론트엔드 개발을 해왔고, 최근 1년은 잠시 일을 쉬면서 삶의 방향과 일하는 방식을
                            다시 돌아보는 시간을 가졌어요. 번아웃을 겪고 나서 앞으로는 더 건강한 리듬으로 개발을
                            계속하고 싶다는 생각이 들었고, 지금은 그 고민을 바탕으로 다시 재미있게 개발에 몰입하고
                            있어요.
                            <br />
                            <br />
                            요즘은 사이드 프로젝트로 <strong>디즈니플러스에서 작동하는 자막 확장 프로그램</strong>을
                            만들고 있어요. 넷플릭스나 유튜브엔 이미 잘 만들어진 도구가 있지만, 디즈니플러스 확장
                            프로그램은 사용하기 불편한 부분이 많더라고요. 그래서 내가 직접 써보고 불편했던 점들을
                            개선해서 만들고 있어요.
                            <br />
                            <br />
                            주로 사용하는 기술은 <strong>Next.js</strong>, <strong>React</strong>,{' '}
                            <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>예요.
                        </p>
                    </div>
                    {/* RIGHT: Profile Image */}
                    <div className="md:w-1/3 flex justify-center">
                        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={400}>
                            <Image
                                src="/hayoung.jpeg"
                                alt="Hayoung's profile picture"
                                width={300}
                                height={300}
                                className="rounded-full"
                                priority
                            />
                        </Tilt>
                    </div>
                </div>
            </div>
        </section>
    );
}
