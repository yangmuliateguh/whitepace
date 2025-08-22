import { FaRegCircleCheck } from "react-icons/fa6"
import Yourplan from "@/public/img/your-plan.png"
import Image from "next/image";
import Button from "../ui/button"
import Card from "../ui/card"

export default function pricing() {
    const freePlan ={
        title : "Free",
        price : "0",
        priceColor : "black",
        description : "Capture ideas and find them quickly",
        features : [
            "Sync unlimited devices",
            "10 GB monthly uploads",
            "200 MB max. note size",
            "Customize Home dashboard and access extra widgets",
            "Connect primary Google Calendar account",
            "Add due dates, reminders, and notifications to your tasks"
        ],
        buttonVariant : "primary",
        textSize : "sm",
        variant : "primary",
        padding : "short"
    }

    const personalPlan ={
        title : "Personal",
        price : "11.99",
        priceColor : "highlight",
        description : "Keep home and family on track",
        features : [
            "Sync unlimited devices",
            "10 GB monthly uploads",
            "200 MB max. note size",
            "Customize Home dashboard and access extra widgets",
            "Connect primary Google Calendar account",
            "Add due dates, reminders, and notifications to your tasks"
        ],
        buttonVariant : "accent",
        textSize : "md",
        variant : "secondary",
        padding : "tall"
    }

    const organizationPlan ={
        title : "Organization",
        price : "49.99",
        priceColor : "black",
        description : "Capture ideas and find them quickly",
        features : [
            "Sync unlimited devices",
            "10 GB monthly uploads",
            "200 MB max. note size",
            "Customize Home dashboard and access extra widgets",
            "Connect primary Google Calendar account",
            "Add due dates, reminders, and notifications to your tasks"
        ],
        buttonVariant : "primary",
        textSize : "sm",
        variant : "primary",
        padding : "short"
    }
  return (
    <div className="bg-primary w-full px-[16px] py-[80px] space-y-[60px] text-black">
        {/* heading */}
        <div className="text-center flex flex-col items-center space-y-[24px] ">
            <h1 className="text-headerh4 font-bold relative inline-block">Choose 
                <span className="relative z-10"> Your Plan</span>
                <Image 
                    src={Yourplan} 
                    width={289}
                    priority
                    alt="project management" 
                    className="absolute top-0 left-0 z-0"
                />
            </h1>
            <p className="w-[980px] text-p2 ">Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
        </div>
        {/* pricelist */}
        <div className="flex items-center space-x-[32px] ">
            {/* price board */}
            <Card {...freePlan} />
            {/* price board */}
            <Card {...personalPlan} />
            {/* price board */}
            <Card {...organizationPlan} />
        </div>
    </div>
  );
}
