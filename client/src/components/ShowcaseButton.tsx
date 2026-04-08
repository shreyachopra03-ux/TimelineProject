import { HiOutlineTrophy,  HiOutlineSparkles } from "react-icons/hi2";

const ShowcaseButton = () => {
    return (
        <div className="group flex gap-2.5 px-3.5 py-1.5 rounded-full items-center justify-center mx-auto bg-[#e6f8fa]/30 border border-[#57d1dd] shadow-sm hover:Scale-105 text-white w-fit backdrop-blur-sm transition-all duration-300 hover:scale[1.02]">
            <HiOutlineTrophy className="text-[#0355ac] size={14} animate-trophy shrink-0"/>
            <span className="text-[#0355ac] font-semibold text-[11px] whitespace-nowrap">Showcase Your Success Story</span>
            <HiOutlineSparkles className="text-[#0355ac] size={14} animate-sparkle" />
        </div>
    )
}

export default ShowcaseButton;