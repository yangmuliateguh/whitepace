import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaAngleDown, FaGlobe, FaArrowRight} from "react-icons/fa6";
import Image from 'next/image';
import Logo from "@/public/img/logo.png"
import Button from "../ui/button";

export default function footer(){
    return(
        <footer className="bg-secondary text-primary px-[220px] pt-[140px] pb-[32px]">

            {/* info */}
            <div className=" flex justify-between mb-[100px] space-x-[100px]">

                {/* logo description */}
                <div className="w-[230px] space-y-[15px] ">
                    {/* logo */}
                    <div className="flex items-center font-bold text-[28px]">
                        <Image 
                        className="mr-[10px]"
                        src={Logo} 
                        width={37}
                        height={29}
                        priority
                        alt="Logo" />whitepace
                    </div> 
                    <p className="text-[18px]">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                </div>

                <div className="w-[200px] space-y-[15px] ">
                    <h6 className="text-[18px]">Product</h6>
                    <ul className="text-[16px] space-y-[15px] ">
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Customer Stories</li>
                    </ul>
                </div>

                {/* resources */}
                <div className="w-[200px] space-y-[15px] ">
                    <h6 className="text-[18px]">Resources</h6>
                    <ul className="space-y-[15px] text-[16px] ">
                        <li>Blog</li>
                        <li>Guides & tutorials</li>
                        <li>Help center</li>
                    </ul>
                </div>

                {/* company */}
                <div className="w-[200px] space-y-[15px] text-[18px] ">
                    <h6>Company</h6>
                    <ul className="space-y-[15px] text-[16px] ">
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Media kit</li>
                    </ul>
                </div>

                {/* try-btn */}
                <div className="w-[250px]  space-y-[23px]">
                    <h5 className="text-[28px]">Try It Today</h5>
                    <p className="text-[16px]">Get started for free. Add your whole team as your needs grow.</p>
                    <Button padding="normal" variant="accent" size="small" rightIcon={<FaArrowRight />}>Start today</Button>
                </div>
            </div>

            {/* buttom */}
            <div className="flex justify-between ">

                {/* term and condition */}
                <div className="">
                    <ul className="flex items-center text-[16px] space-x-[60px] ">
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
