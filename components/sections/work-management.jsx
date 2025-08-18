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
    <div className="bg-primary w-full py-[140px] px-[110px] text-black space-y-[100px]">
        <div className="flex items-center space-x-[50px] relative">
            <Image 
                src={Projectimgbg} 
                width={500}
                priority
                alt="project management" 
                className="absolute top-20 left-[-17rem] z-0"
            />
            {/* content */}
            <div className="w-[670px] z-10 ">
                <div className="space-y-[24px]">
                    <h1 className="text-headerh1 font-bold relative inline-block">Project
                        <span className="relative z-10"> Management</span>
                        <Image 
                            src={Management} 
                            width={410}
                            priority
                            alt="project management" 
                            className="absolute top-40 left-0 z-0"
                        />
                    </h1>
                    <p className="text-p2 ">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                </div>
                <Button className="mt-[40px]" padding="normal" variant="accent" size="medium" rightIcon={<FaArrowRight />}>Get Started</Button>
            </div>
            {/* img */}
            <div className="">
                <Image 
                    src={Projectimg} 
                    width={648}
                    priority
                    alt="project management" 
                    className="drop-shadow-lg "
                />
            </div>
        </div>
        <div className="flex items-center space-x-[100px]">
            {/* img */}
            <div className="z-10">
                <Image 
                src={Worktogetherimg} 
                width={680}
                height={661}
                priority
                alt="work together" 
                className="drop-shadow-lg"
                />
            </div>
            {/* content */}
            <div className="w-[670px]">
                <div className="space-y-[24px]">
                    <h1 className="text-headerh1 font-bold relative inline-block">Work
                        <span className="relative z-10"> together</span>
                        <Image 
                            src={Worktogetherimgbg} 
                            width={280}
                            priority
                            alt="project management" 
                            className="absolute top-15 left-44 z-0"
                        />
                    </h1>
                    <p className="text-p2 ">With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</p>
                </div>
                <Button className="mt-[40px]" padding="normal" variant="accent" rightIcon={<FaArrowRight />}>Try it now</Button>
            </div>
        </div>
    </div>
  );
}
