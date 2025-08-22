import { FaAngleDown, FaArrowRight, FaBars } from "react-icons/fa6";
import Button from "../ui/button";

export default function navbar(){
    return(
        <div className="flex justify-between items-center">
            <FaBars size="42px" />
            {/* nav-menu */}
            <ul className="mr-[30px] justify-center space-x-[16px] text-p2
                hidden xl:flex 
            ">
                <li className="flex items-center ">
                    <p className="mr-[20px]">Products</p> <FaAngleDown/>
                </li>
                <li className="flex items-center ">
                    <p className="mr-[20px]">Solutions</p> <FaAngleDown/>
                </li>
                <li className="flex items-center ">
                    <p className="mr-[20px]">Resources</p> <FaAngleDown/>
                </li>
                <li className="flex items-center ">
                    <p className="mr-[20px]">Pricing</p> <FaAngleDown/>
                </li>
            </ul>
            {/* button */}
            <div className="text-button space-x-[12px]
                hidden lg:flex 
            ">
                <Button padding="tight" variant="highlight" size="medium">
                    Login
                </Button>
                <Button padding="normal" variant="accent" size="medium" rightIcon={<FaArrowRight />}>
                    Try Whitepace Free
                </Button>
            </div>
        </div>
    );
};
