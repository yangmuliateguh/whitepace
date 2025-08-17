import { FaApple, FaWindows, FaAndroid } from "react-icons/fa6";

export default function freetrial() {
  return (
    <div className="bg-secondary w-full px-[220px] py-[140px] text-primary border-2">
        <h1 className="text-h border-2">Try Whitepace today</h1>
        <p className="text-button border-2">Get started for free. Add your whole team as your needs grow.</p>
        <button className="text-button border-2">Try Taskey free<img src="#" alt="" /></button>
        <p className="text-button border-2">On a big team? Contact sales</p>
        <ul className="border-2">
            <FaApple />
            <FaWindows />
            <FaAndroid />
        </ul>
    </div>
  );
}
