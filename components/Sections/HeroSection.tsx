import preview from '@/public/Images/preview-dark.svg'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <div className="grid grid-cols-24 gap-y-8 lg:gap-y-0 px-5 lg:px-0 pt-6 lg:pt-20">

            <div className="flex flex-col gap-4 col-span-full lg:col-start-4 lg:col-end-10 lg:row-start-1">

                <div className="w-fit flex items-center gap-3 font-medium text-xs/4 bg-[#08090a] rounded-xs hover:bg-[#ffffff0d] border border-[#ffffff12] py-1 pl-2.5 pr-1 group cursor-pointer">
                    <p className="text-[#ffffffb3]">Agent Traffic</p>
                    <p className="flex items-center gap-1 bg-[rgba(31,167,122,0.08)] py-1 pl-2 pr-1 rounded-xs">66.5070%
                        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-4 transition-opacity duration-150 ease-out group-hover:opacity-100 motion-reduce:transition-none text-[#0c8c5e] opacity-100">
                            <g className="transition-[transform,translate] duration-150 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none">
                                <path d="M2.5 8H10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100 motion-reduce:transition-none"></path>
                                <path d="M7 4.5L10.5 8 7 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g>
                        </svg>
                    </p>
                </div>

                <div className="space-y-3">
                    <h1 className="font-serif text-[2.5rem]/[2.75rem] lg:text-[3.125rem]/[3.25rem] tracking-[-0.08px] lg:tracking-[-2px]">The knowledge infrastructure agents build on</h1>
                    <p className="text-[#ffffff99] text-lg/6">Self-updating documentation for <span className="text-white font-medium">startups</span>, <span className="text-white font-medium">enterprises</span>, and <span className="text-white font-medium">agents</span>.</p>
                </div>

                <div className="flex items-center gap-2 pt-8">
                    <button className="inline-flex items-center justify-center gap-1.5 bg-white text-black hover:bg-white/80 duration-300 rounded-sm p-3 cursor-pointer font-medium text-sm/4 whitespace-nowrap">Get started
                        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-4 opacity-50 transition-opacity duration-150 ease-out group-hover:opacity-100 motion-reduce:transition-none">
                            <g className="transition-[transform,translate] duration-150 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none">
                                <path d="M2.5 8H10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100 motion-reduce:transition-none"></path>
                                <path d="M7 4.5L10.5 8 7 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g>
                        </svg>
                    </button>
                    <button className="inline-flex items-center justify-center gap-1.5 border border-[#ffffff12] rounded-sm p-3 cursor-pointer font-medium text-sm/4 whitespace-nowrap hover:bg-white/5 duration-300">
                        <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#4285F4" d="M15.68 8.18c0-.57-.05-1.11-.15-1.64H8v3.1h4.3a3.68 3.68 0 0 1-1.6 2.42v2h2.59c1.51-1.4 2.39-3.45 2.39-5.88Z"></path>
                            <path fill="#34A853" d="M8 16c2.16 0 3.97-.72 5.29-1.94l-2.59-2c-.72.48-1.63.77-2.7.77-2.08 0-3.84-1.4-4.47-3.29H.86v2.07A8 8 0 0 0 8 16Z"></path>
                            <path fill="#FBBC05" d="M3.53 9.54a4.8 4.8 0 0 1 0-3.07V4.4H.86a8 8 0 0 0 0 7.2l2.67-2.06Z"></path>
                            <path fill="#EA4335" d="M8 3.18c1.17 0 2.23.4 3.06 1.2l2.29-2.3A8 8 0 0 0 .86 4.4l2.67 2.07C4.16 4.58 5.92 3.18 8 3.18Z"></path>
                        </svg>
                        Sign up with Google</button>
                </div>


            </div>

            <div className="mt-16 lg:-mt-20 col-span-full lg:col-start-11 lg:row-start-2 w-146.75 max-w-none lg:w-264.25 sm:w-[120%]">
                <Image src={preview} alt="" />
            </div>

        </div>
    )
}