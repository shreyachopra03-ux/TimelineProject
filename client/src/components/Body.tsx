import ShowcaseButton from "../components/ShowcaseButton";
import { Trophy, Zap, Target } from "lucide-react";

const Body = () => {
    return (
        <div className="py-1 text-center">
            <ShowcaseButton />
        <h1 className="py-2 text-6xl md:text-6xl font-bold text-center leading-[1.2] tracking-wide bg-linear-to-r from-[#10f7ff] via-[#46a3c9] to-[#0355ac] bg-clip-text text-transparent">
            <span className="block">Your Wins, </span>
            <span className="block">Beautifully Told</span>
        </h1>
        <h3 className="text-lg text-center mt-4 tracking-wide text-gray-700">
        <span>Transform your career achievements into a stunning visual story. <span className="text-[#46a3c9] font-bold">Track,</span></span><br/>
        <span><span className="text-[#46a3c9] font-bold">celebrate, and share</span> every milestone.</span>
        </h3>
        <div className="flex gap-6 items-stretch justify-center">

            <div className="hover:border-[#0355ac] border-gray-300 border bg-white mt-7 p-6 w-62.5 min-h-37.5 rounded-2xl flex flex-col">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-[#46a3c9] to-[#0355ac] shadow-sm -mt-2">
                    <Trophy className="text-white w-5 h-5"/>
                </div>
                
                <h3 className="text-gray-800 font-semibold flex mt-2 text-sm mb-1.5">Track Every Win</h3>
                <p className="text-[11px] flex text-left leading-relaxed">Document achievements with rich media support and smart organization for all your milestones.</p>
                </div>
                
            <div className="hover:border-[#0355ac] border-gray-300 border bg-white mt-7 p-6 w-62.5 min-h-37.5 rounded-2xl flex flex-col">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-[#46a3c9] to-[#0355ac] shadow-sm -mt-2">
                    <Target className="text-white w-5 h-5"/>
            </div>
            <h3 className="text-gray-800 font-semibold flex mt-2 text-sm mb-1.5">Set Bold Goals</h3>
            <p className="text-[11px] flex text-left leading-relaxed">Stay motivated with visual progress tracking and celebrate every milestone you achieve.</p>
            </div>

            <div className="hover:border-[#0355ac] border-gray-300 border bg-white mt-7 p-6 w-62.5 min-h-37.5 rounded-2xl flex flex-col">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-[#46a3c9] to-[#0355ac] shadow-sm -mt-2">
                    <Zap className="text-white w-5 h-5"/>
            </div>
            <h3 className="text-gray-800 font-semibold flex mt-2 text-sm mb-1.5">Share Your Story</h3>
            <p className="text-[11px] flex text-left leading-relaxed">Create beautiful portfolios that inspire others and showcase your incredible journey.</p>
            </div>
        </div>
        </div>
    );
};

export default Body;