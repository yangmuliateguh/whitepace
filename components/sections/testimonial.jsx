import { FaQuoteLeft } from "react-icons/fa6";
import Image from "next/image";
import Avatar from "@/public/img/avatar.png"

export default function testimonial() {
  return (
    <div className="bg-primary w-full px-[220px] py-[140px] text-black  space-y-[60px]">
        <div className="text-center">
            <h1 className="text-[72px]">What Our Clients Says</h1>
        </div>
        {/* content */}
        <div className="flex items-center  space-x-[32px]">
            {/* client */}
            <div className=" py-[60px] px-[40px] rounded-[10px] space-y-[60px] border-2">
                <div className="">
                    <div className="space-y-[32px]">
                        <FaQuoteLeft size={86}/>
                        <p className="text-[18px] ">Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
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
                        <h1 className="text-[24px] ">Oberon Shaw, MCH</h1>
                        <p className="text-[16px] ">Head of Talent Acquisition, North America</p>
                    </div>
                </div>
            </div>
            {/* client */}
            <div className=" py-[60px] px-[40px] rounded-[10px] space-y-[60px] border-2">
                <div className="">
                    <div className="space-y-[32px]">
                        <FaQuoteLeft size={86}/>
                        <p className="text-[18px] ">Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
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
                        <h1 className="text-[24px] ">Oberon Shaw, MCH</h1>
                        <p className="text-[16px] ">Head of Talent Acquisition, North America</p>
                    </div>
                </div>
            </div>
            {/* client */}
            <div className=" py-[60px] px-[40px] rounded-[10px] space-y-[60px] border-2">
                <div className="">
                    <div className="space-y-[32px]">
                        <FaQuoteLeft size={86}/>
                        <p className="text-[18px] ">Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
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
                        <h1 className="text-[24px] ">Oberon Shaw, MCH</h1>
                        <p className="text-[16px] ">Head of Talent Acquisition, North America</p>
                    </div>
                </div>
            </div>
        </div>
        {/* slider */}
        <div>x x x</div>
    </div>
  );
}
