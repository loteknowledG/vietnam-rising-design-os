import { useEffect, useRef, useState } from 'react'
import type { Job } from '@/../product/sections/danang-hub/types'
import { ExternalLink, MapPin, DollarSign, Calendar } from 'lucide-react'

interface JobFloorDaNangProps {
    job: Job
    onViewSource: (url: string) => void
}

export function JobFloorDaNang({ job, onViewSource }: JobFloorDaNangProps) {
    const floorRef = useRef<HTMLDivElement>(null)
    const [isFlipped, setIsFlipped] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-slide-in-left')
                    }
                })
            },
            { threshold: 0.2 }
        )

        if (floorRef.current) {
            observer.observe(floorRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={floorRef}
            className="relative opacity-0 mb-0 group"
            style={{ minHeight: '180px' }}
        >
            {/* Floor Number Badge */}
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 bg-cyan-400 text-stone-900 border-2 border-stone-900 px-3 py-1 font-mono font-black text-xs uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] z-10">
                F{job.floorNumber}
            </div>

            {/* Job Card */}
            <div className="relative max-w-md w-full mx-auto hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">

                <div className="[perspective:1000px]">
                    <div
                        role="button"
                        tabIndex={0}
                        aria-label={`Job on floor ${job.floorNumber}. Click to flip for details.`}
                        onClick={() => setIsFlipped((v) => !v)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault()
                                setIsFlipped((v) => !v)
                            }
                        }}
                        className="relative cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    >
                        <div
                            className={`relative w-full min-h-[300px] ${isFlipped ? 'min-h-[400px]' : ''} bg-white dark:bg-stone-900 border-2 border-stone-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform duration-500 [transform-style:preserve-3d] ${
                                isFlipped ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
                            }`}
                        >
                            {/* Platform Badge */}
                            <div className="absolute -top-3 -right-3 bg-cyan-400 text-stone-900 border-2 border-stone-900 px-3 py-1 font-mono font-bold text-[10px] uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(28,25,23,1)]">
                                {job.platformId}
                            </div>
                            {/* Front */}
                            <div className="p-6 bg-white dark:bg-stone-900 [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                                {/* Job Header */}
                                <div className="mb-4">
                                    <h3 className="text-2xl font-display font-black uppercase tracking-tight mb-2 text-stone-900 dark:text-stone-100">
                                        {job.title}
                                    </h3>
                                    <div className="text-cyan-600 dark:text-cyan-400 font-mono font-bold text-sm uppercase tracking-widest">
                                        {job.company}
                                    </div>
                                </div>

                                {/* Job Details Grid */}
                                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                                    <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
                                        <DollarSign className="w-4 h-4 text-cyan-500" strokeWidth={2.5} />
                                        <span className="font-bold">{job.salary}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
                                        <MapPin className="w-4 h-4 text-cyan-500" strokeWidth={2.5} />
                                        <span className="font-bold">{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
                                        <Calendar className="w-4 h-4 text-cyan-500" strokeWidth={2.5} />
                                        <span className="font-bold">{job.postedDate}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
                                        <span className="text-[10px] font-mono font-black uppercase tracking-widest">—</span>
                                    </div>
                                </div>

                                <div className="text-[10px] font-mono font-black uppercase tracking-widest text-stone-500 mb-3">
                                    Click card for details
                                </div>

                                {/* View Source Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        onViewSource(job.sourceUrl)
                                    }}
                                    className="w-full px-4 py-3 bg-stone-900 text-white font-display font-black uppercase tracking-widest text-sm hover:bg-cyan-400 hover:text-stone-900 transition-colors flex items-center justify-center gap-2 border-2 border-stone-900"
                                >
                                    View Job
                                    <ExternalLink className="w-4 h-4" strokeWidth={2.5} />
                                </button>
                            </div>

                            {/* Back */}
                            <div className="absolute inset-0 p-6 bg-white dark:bg-stone-900 flex flex-col [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)]">
                                <div className="mb-4">
                                    <div className="text-[10px] font-mono font-black uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-2">
                                        Details
                                    </div>
                                    <h3 className="text-2xl font-display font-black uppercase tracking-tight mb-2 text-stone-900 dark:text-stone-100">
                                        {job.title}
                                    </h3>
                                    <div className="text-cyan-600 dark:text-cyan-400 font-mono font-bold text-sm uppercase tracking-widest">
                                        {job.company}
                                    </div>
                                </div>

                                <div className="flex-1 overflow-y-auto pr-2 space-y-3">
                                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500">
                                        <div>
                                            Platform: <span className="text-stone-900 dark:text-stone-100">{job.platformId}</span>
                                        </div>
                                        <div>
                                            Floor: <span className="text-stone-900 dark:text-stone-100">{job.floorNumber}</span>
                                        </div>
                                        <div className="col-span-2">
                                            Job ID: <span className="text-stone-900 dark:text-stone-100 break-all">{job.id}</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 text-sm">
                                        <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
                                            <DollarSign className="w-4 h-4 text-cyan-500" strokeWidth={2.5} />
                                            <span className="font-bold">{job.salary}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
                                            <MapPin className="w-4 h-4 text-cyan-500" strokeWidth={2.5} />
                                            <span className="font-bold">{job.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
                                            <Calendar className="w-4 h-4 text-cyan-500" strokeWidth={2.5} />
                                            <span className="font-bold">{job.postedDate}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
                                            <span className="text-[10px] font-mono font-black uppercase tracking-widest">
                                                {job.officeAttributes.vibe}
                                            </span>
                                        </div>
                                    </div>

                                    {job.details ? (
                                        <div className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-wrap">
                                            {job.details}
                                        </div>
                                    ) : null}

                                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500 break-all">
                                        {job.sourceUrl}
                                    </div>
                                </div>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        onViewSource(job.sourceUrl)
                                    }}
                                    className="w-full px-4 py-3 bg-stone-900 text-white font-display font-black uppercase tracking-widest text-sm hover:bg-cyan-400 hover:text-stone-900 transition-colors flex items-center justify-center gap-2 border-2 border-stone-900"
                                >
                                    View Job
                                    <ExternalLink className="w-4 h-4" strokeWidth={2.5} />
                                </button>

                                <div className="text-[10px] font-mono font-black uppercase tracking-widest text-stone-500 mt-3">
                                    Click to flip back
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
