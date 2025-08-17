import Navbar from "./navbar";
import Image from 'next/image';
import Logo from "@/public/img/logo.png"

export default function header(){
    return(
        <header className="bg-secondary text-primary px-[220px] py-[32px] flex justify-between w-full ">
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
            <Navbar/>
        </header>
    );
};
