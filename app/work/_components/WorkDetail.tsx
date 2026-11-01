'use client'
import { useState } from 'react';
import { Sparkles, Github, ExternalLink, Layers, Code2 } from 'lucide-react';
import { Project } from '@/app/_utils/types';
import MarginWrapper from '@/app/_components/MarginWrapper';

const ProjectDetail = ({ project }: { project: Project }) => {
    const galleryImages = [
        project.image,
        `https://picsum.photos/seed/${project.title}-detail-1/800/600`,
        `https://picsum.photos/seed/${project.title}-detail-2/800/600`,
    ];

    const [activeImage, setActiveImage] = useState(0);

    return (
        <section className="min-h-screen bg-slate-50/60 text-slate-800 flex items-center justify-center font-sans overflow-hidden py-20">
            <MarginWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 items-start">

                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-2 flex flex-col gap-6 order-2 lg:order-1">

                        {/* Badge & Title */}
                        <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 bg-blue-100/70 border border-blue-200/80 px-4 py-2 rounded-full text-blue-700 text-sm font-bold tracking-wide">
                                <Sparkles className="w-4 h-4 text-blue-500" />
                                <span>Interactive Case Study</span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                                Evaluating <br className="hidden lg:block" />
                                <span className="text-blue-600">{project.title}</span>.
                            </h1>
                        </div>

                        {/* Architecture */}
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-2 text-blue-600">
                                <Layers className="w-5 h-5 animate-pulse" />
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Architecture Class</span>
                            </div>
                            <span className="text-xl font-extrabold text-slate-900 block">
                                {project.category}
                            </span>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1.5 bg-white border border-blue-100 rounded-md text-sm font-bold text-slate-700 shadow-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pr-24 border-t border-slate-200/80">
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 text-nowrap flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-3 rounded-2xl font-bold text-xs tracking-wider uppercase transition-colors shadow-md shadow-blue-500/10"
                            >
                                <span>Launch App</span>
                                <ExternalLink className="w-4 h-4" />
                            </a>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 text-nowrap flex items-center justify-center gap-1 bg-white hover:bg-blue-50 text-slate-700 border border-slate-200 px-3 py-3 rounded-2xl font-bold text-xs tracking-wider uppercase transition-colors"
                            >
                                <Github className="w-4 h-4" />
                                <span>Source Code</span>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-2 flex flex-col gap-8 order-1 lg:order-2">

                        {/* Gallery */}
                        <div className="flex flex-col gap-4">
                            <div className="relative aspect-[16/10] rounded-md overflow-hidden bg-sky-50 shadow-md">
                                <img
                                    key={activeImage}
                                    src={galleryImages[activeImage]}
                                    alt={`${project.title} Preview - Image ${activeImage + 1}`}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                {galleryImages.map((imgSrc, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImage(index)}
                                        className={`relative aspect-[4/3] rounded-md overflow-hidden bg-sky-50 transition-all duration-300 border-2 ${activeImage === index ? 'border-blue-600 scale-[0.98]' : 'border-transparent opacity-60 hover:opacity-100'
                                            }`}
                                    >
                                        <img
                                            src={imgSrc}
                                            alt="Gallery thumbnail"
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Technical Summary */}
                        {/* <div className="flex flex-col gap-4 py-4">
                            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Technical Summary</h3>
                            {project.description.map((text, i) => (
                                <p key={i} className="text-slate-600 text-lg leading-relaxed">
                                    {text}
                                </p>
                            ))}
                        </div> */}
                    </div>

                </div>
                {/* Technical Summary */}
                <div className="flex flex-col gap-4 pt-8 border-t border-slate-200/80">
                    <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Technical Summary</h3>
                    {project.description.map((text, i) => (
                        <p key={i} className="text-slate-600 text-lg leading-relaxed">
                            {text}
                        </p>
                    ))}
                </div>

            </MarginWrapper>
        </section>
    );
};

export default ProjectDetail;