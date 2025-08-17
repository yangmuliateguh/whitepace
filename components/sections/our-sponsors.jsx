import Image from "next/image"
import Appleimg from "@/public/img/Apple.png"
import Msimg from "@/public/img/Microsoft.png"
import Slackimg from "@/public/img/Slack.png"
import Googleimg from "@/public/img/Google.png"

export default function oursponsors() {
  return (
    <div className="bg-primary text-center w-full px-[220px] py-[140px] text-black border-2">
        <h1 className="text-[72px] font-semibold ">Our sponsors</h1>
        <ul className="border-2">
            <li>
              <Image 
                src={Appleimg} 
                width={824}
                height={549}
                priority
                alt="Hero image" 
                className="drop-shadow-lg"
              />
            </li>
            <li>
              <Image 
                src={Msimg} 
                width={824}
                height={549}
                priority
                alt="Hero image" 
                className="drop-shadow-lg"
              />
            </li>
            <li>
              <Image 
                src={Slackimg} 
                width={824}
                height={549}
                priority
                alt="Hero image" 
                className="drop-shadow-lg"
              />
            </li>
            <li>
              <Image 
                src={Googleimg} 
                width={824}
                height={549}
                priority
                alt="Hero image" 
                className="drop-shadow-lg"
              />
            </li>
        </ul>
    </div>
  );
}
