import { FaRegCircleCheck } from "react-icons/fa6"
import Yourplan from "@/public/img/your-plan.png"
import Image from "next/image";
import Button from "../ui/button"

export default function pricing() {
  return (
    <div className="bg-primary w-full px-[110px] py-[140px] space-y-[60px] text-black">
        {/* heading */}
        <div className="text-center flex flex-col items-center space-y-[24px] ">
            <h1 className="text-headerh1 font-bold relative inline-block">Choose 
                <span className="relative z-10"> Your Plan</span>
                <Image 
                    src={Yourplan} 
                    width={289}
                    priority
                    alt="project management" 
                    className="absolute top-15 left-60 z-0"
                />

            </h1>
            <p className="w-[980px] text-p2 ">Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
        </div>
        {/* pricelist */}
        <div className="flex items-center space-x-[32px] ">
            {/* price board */}
            <div className="bg-primary w-[472px] px-[22px] py-[20px] space-y-[15px] rounded-[10px] border-2 border-highlight">
                {/* text-block */}
                <div className="space-y-[15px] ">
                    <h5 className="text-p1 font-semibold ">Free</h5>
                    <h1 className="text-headerh4 font-bold">$0</h1>
                    <p className="text-p2 ">Capture ideas and find them quickly</p>
                </div>
                {/* bulletpoint */}
                <ul className="space-y-[18px]">
                    <li className="flex items-center space-x-[10px] ">
                        <FaRegCircleCheck className="w-[18px] " />
                        <p className="text-p3">Sync unlimited devices</p>
                    </li>
                    <li className="flex items-center space-x-[10px] ">
                        <FaRegCircleCheck className="w-[18px] " />
                        <p className="text-p3">10 GB monthly uploads</p>
                    </li>
                    <li className="flex items-center space-x-[10px] ">
                        <FaRegCircleCheck className="w-[18px] " />
                        <p className="text-p3">200 MB max. note size</p>
                    </li>
                    <li className="flex items-center space-x-[10px] ">
                        <FaRegCircleCheck className="w-[18px] " />
                        <p className="text-p3">Customize Home dashboard and access extra widgets</p>
                    </li>
                    <li className="flex items-center space-x-[10px] ">
                        <FaRegCircleCheck className="w-[18px] " />
                        <p className="text-p3">Connect primary Google Calendar account</p>
                    </li>
                    <li className="flex items-center space-x-[10px] ">
                        <FaRegCircleCheck className="w-[18px] " />
                        <p className="text-p3">Add due dates, reminders, and notifications to your tasks</p>
                    </li>
                </ul>
                {/* button */}
                <Button  padding="tight" variant="primary" >Get Started</Button>
            </div>
            {/* price board */}
            <div className="bg-secondary w-[472px] text-primary px-[22px] py-[40px] space-y-[15px] rounded-[10px] ">
                {/* text-block */}
                <div className="space-y-[15px] ">
                    <h5 className="text-p1 font-semibold ">Personal</h5>
                    <h1 className="text-headerh4 font-bold text-highlight">$11.99</h1>
                    <p className="text-p2 ">Keep home and family on track</p>
                </div>
                {/* bulletpoint */}
                <ul className="space-y-[18px]">
                    <li className="flex items-center space-x-[10px] ">
                        <FaRegCircleCheck className="w-[18px] " />
                        <p className="text-p2">Sync unlimited devices</p>
                    </li>
                    <li className="flex items-center space-x-[10px] ">
                        <FaRegCircleCheck className="w-[18px] " />
                        <p className="text-p2">10 GB monthly uploads</p>
                    </li>
                    <li className="flex items-center space-x-[10px] ">
                        <FaRegCircleCheck className="w-[18px] " />
                        <p className="text-p2">200 MB max. note size</p>
                    </li>
                    <li className="flex items-center space-x-[10px] ">
                        <FaRegCircleCheck className="w-[18px] " />
                        <p className="text-p2">Customize Home dashboard and access extra widgets</p>
                    </li>
                    <li className="flex items-center space-x-[10px] ">
                        <FaRegCircleCheck className="w-[18px] " />
                        <p className="text-p2">Connect primary Google Calendar account</p>
                    </li>
                    <li className="flex items-center space-x-[10px] ">
                        <FaRegCircleCheck className="w-[18px] " />
                        <p className="text-p2">Add due dates, reminders, and notifications to your tasks</p>
                    </li>
                </ul>
                {/* button */}
                <Button  padding="tight" variant="accent" >Get Started</Button>
            </div>
            {/* price board */}
            <div className="bg-primary w-[472px] px-[22px] py-[20px] space-y-[15px] rounded-[10px] border-2 border-highlight">
                {/* text-block */}
                <div className="space-y-[15px] ">
                    <h5 className="text-p1 font-semibold ">Organization</h5>
                    <h1 className="text-headerh4 font-bold">$49.99</h1>
                    <p className="text-p2 ">Capture ideas and find them quickly</p>
                </div>
                {/* bulletpoint */}
                <ul className="space-y-[18px]">
                    <li className="flex items-center space-x-[10px] ">
                        <FaRegCircleCheck className="w-[18px] " />
                        <p className="text-p3">Sync unlimited devices</p>
                    </li>
                    <li className="flex items-center space-x-[10px] ">
                        <FaRegCircleCheck className="w-[18px] " />
                        <p className="text-p3">10 GB monthly uploads</p>
                    </li>
                    <li className="flex items-center space-x-[10px] ">
                        <FaRegCircleCheck className="w-[18px] " />
                        <p className="text-p3">200 MB max. note size</p>
                    </li>
                    <li className="flex items-center space-x-[10px] ">
                        <FaRegCircleCheck className="w-[18px] " />
                        <p className="text-p3">Customize Home dashboard and access extra widgets</p>
                    </li>
                    <li className="flex items-center space-x-[10px] ">
                        <FaRegCircleCheck className="w-[18px] " />
                        <p className="text-p3">Connect primary Google Calendar account</p>
                    </li>
                    <li className="flex items-center space-x-[10px] ">
                        <FaRegCircleCheck className="w-[18px] " />
                        <p className="text-p3">Add due dates, reminders, and notifications to your tasks</p>
                    </li>
                </ul>
                {/* button */}
                <Button  padding="tight" variant="primary" >Get Started</Button>
            </div>
        </div>
    </div>
  );
}
