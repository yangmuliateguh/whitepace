import { FaApple, FaWindows, FaAndroid, FaArrowRight } from "react-icons/fa6";
import Button from "../ui/button"

export default function freetrial() {
  return (
    <div className="bg-secondary w-full flex flex-col items-center px-[110px] pt-[140px] text-primary ">
      <div className="w-[500px] text-center space-y-[24px] mb-[40px] ">
        <h1 className="text-headerh1 font-bold">Try Whitepace today</h1>
        <p className="text-p1 flex flex-col">Get started for free. <span>Add your whole team as your needs grow.</span></p>
      </div>
      <div className="space-y-[40px] flex flex-col items-center ">
        <Button padding="normal" variant="accent" size="small" rightIcon={<FaArrowRight />}>Try Taskey free</Button>
        <p className="text-p1 ">On a big team? Contact sales</p>
        <ul className="flex flex-row space-x-[40px] ">
            <FaApple className="text-[60px]"/>
            <FaWindows className="text-[60px]"/>
            <FaAndroid className="text-[60px]"/>
        </ul>
      </div>
    </div>
  );
}
