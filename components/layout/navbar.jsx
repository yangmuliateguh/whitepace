import { FaAngleDown, FaArrowRight } from "react-icons/fa6";

export default function navbar(){
    return(
        <div className="flex justify-between items-center ">
            {/* nav-menu */}
            <ul className="mr-[60px] flex justify-center space-x-[32px] text-p ">
                <li className="flex items-center ">
                    <p className="mr-[20px]">Products</p> <FaAngleDown  />
                </li>
                <li className="flex items-center ">
                    <p className="mr-[20px]">Solutions</p> <FaAngleDown  />
                </li>
                <li className="flex items-center ">
                    <p className="mr-[20px]">Resources</p> <FaAngleDown  />
                </li>
                <li className="flex items-center ">
                    <p className="mr-[20px]">Pricing</p> <FaAngleDown  />
                </li>
            </ul>
            {/* button */}
            <div className="flex text-button space-x-[24px]">
                <button className="bg-highlight text-secondary py-[16px] px-[40px] rounded-[10px] text-[18px]">Login</button>
                <button className="bg-accent flex items-center py-[16px] px-[24px] rounded-[10px] text-[18px] text-primary">
                    <p className="mr-[10px]">Try Whitepace Free</p> <FaArrowRight />
                </button>
            </div>
        </div>
    );
};
