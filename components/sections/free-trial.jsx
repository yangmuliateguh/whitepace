import { FaApple, FaWindows, FaAndroid, FaArrowRight } from "react-icons/fa6";
import Button from "../ui/button"

export default function freetrial() {
  return (
    <div className="bg-secondary w-full flex flex-col items-center px-[16px] py-[100px] space-y-[40px] text-primary text-center">
      <div className="space-y-[24px]">
        <h1 className="text-headerh4 font-bold">Try Whitepace today</h1>
        <p className="text-p2 flex flex-col">Get started for free. <span>Add your whole team as your needs grow.</span></p>
      </div>
      <div className="space-y-[40px] flex flex-col items-center ">
        <Button padding="normal" variant="accent" size="small" rightIcon={<FaArrowRight />}>Try Taskey free</Button>
        <p className="text-p2 ">On a big team? Contact sales</p>
        <ul className="flex flex-row space-x-[40px] ">
            <FaApple className="text-[60px]"/>
            <FaWindows className="text-[60px]"/>
            <FaAndroid className="text-[60px]"/>
        </ul>
      </div>
    </div>
  );
}
