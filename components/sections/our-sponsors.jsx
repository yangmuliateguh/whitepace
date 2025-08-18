import Image from "next/image"
import Appleimg from "@/public/img/Apple.png"
import Msimg from "@/public/img/Microsoft.png"
import Slackimg from "@/public/img/Slack.png"
import Googleimg from "@/public/img/Google.png"

export default function oursponsors() {
  return (
    <div className="bg-primary text-center w-full px-[220px] py-[140px] space-y-[100px] text-black ">
        <h1 className="text-[72px] font-semibold ">Our sponsors</h1>
        <ul className=" flex items-center justify-between">
            <li>
              <Image 
                src={Appleimg} 
                width={55.47}
                height={68}
                priority
                alt="Hero image" 
                className="drop-shadow-lg"
              />
            </li>
            <li>
              <Image 
                src={Msimg} 
                width={287}
                height={62}
                priority
                alt="Hero image" 
                className="drop-shadow-lg"
              />
            </li>
            <li>
              <Image 
                src={Slackimg} 
                width={280}
                height={71}
                priority
                alt="Hero image" 
                className="drop-shadow-lg"
              />
            </li>
            <li>
              <Image 
                src={Googleimg} 
                width={211}
                height={69.81}
                priority
                alt="Hero image" 
                className="drop-shadow-lg"
              />
            </li>
        </ul>
    </div>
  );
}
