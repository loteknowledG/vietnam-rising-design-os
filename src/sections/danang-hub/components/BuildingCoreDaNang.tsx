export function BuildingCoreDaNang() {
    return (
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[600px] pointer-events-none">
            {/* Main tower base - tapered curve */}
            <div className="relative h-full flex items-end justify-center">
                {/* Base foundation */}
                <div className="absolute bottom-0 w-80 h-[8%] bg-gradient-to-t from-stone-600 to-stone-500 dark:from-stone-800 dark:to-stone-700 border-t-2 border-stone-400" />
                
                {/* Main curved tower body */}
                <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 h-[92%] w-72">
                    {/* Left side curve */}
                    <div 
                        className="absolute left-0 h-full w-full bg-gradient-to-br from-cyan-100/90 via-cyan-200/70 to-cyan-300/50 dark:from-cyan-900/70 dark:via-cyan-800/50 dark:to-cyan-700/30 border-l-2 border-cyan-400/40"
                        style={{
                            clipPath: 'polygon(35% 0%, 50% 0%, 52% 100%, 40% 100%)',
                        }}
                    />
                    
                    {/* Right side curve */}
                    <div 
                        className="absolute right-0 h-full w-full bg-gradient-to-bl from-cyan-100/90 via-cyan-200/70 to-cyan-300/50 dark:from-cyan-900/70 dark:via-cyan-800/50 dark:to-cyan-700/30 border-r-2 border-cyan-400/40"
                        style={{
                            clipPath: 'polygon(50% 0%, 65% 0%, 60% 100%, 48% 100%)',
                        }}
                    />
                    
                    {/* Center glass facade */}
                    <div 
                        className="absolute left-1/2 -translate-x-1/2 h-full w-60 bg-gradient-to-b from-white/20 via-cyan-50/40 to-cyan-100/30 dark:from-cyan-950/40 dark:via-cyan-900/50 dark:to-cyan-800/40 backdrop-blur-sm"
                        style={{
                            clipPath: 'polygon(38% 0%, 62% 0%, 58% 100%, 42% 100%)',
                        }}
                    >
                        {/* Horizontal floor lines */}
                        <div className="absolute inset-0">
                            {Array.from({ length: 50 }).map((_, i) => (
                                <div 
                                    key={i} 
                                    className="absolute w-full h-[1px] bg-cyan-400/20 dark:bg-cyan-600/30"
                                    style={{ top: `${i * 2}%` }}
                                />
                            ))}
                        </div>
                        
                        {/* Vertical glass panels */}
                        <div className="absolute inset-0 flex justify-around px-4">
                            {Array.from({ length: 8 }).map((_, i) => (
                                <div 
                                    key={i} 
                                    className="w-[1px] h-full bg-gradient-to-b from-cyan-300/30 via-cyan-400/20 to-cyan-300/30"
                                />
                            ))}
                        </div>
                        
                        {/* Window lights */}
                        <div className="absolute inset-0 grid grid-rows-20 gap-y-1 px-8 py-2">
                            {Array.from({ length: 100 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="w-2 h-1 bg-amber-400/50 dark:bg-amber-300/60 rounded-[1px] justify-self-center"
                                    style={{
                                        opacity: Math.random() > 0.4 ? (Math.random() * 0.6 + 0.4) : 0.1,
                                        boxShadow: '0 0 4px rgba(251, 191, 36, 0.3)'
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                    
                    {/* Edge highlights for depth */}
                    <div className="absolute left-[35%] h-full w-[1px] bg-gradient-to-b from-cyan-200/60 via-white/40 to-cyan-200/60" />
                    <div className="absolute right-[35%] h-full w-[1px] bg-gradient-to-b from-cyan-200/60 via-white/40 to-cyan-200/60" />
                </div>

                {/* Top crown structure */}
                <div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-20 bg-gradient-to-b from-cyan-300/80 via-cyan-200/50 to-transparent dark:from-cyan-400/60 dark:via-cyan-500/30"
                    style={{
                        clipPath: 'polygon(30% 0%, 70% 0%, 60% 100%, 40% 100%)',
                        filter: 'blur(1px)',
                        boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)'
                    }}
                />
                
                {/* Glow effect at top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-24 bg-cyan-400/20 blur-xl rounded-full" />
            </div>
        </div>
    )
}
