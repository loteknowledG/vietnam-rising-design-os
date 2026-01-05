
export function BuildingCore() {
    return (
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-full max-w-lg pointer-events-none flex items-end justify-center perspective-[100px] mb-[-2px]">
            {/* 
              Landmark 81 Structure: Asymmetrical Bundled Tubes 
              Using flex-end alignment and percentage heights to create the stepped profile accurately.
            */}

            {/* Left Wing - Lower & Stepped */}
            <div className="relative h-[25%] w-8 bg-gradient-to-t from-amber-600 via-amber-300 to-transparent opacity-40 mx-0.5 rounded-t-sm" />
            <div className="relative h-[40%] w-9 bg-gradient-to-t from-amber-600 via-amber-300 to-transparent opacity-60 mx-0.5 rounded-t-sm" />

            {/* Left Inner - High */}
            <div className="relative h-[75%] w-10 bg-gradient-to-t from-amber-600 via-yellow-200 to-transparent opacity-80 mx-0.5 rounded-t-sm shadow-[0_0_15px_rgba(251,191,36,0.3)]" />

            {/* Central Spire - Highest */}
            <div className="relative h-[95%] w-14 flex flex-col items-center mx-1 z-10 bottom-0">
                {/* Spire Tip */}
                <div className="w-2 h-48 -mt-24 bg-gradient-to-t from-fuchsia-600 to-fuchsia-400 rounded-t-full shadow-[0_0_20px_rgba(232,121,249,0.8)] animate-pulse" />

                {/* Spire Body */}
                <div className="w-full h-full bg-gradient-to-t from-yellow-500 via-amber-400 to-fuchsia-700 rounded-t-lg shadow-[0_0_40px_rgba(245,158,11,0.5)]">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_4px,rgba(0,0,0,0.3)_4px,rgba(0,0,0,0.3)_5px)] opacity-50" />
                </div>
            </div>

            {/* Right Inner - Slightly lower than Left Inner */}
            <div className="relative h-[70%] w-10 bg-gradient-to-t from-amber-600 via-yellow-200 to-transparent opacity-80 mx-0.5 rounded-t-sm shadow-[0_0_15px_rgba(251,191,36,0.3)]" />

            {/* Right Wing - Distinct stepping */}
            <div className="relative h-[45%] w-8 bg-gradient-to-t from-amber-600 via-amber-300 to-transparent opacity-60 mx-0.5 rounded-t-sm" />
            <div className="relative h-[30%] w-7 bg-gradient-to-t from-amber-600 via-amber-300 to-transparent opacity-40 mx-0.5 rounded-t-sm" />
        </div>
    )
}
