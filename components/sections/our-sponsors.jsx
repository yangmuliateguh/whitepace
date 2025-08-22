import Image from "next/image"
import Appleimg from "@/public/img/Apple.png"
import Msimg from "@/public/img/Microsoft.png"
import Slackimg from "@/public/img/Slack.png"
import Googleimg from "@/public/img/Google.png"
import Sponsorsimg from "@/public/img/sponsors.png"

export default function oursponsors() {
  return (
    <div className="bg-primary text-center w-full px-[16px] py-[80px] space-y-[100px] text-black ">
        <h1 className="text-headerh4 font-bold relative inline-block">Our 
          <span className="relative z-10"> sponsors</span>
          <Image 
              src={Sponsorsimg} 
              width={270}
              priority
              alt="project management" 
              className="absolute top-0 left-0 z-0"
          />
        </h1>
        <ul className="flex flex-col items-center space-y-[100px]">
            <li>
              <Image 
                src={Appleimg} 
                width={55}
                priority
                alt="Hero image" 
                className="drop-shadow-lg"
              />
            </li>
            <li>
              <Image 
                src={Msimg} 
                width={257}
                priority
                alt="Hero image" 
                className="drop-shadow-lg"
              />
            </li>
            <li>
              <Image 
                src={Slackimg} 
                width={250}
                priority
                alt="Hero image" 
                className="drop-shadow-lg"
              />
            </li>
            <li>
              <Image 
                src={Googleimg} 
                width={181}
                priority
                alt="Hero image" 
                className="drop-shadow-lg"
              />
            </li>
        </ul>
    </div>
  );
}
