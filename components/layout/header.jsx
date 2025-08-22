import Navbar from "./navbar";
import Image from 'next/image';
import Logo from "@/public/img/logo.png"

export default function header(){
    return(
        <header className="bg-secondary text-primary flex justify-between w-full py-[16px]
            px-[16px]
        ">
            {/* logo */}
            <div className="flex items-center font-bold text-logo">
                <Image 
                className="mr-[10px]"
                src={Logo} 
                width={25.96}
                priority
                alt="Logo" />whitepace
            </div> 
            <Navbar/>
        </header>
    );
};
