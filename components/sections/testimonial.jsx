import { FaQuoteLeft } from "react-icons/fa6";
import Image from "next/image";
import Avatar from "@/public/img/avatar.png"
import Says from "@/public/img/says.png"
import Slider from "@/public/img/slider.png"

export default function testimonial() {
  return (
    <div className="bg-primary w-full px-[110px] py-[140px] text-black  space-y-[60px]">
        <div className="text-center">
            <h1 className="text-[72px] font-bold relative inline-block z-10">What Our Clients 
                <span className="relative z-10"> Says</span>
                <Image 
                    src={Says} 
                    width={220}
                    priority
                    alt="project management" 
                    className="absolute top-12 left-145 z-0"
                />
            </h1>
        </div>
        {/* content */}
        <div className="flex items-center space-x-[32px]">
            {/* client */}
            <div className=" py-[30px] px-[20px] rounded-[10px] space-y-[60px] border-2">
                <div className="">
                    <div className="space-y-[32px]">
                        <FaQuoteLeft size={86}/>
                        <p className="text-p2 ">Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
                    </div>
                    <hr className="mt-[40px]"/>
                </div>
                <div className=" flex items-center space-x-[42px]">
                    <Image 
                        src={Avatar} 
                        width={95}
                        height={95}
                        priority
                        alt="Hero image" 
                        className="drop-shadow-lg"
                    />
                    <div className=" space-y-[15px]">
                        <h1 className="text-p1 font-semibold">Oberon Shaw, MCH</h1>
                        <p className="text-p3 ">Head of Talent Acquisition, North America</p>
                    </div>
                </div>
            </div>
            {/* client */}
            <div className="bg-accent text-primary py-[30px] px-[20px] rounded-[10px] space-y-[60px] border-2">
                <div className="">
                    <div className="space-y-[32px]">
                        <FaQuoteLeft size={86}/>
                        <p className="text-p2 ">Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
                    </div>
                    <hr className="mt-[40px]"/>
                </div>
                <div className=" flex items-center space-x-[42px]">
                    <Image 
                        src={Avatar} 
                        width={95}
                        height={95}
                        priority
                        alt="Hero image" 
                        className="drop-shadow-lg"
                    />
                    <div className=" space-y-[15px]">
                        <h1 className="text-p1 text-secondary font-semibold">Oberon Shaw, MCH</h1>
                        <p className="text-p3 ">Head of Talent Acquisition, North America</p>
                    </div>
                </div>
            </div>
            {/* client */}
            <div className="bg-accent text-primary py-[30px] px-[20px] rounded-[10px] space-y-[60px] border-2">
                <div className="">
                    <div className="space-y-[32px]">
                        <FaQuoteLeft size={86}/>
                        <p className="text-p2 ">Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
                    </div>
                    <hr className="mt-[40px]"/>
                </div>
                <div className=" flex items-center space-x-[42px]">
                    <Image 
                        src={Avatar} 
                        width={95}
                        height={95}
                        priority
                        alt="Hero image" 
                        className="drop-shadow-lg"
                    />
                    <div className=" space-y-[15px]">
                        <h1 className="text-p1 text-secondary font-semibold">Oberon Shaw, MCH</h1>
                        <p className="text-p3 ">Head of Talent Acquisition, North America</p>
                    </div>
                </div>
            </div>
        </div>
        {/* slider */}
        <div className="flex justify-center">
            <Image 
                src={Slider} 
                width={60}
                priority
                alt="Hero image" 
                className="drop-shadow-lg"
            />
        </div>
    </div>
  );
}
