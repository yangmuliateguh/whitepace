import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaAngleDown, FaGlobe, FaArrowRight} from "react-icons/fa6";
import Image from 'next/image';
import Logo from "@/public/img/logo.png"
import Button from "../ui/button";

export default function footer(){
    return(
        <footer className="bg-secondary flex flex-col items-center text-primary px-[16px] pt-[140px] pb-[32px] space-y-[80px]">
            {/* info */}
            <div className="flex flex-col items-center space-y-[80px]">
                {/* logo description */}
                <div className="flex flex-col items-center text-center space-y-[24px]">
                    {/* logo */}
                    <div className="flex items-center  font-bold text-logo">
                        <Image 
                        className="mr-[10px]"
                        src={Logo} 
                        width={37}
                        priority
                        alt="Logo" />whitepace
                    </div> 
                    <p className="text-p2">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                </div>
                <div className="space-y-[15px] text-center">
                    <h6 className="text-p2 font-bold">Product</h6>
                    <ul className="text-p3 space-y-[15px] ">
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Customer Stories</li>
                    </ul>
                </div>

                {/* resources */}
                <div className="space-y-[15px] text-center">
                    <h6 className="text-p2 font-bold">Resources</h6>
                    <ul className="space-y-[15px] text-p3 ">
                        <li>Blog</li>
                        <li>Guides & tutorials</li>
                        <li>Help center</li>
                    </ul>
                </div>

                {/* company */}
                <div className="space-y-[15px] text-center">
                    <h6 className="text-p2 font-bold">Company</h6>
                    <ul className="space-y-[15px] text-p3 ">
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Media kit</li>
                    </ul>
                </div>

                {/* try-btn */}
                <div className="space-y-[23px] text-center flex flex-col items-center">
                    <h5 className="text-logo font-bold">Try It Today</h5>
                    <p className="text-p3">Get started for free. Add your whole team as your needs grow.</p>
                    <Button padding="normal" variant="accent" size="small" rightIcon={<FaArrowRight />}>Start today</Button>
                </div>
            </div>

            {/* buttom */}
            <div className="flex flex-col items-center space-y-[20px]">
                {/* term and condition */}
                <div className="flex flex-col items-center">
                    <ul className="flex items-center text-p3 space-x-[60px] ">
                        <li className="flex items-center space-x-[6px]">
                            <FaGlobe className=""/>
                            <p className="">English</p>
                            <FaAngleDown className=""/>
                        </li>
                        <li>Terms & privacy</li>
                        <li>Security</li>
                        <li>Status</li>
                        <li>©2021 Whitepace LLC.</li>
                    </ul>
                </div>
                {/* social icon */}
                <div className="flex items-center ">
                    <ul className="flex items-center space-x-[32px] ">
                        <li>
                            <FaFacebookF/>
                        </li>
                        <li>
                            <FaXTwitter/>
                        </li>
                        <li>
                            <FaLinkedinIn/>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
