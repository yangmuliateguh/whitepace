import { FaArrowRight } from "react-icons/fa6";

export default function yourdata() {
  return (
    <div className="bg-primary w-full px-[220px] py-[140px] text-black border-2">
        {/* content */}
        <div className="border-2">
          <div className="space-y-[24px]">
            <h1 className="text-[72px] font-semibold ">100% your data</h1>
            <p className="text-[18px] ">The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.</p>
          </div>
          <button className="bg-accent flex items-center py-[16px] px-[24px] mt-[40px] rounded-[10px] text-[18px] text-primary">
            <p className="mr-[10px]">Read more</p> <FaArrowRight />
          </button>
        </div>
        {/* img */}
        <div className="border-2">
            <img src="#" alt="" />
        </div>
    </div>
  );
}
