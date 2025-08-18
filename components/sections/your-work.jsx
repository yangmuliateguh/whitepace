import { FaArrowRight } from "react-icons/fa6";
import Button from "../ui/button"

export default function yourwork() {
  return (
    <div className="bg-secondary w-full flex flex-col items-center px-[220px] py-[140px] text-primary border-2">
      <div className="w-[1050px] space-y-[24px] text-center">
        <h1 className="text-[72px] font-semibold ">Your work, everywhere you are</h1>
        <p className="text-[18px] ">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
      </div>
      <Button className="mt-[60px]" padding="normal" variant="accent" rightIcon={<FaArrowRight />}>Try Taskey</Button>
    </div>
  );
}
