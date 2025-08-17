import Hero from "../components/sections/hero"
import Work from "../components/sections/work-management"
import Custom from "../components/sections/customise"
import Price from "../components/sections/pricing"
import Yourwork from "../components/sections/your-work"
import Yourdata from "../components/sections/your-data"
import Sponsor from "../components/sections/our-sponsors"
import Apps from "../components/sections/apps"
import Testimonial from "../components/sections/testimonial"
import Freetrial from "../components/sections/free-trial"

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Work/>
      <Custom/>
      <Price/>
      <Yourwork/>
      <Yourdata/>
      <Sponsor/>
      <Apps/>
      <Testimonial/>
      <Freetrial/>
    </div>
  );
}
