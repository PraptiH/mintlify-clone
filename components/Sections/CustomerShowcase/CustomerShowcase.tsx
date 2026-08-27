import AgentSection from "./AgentSection";
import CustomerLogo from "./CustomerLogo";

export default function CustomerShowcase() {
    return (
        <div className="border-t border-[#1e1f21] my-5 bg-[#08090a]">

            <div className="grid grid-cols-24 w-[calc(100%-32px)] max-w-272 gap-x-4 mx-auto">
                <div className="col-span-full flex flex-col lg:flex-row border-r border-l border-[#1e1f21] lg:border-r-0">

                    <div className="flex flex-col justify-between gap-10 p-7 lg:shrink-0 lg:w-1/3 border-b border-[#1e1f21] lg:border-none">
                        <h2 className="font-medium text-[#ffffff99] text-2xl/6">Join <span className="text-white">20,000+</span> of the world's most ambitious companies building for agents.</h2>
                        <button className="group w-fit flex shrink-0 items-center justify-center gap-0.5 bg-white hover:bg-white/90 text-black pl-4 pr-3 py-3 rounded-sm font-medium text-sm/4 whitespace-nowrap cursor-pointer duration-300">
                            Read customer stories
                            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-4 opacity-50 transition-opacity duration-150 ease-out group-hover:opacity-100 motion-reduce:transition-none">
                                <g className="transition-[transform,translate] duration-150 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none">
                                    <path d="M2.5 8H10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100 motion-reduce:transition-none"></path>
                                    <path d="M7 4.5L10.5 8 7 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </g>
                            </svg>
                        </button>
                    </div>

                    <div className="min-w-0 flex-1 lg:border-l lg:border-r lg:border-[#1e1f21]">
                        <CustomerLogo />
                    </div>
                </div>
            </div>

            <div className="border-y border-[#1e1f21]">
                <div className="grid grid-cols-24 w-[calc(100%-32px)] max-w-272 gap-x-4 mx-auto px-7">
                    <div className="col-span-full flex items-center py-5 lg:py-8">

                        <div className="flex items-center justify-between gap-5 border-r border-white/10 whitespace-nowrap">
                            <p className="font-medium text-[15px]/6 lg:text-base/6">Agents at work today</p>
                            <p className="text-[#ffffff14] h-5 w-px"></p>
                        </div>

                        <div className="relative min-w-0 flex-1">

                            <AgentSection />

                            <div className="absolute inset-y-0 left-0 w-20 z-10 bg-[linear-gradient(to_right,#08090a_0%,transparent_71%)] pointer-events-none"></div>
                            <div className="absolute inset-y-0 right-0 w-20 z-10 bg-[linear-gradient(to_right,transparent_0%,#08090a_71%)] pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}