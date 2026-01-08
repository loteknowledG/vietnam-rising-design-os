export function BuildingCoreHanoi() {
    return (
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-full max-w-3xl pointer-events-none flex items-stretch justify-center">
            {/*
              Lotte Center-inspired form:
              - Twin glass slabs
              - Central tapered gap/spine (wider at the top)
              - Subtle crown band
            */}
            <div className="relative h-full w-[44rem] md:w-[48rem]">
                {/* Twin slabs */}
                <div className="absolute inset-0 flex">
                    {/* Left slab (inner edge slopes outward going down -> gap narrows toward base) */}
                    <div
                        className="h-full w-1/2 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 dark:from-slate-800 dark:via-slate-900 dark:to-stone-950 border-l-2 border-cyan-400/60 dark:border-cyan-300/40"
                        style={{ clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)' }}
                    >
                        {/* Horizontal floor lines */}
                        <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(0deg,transparent,transparent_12px,rgba(14,165,233,0.4)_12px,rgba(14,165,233,0.4)_14px)]" />
                        {/* Vertical column grid */}
                        <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(14,165,233,0.3)_20px,rgba(14,165,233,0.3)_21px)]" />
                        {/* Lit window bands */}
                        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_40px,rgba(168,239,255,0.35)_40px,rgba(168,239,255,0.35)_44px,transparent_44px,transparent_60px)]" />
                    </div>

                    {/* Right slab (mirror) */}
                    <div
                        className="h-full w-1/2 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 dark:from-slate-800 dark:via-slate-900 dark:to-stone-950 border-r-2 border-cyan-400/60 dark:border-cyan-300/40"
                        style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}
                    >
                        {/* Horizontal floor lines */}
                        <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(0deg,transparent,transparent_12px,rgba(14,165,233,0.4)_12px,rgba(14,165,233,0.4)_14px)]" />
                        {/* Vertical column grid */}
                        <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(14,165,233,0.3)_20px,rgba(14,165,233,0.3)_21px)]" />
                        {/* Lit window bands */}
                        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_40px,rgba(168,239,255,0.35)_40px,rgba(168,239,255,0.35)_44px,transparent_44px,transparent_60px)]" />
                    </div>
                </div>

                {/* Central spine / recessed core */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-20 md:w-24">
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-700 via-amber-800 to-stone-900 dark:from-amber-900 dark:via-stone-950 dark:to-stone-950" />
                    {/* Horizontal floor lines */}
                    <div className="absolute inset-0 opacity-45 bg-[repeating-linear-gradient(0deg,transparent,transparent_12px,rgba(245,158,11,0.4)_12px,rgba(245,158,11,0.4)_14px)]" />
                    {/* Lit window bands */}
                    <div className="absolute inset-0 opacity-50 bg-[repeating-linear-gradient(0deg,transparent,transparent_36px,rgba(251,191,36,0.4)_36px,rgba(251,191,36,0.4)_40px,transparent_40px,transparent_60px)]" />
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-amber-500 dark:bg-amber-300" />
                </div>

                {/* Bright mid-band (like lit office floors) */}
                <div className="absolute left-12 right-12 top-[58%] h-10 bg-amber-200 dark:bg-amber-900/50 border-y border-amber-400/50 dark:border-amber-400/30" />

                {/* Crown accents */}
                <div className="absolute top-0 left-0 right-0 h-8">
                    <div className="absolute left-1 top-1 h-5 w-48 bg-red-500/70 dark:bg-red-500/50" />
                    <div className="absolute right-1 top-1 h-5 w-48 bg-red-500/70 dark:bg-red-500/50" />
                    <div className="absolute inset-x-16 bottom-0 h-px bg-cyan-300/40 dark:bg-cyan-200/20" />
                </div>

                {/* Landmark 72 branding at top - centered */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 pointer-events-none">
                    <div className="bg-stone-200 dark:bg-stone-800 px-6 py-2.5 md:px-8 md:py-3 border-2 border-stone-300 dark:border-stone-700">
                        <div className="font-heading font-black text-stone-800 dark:text-stone-200 text-xl md:text-2xl tracking-wider">
                            LANDMARK 72
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
