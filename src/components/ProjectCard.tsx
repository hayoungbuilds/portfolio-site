'use client';

import { Project } from '@/types/project';
import Image from 'next/image';

export default function ProjectCard({ project }: { project: Project }) {
    const placeholderImage = '/projects/placeholder.png';

    return (
        <div className="bg-white rounded-xl shadow p-5 sm:p-6 hover:shadow-lg transition">
            <div className="mb-4 aspect-[16/9] w-full overflow-hidden rounded-lg bg-white">
                <Image
                    src={project.image ?? placeholderImage}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{project.title}</h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-1">{project.period}</p>
            <p className="text-sm sm:text-base text-gray-700 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm mb-4">
                {project.stack.map((tech, i) => (
                    <span key={i} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                        {tech}
                    </span>
                ))}
            </div>
            {project.private ? (
                <span className="text-gray-500 text-sm">🔒 비공개 프로젝트</span>
            ) : (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600 font-medium text-sm hover:underline"
                >
                    프로젝트 바로가기 →
                </a>
            )}
        </div>
    );
}
