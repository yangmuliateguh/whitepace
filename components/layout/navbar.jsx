import { FaAngleDown, FaArrowRight } from "react-icons/fa6";
import Button from "../ui/button";

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
                <Button padding="tight" variant="highlight" >Login</Button>
                <Button padding="normal" variant="accent" rightIcon={<FaArrowRight />}>Try Whitepace Free</Button>
            </div>
        </div>
    );
};
