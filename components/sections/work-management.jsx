import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import Button from "../ui/button";
import Projectimg from "@/public/img/project-management.png"
import Projectimgbg from "@/public/img/project-management-bg.png"
import Management from "@/public/img/management.png"
import Worktogetherimg from "@/public/img/work-together.png"
import Worktogetherimgbg from "@/public/img/work-together-bg2.png"

export default function workmanagement() {
  return (
    <div className="bg-primary w-full py-[80px] px-[16px] text-black space-y-[100px]">
        {/* project management */}
        <div className="flex flex-col items-center relative">
            {/* project management background */}
            <Image 
                src={Projectimgbg} 
                width={168.75}
                priority
                alt="project management" 
                className="absolute top-0 left-0 z-0"
            />
            {/* content */}
            <div className="z-10 flex flex-col items-center space-y-[60px]">
                {/* text */}
                <div className="flex flex-col items-center space-y-[60px]">
                    <div className="space-y-[24px] text-center">
                        <h1 className="text-headerh4 font-bold relative inline-block">Project
                            <span className="relative z-10"> Management</span>
                            <Image 
                                src={Management} 
                                width={254.66}
                                priority
                                alt="project management" 
                                className="absolute top-0 left-0 z-0"
                            />
                        </h1>
                        <p className="text-p2 ">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                    </div>
                    <Button className="" padding="normal" variant="accent" size="medium" rightIcon={<FaArrowRight />}>Get Started</Button>
                </div>
                {/* image  */}
                <Image 
                    src={Projectimg} 
                    width={286}
                    priority
                    alt="project management" 
                    className="drop-shadow-lg "
                />
            </div>
            {/* img */}
        </div>
        {/* work together */}
        <div className="flex flex-col items-center space-y-[60px]">
            {/* content */}
            <div className="flex flex-col items-center space-y-[60px]">
                {/* text */}
                <div className="space-y-[24px] text-center">
                    <h1 className="text-headerh4 font-bold relative inline-block">Work
                        <span className="relative z-10"> together</span>
                        <Image 
                            src={Worktogetherimgbg} 
                            width={280}
                            priority
                            alt="project management" 
                            className="absolute top-0 left-0 z-0"
                        />
                    </h1>
                    <p className="text-p2 ">With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</p>
                </div>
                <Button className="" padding="normal" variant="accent" rightIcon={<FaArrowRight />}>Try it now</Button>
            </div>
            {/* image */}
            <Image 
                src={Worktogetherimg} 
                width={279}
                priority
                alt="work together" 
                className="drop-shadow-lg"
            />
        </div>
    </div>
  );
}
