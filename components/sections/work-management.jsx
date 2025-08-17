import Image from "next/image";
import Projectimg from "@/public/img/project-management.png"
import Worktogetherimg from "@/public/img/work-together.png"
import { FaArrowRight } from "react-icons/fa6";
import Projectimgbg from "@/public/img/project-management-bg2.png"

export default function workmanagement() {
  return (
    <div className="bg-primary w-full py-[140px] px-[220px] text-black space-y-[100px]">
        <div className="flex items-center">
            {/* content */}
            <div className="z-10 mr-[60px]">
                <div className="space-y-[24px]">
                    <h1 className="text-[72px] font-semibold ">Project
                        <span
                        className=""
                        style={{ 
                            backgroundImage : `url(${Projectimgbg.src})`,
                        }}> Management</span>
                    </h1>
                    <p className="text-[18px] ">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                </div>
                <button className="mt-[60px] bg-accent text-primary text-[18px] font-medium flex items-center rounded-[10px] px-[40px] py-[20px] ">
                    <p className="mr-[10px]">Get Started</p>
                    <FaArrowRight />
                </button>
            </div>
            {/* img */}
            <div className="">
                <Image 
                src={Projectimg} 
                width={1600}
                height={547}
                priority
                alt="project management" 
                className="drop-shadow-lg"
                />
            </div>
        </div>
        <div className="flex items-center">
            {/* img */}
            <div className="z-10 mr-[60px]">
                <Image 
                src={Worktogetherimg} 
                width={1450}
                height={661}
                priority
                alt="work together" 
                className="drop-shadow-lg"
                />
            </div>
            {/* content */}
            <div className="">
                <div className="space-y-[24px]">
                    <h1 className="text-[72px] font-semibold ">Work together</h1>
                    <p className="text-[18px] ">With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</p>
                </div>
                <button className="mt-[60px] bg-accent text-primary text-[18px] font-medium flex items-center rounded-[10px] px-[40px] py-[20px] ">
                    <p className="mr-[10px]">Try it now</p>
                    <FaArrowRight />
                </button>
            </div>
        </div>
    </div>
  );
}
