import { submitEmail } from "@/app/actions/submitEmail";
import Image from "next/image";

export default function Takeaway() {
  return (
    <section className="px-[20px] md:pl-[100px] pt-[25px] md:pt-[100px] md:pb-[60px] pb-[25px]">
      <div className="flex flex-col-reverse md:flex-row gap-[40px] md:gap-[80px] items-start">
        <div className="flex-1">
          <h2 className="text-[24px] md:text-[38px] font-black text-[#F5AB40] mb-[30px] md:mb-[50px] leading-[1.35em]">
            Go behind the curtain with real examples and high-scale insights
          </h2>

          {/* all the points */}
          <h3 className="text-[17px] md:text-[25px] font-medium mb-[25px] md:mb-[37px]">
            You'll walk away with:
          </h3>

          {[
            "A clear view of the leadership & workforce capabilities that will matter most over the next 24–36 months.",
            "Insights from high-scale operating environments including the former CLO of McDonald's on what truly scales and what breaks under pressure.",
            "Signals for where capability gaps may already be forming in your organization.",
            "Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale.",
            "Actionable insights you can take straight into your next exec meeting.",
          ].map((item) => (
            <div key={item} className="flex items-start mb-[24px] md:mb-[40px]">
              <div className="w-[3px] h-[48px] md:h-[59px] bg-[#F5AB40] mr-[16px] md:mr-[20px]" />
              <p className="text-[15px] md:text-[20px] font-medium leading-[1.5em]">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* chess img */}
        <div className="w-full md:w-[570px] h-[260px] md:h-[611px] relative flex-shrink-0">
          <Image
            src="/images/side-image-2eee79.png"
            alt="Insights"
            fill
            className="object-contain md:object-cover md:pr-0 pr-20 "
          />
        </div>
      </div>

      {/* RSVP copy paste from before */}
      <form action={submitEmail}
        className="flex flex-col md:flex-row gap-[16px] md:gap-[23px] md:items-start md:pt-[40px] pt-[25px]">
        <div className="flex-1 bg-[rgba(231,231,231,0.2)] border border-[rgba(0,0,0,0.29)] md:rounded-[8px] rounded-[3px] px-[24px] md:py-[27px] flex items-center gap-[16px] max-w-full md:max-w-[606px] min-w-[139px] min-h-[45px] md:max-w-[251px] md:max-h-[81px]">
          <img
            src="/images/message.png"
            alt=""
            className="w-[24px] md:w-[33px]"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your work email to confirm your attendance"
            className="flex-1 bg-transparent text-[13px] md:text-[20px] outline-none"
          />
        </div>

        <button type="submit"
          className="max-w-[139px] min-h-[45px] md:max-w-[251px] md:max-h-[81px] bg-gradient-to-r from-[rgba(245,171,64,0.9)] to-[#F5AB40] md:rounded-[8px] rounded-[5px] md:px-[56px] md:py-[21px] md:text-[29px] text-[15px] font-bold leading-[1.35em] text-white whitespace-nowrap hover:cursor-pointer">
          RSVP Now
        </button>
      </form>
    </section>
  );
}
