import Image from "next/image";
import Projectimg from "@/public/img/project-management.png"
import Worktogetherimg from "@/public/img/work-together.png"
import { FaArrowRight } from "react-icons/fa6";
import Projectimgbg from "@/public/img/project-management-bg2.png"
import Button from "../ui/button";

export default function workmanagement() {
  return (
    <div className="bg-primary w-full py-[140px] px-[220px] text-black space-y-[100px]">
        <div className="flex items-center space-x-[100px]">
            {/* content */}
            <div className="w-[670px] z-10">
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
                <Button className="mt-[40px]" padding="normal" variant="accent" rightIcon={<FaArrowRight />}>Get Started</Button>
            </div>
            {/* img */}
            <Image 
                src={Projectimg} 
                width={748}
                height={547}
                priority
                alt="project management" 
                className="drop-shadow-lg"
            />
        </div>
        <div className="flex items-center space-x-[100px]">
            {/* img */}
            <div className="z-10">
                <Image 
                src={Worktogetherimg} 
                width={710}
                height={661}
                priority
                alt="work together" 
                className="drop-shadow-lg"
                />
            </div>
            {/* content */}
            <div className="w-[670px]">
                <div className="space-y-[24px]">
                    <h1 className="text-[72px] font-semibold ">Work together</h1>
                    <p className="text-[18px] ">With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</p>
                </div>
                <Button className="mt-[40px]" padding="normal" variant="accent" rightIcon={<FaArrowRight />}>Try it now</Button>
            </div>
        </div>
    </div>
  );
}
