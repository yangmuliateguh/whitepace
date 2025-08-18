import { FaRegCircleCheck } from "react-icons/fa6";

export default function pricing() {
  return (
    <div className="bg-primary w-full px-[220px] py-[140px] space-y-[60px] text-black ">
        {/* heading */}
        <div className="text-center flex flex-col items-center space-y-[24px] ">
            <h1 className="text-h ">Choose Your Plan</h1>
            <p className="w-[980px] text-p ">Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
        </div>
        {/* pricelist */}
        <div className="flex items-center space-x-[32px]">
            {/* price board */}
            <div className="bg-primary px-[44px] py-[40px] space-y-[25px] rounded-[10px] border-2 border-highlight">
                {/* text-block */}
                <div className="space-y-[25px] ">
                    <h5 className="text-[24px] font-bold ">Free</h5>
                    <h1 className="text-price font-bold">$0</h1>
                    <p className="text-p ">Capture ideas and find them quickly</p>
                </div>
                {/* bulletpoint */}
                <ul className="text-p space-y-[28px]">
                    <li className="flex items-center space-x-[19px] text-[18px]"><FaRegCircleCheck size={18} /><p>Sync unlimited devices</p></li>
                    <li className="flex items-center space-x-[19px] text-[18px]"><FaRegCircleCheck size={18} /><p>10 GB monthly uploads</p></li>
                    <li className="flex items-center space-x-[19px] text-[18px]"><FaRegCircleCheck size={18} /><p>200 MB max. note size</p></li>
                    <li className="flex items-center space-x-[19px] text-[18px]"><FaRegCircleCheck size={18} /><p>Customize Home dashboard and access extra widgets</p></li>
                    <li className="flex items-center space-x-[19px] text-[18px]"><FaRegCircleCheck size={18} /><p>Connect primary Google Calendar account</p></li>
                    <li className="flex items-center space-x-[19px] text-[18px]"><FaRegCircleCheck size={18} /><p>Add due dates, reminders, and notifications to your tasks</p></li>
                </ul>
                {/* button */}
                <button className="text-button ">Get Started</button>
            </div>
            {/* price board */}
            <div className="bg-secondary text-primary px-[44px] py-[80px] space-y-[25px] rounded-[10px] border-2">
                {/* text-block */}
                <div className="space-y-[25px] ">
                    <h5 className="text-[24px] font-bold ">Personal</h5>
                    <h1 className="text-price font-bold text-highlight">$11.99</h1>
                    <p className="text-p ">Keep home and family on track</p>
                </div>
                {/* bulletpoint */}
                <div className="">
                    <ul className="text-p  space-y-[28px]">
                        <li className="flex items-center space-x-[19px] text-[18px]"><FaRegCircleCheck size={18} className="text-highlight" /><p>Sync unlimited devices</p></li>
                        <li className="flex items-center space-x-[19px] text-[18px]"><FaRegCircleCheck size={18} className="text-highlight" /><p>10 GB monthly uploads</p></li>
                        <li className="flex items-center space-x-[19px] text-[18px]"><FaRegCircleCheck size={18} className="text-highlight" /><p>200 MB max. note size</p></li>
                        <li className="flex items-center space-x-[19px] text-[18px]"><FaRegCircleCheck size={18} className="text-highlight" /><p>Customize Home dashboard and access extra widgets</p></li>
                        <li className="flex items-center space-x-[19px] text-[18px]"><FaRegCircleCheck size={18} className="text-highlight" /><p>Connect primary Google Calendar account</p></li>
                        <li className="flex items-center space-x-[19px] text-[18px]"><FaRegCircleCheck size={18} className="text-highlight" /><p>Add due dates, reminders, and notifications to your tasks</p></li>
                    </ul>
                </div>
                {/* button */}
                <button className="text-button ">Get Started</button>
            </div>
            {/* price board */}
            <div className="bg-primary px-[44px] py-[40px] space-y-[25px] rounded-[10px] border-2 border-highlight">
                {/* text-block */}
                <div className="space-y-[25px] ">
                    <h5 className="text-[24px] font-bold ">Organization</h5>
                    <h1 className="text-price font-bold">$49.99</h1>
                    <p className="text-p ">Capture ideas and find them quickly</p>
                </div>
                {/* bulletpoint */}
                <div className="">
                    <ul className="text-p  space-y-[28px]">
                        <li className="flex items-center space-x-[19px] text-[18px]"><FaRegCircleCheck size={18} /><p>Sync unlimited devices</p></li>
                        <li className="flex items-center space-x-[19px] text-[18px]"><FaRegCircleCheck size={18} /><p>10 GB monthly uploads</p></li>
                        <li className="flex items-center space-x-[19px] text-[18px]"><FaRegCircleCheck size={18} /><p>200 MB max. note size</p></li>
                        <li className="flex items-center space-x-[19px] text-[18px]"><FaRegCircleCheck size={18} /><p>Customize Home dashboard and access extra widgets</p></li>
                        <li className="flex items-center space-x-[19px] text-[18px]"><FaRegCircleCheck size={18} /><p>Connect primary Google Calendar account</p></li>
                        <li className="flex items-center space-x-[19px] text-[18px]"><FaRegCircleCheck size={18} /><p>Add due dates, reminders, and notifications to your tasks</p></li>
                    </ul>
                </div>
                {/* button */}
                <button className="text-button ">Get Started</button>
            </div>
        </div>
    </div>
  );
}
