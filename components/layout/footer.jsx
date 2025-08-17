import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaAngleDown, FaGlobe} from "react-icons/fa6";

export default function footer(){
    return(
        <footer className="bg-secondary text-primary px-[220px] border-2">

            {/* info */}
            <div className="flex mb-[100px] gap-[100px] border-2">

                {/* logo description */}
                <div className="border-2">
                    {/* logo */}
                    <div className="text-[28px]">
                        <img src="#" alt="" />Whitepace
                    </div>
                    <p className="text-[18px]">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                </div>

                {/* info */}
                <div className="border-2">
                    {/* product */}
                    <div className="border-2">
                        <h6 className="text-[18px]">Product</h6>
                        <ul className="text-[16px] border-2">
                            <li>Overview</li>
                            <li>Pricing</li>
                            <li>Customer Stories</li>
                        </ul>
                    </div>

                    {/* resources */}
                    <div className="border-2">
                        <h6 className="text-[18px]">Resources</h6>
                        <ul className="text-[16px] border-2">
                            <li>Blog</li>
                            <li>Guides & tutorials</li>
                            <li>Help center</li>
                        </ul>
                    </div>

                    {/* company */}
                    <div className="text-[18px] border-2">
                        <h6>Company</h6>
                        <ul className="text-[16px] border-2">
                            <li>About us</li>
                            <li>Careers</li>
                            <li>Media kit</li>
                        </ul>
                    </div>
                </div>

                {/* try-btn */}
                <div className="border-2">
                    <h5 className="text-[28px]">Try It Today</h5>
                    <p className="text-[16px]">Get started for free. Add your whole team as your needs grow.</p>
                    <button className="text-[16px]">Start today <img src="#" alt="" /></button>
                </div>
            </div>

            {/* buttom */}
            <div className="flex justify-between border-2">

                {/* term and condition */}
                <div className="border-2">
                    <ul className="flex flex-row text-[16px] gap-[60px] border-2">
                        <li className="flex items-center">
                            <FaGlobe />
                            English
                            <FaAngleDown />
                        </li>
                        <li>Terms & privacy</li>
                        <li>Security</li>
                        <li>Status</li>
                        <li>©2021 Whitepace LLC.</li>
                    </ul>
                </div>

                {/* social icon */}
                <div className="border-2">
                    <ul className="flex flex-row gap-[32px] border-2">
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
