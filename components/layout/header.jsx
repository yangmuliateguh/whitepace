import Navbar from "./navbar";
import Image from 'next/image';
import Logo from "@/public/img/logo.png"

export default function header(){
    return(
        <header className="bg-secondary text-primary px-[110px] py-[16px] flex justify-between w-full ">
            {/* logo */}
            <div className="flex items-center font-bold text-logo">
                <Image 
                className="mr-[10px]"
                src={Logo} 
                width={30}
                priority
                alt="Logo" />whitepace
            </div> 
            <Navbar/>
        </header>
    );
};
