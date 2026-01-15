import { submitEmail } from "@/app/actions/submitEmail";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative md:h-[475px] h-[317px]">
      <Image
        src="/images/footer-background.png"
        alt=""
        fill
        className="object-cover"
      />

      <div className="absolute pt-[19px] md:pt-[46px] left-0 right-0 md:px-[104px] px-[26px] z-20">
        <div className="max-w-[1240px] mx-auto">
          <p className="md:text-[30px] text-[19px] font-black leading-[1.35em] text-white md:mb-[37px] mb-[20px]">
            Space is limited.
          </p>

          <form action={submitEmail}
            className="flex flex-col md:flex-row md:gap-[23px] gap-[16px]  md:pb-[60px] pb-[29px]">
            <div className="flex-1 bg-[rgba(231,231,231,0.9)] border border-[rgba(0,0,0,0.29)] md:rounded-[8px] rounded-[3px] px-[24px] md:py-[27px] flex items-center md:gap-[23px] gap-[12px] max-w-full min-h-[45px] md:max-w-[606px] md:max-h-[81px]">
              <img
                src="/images/message.png"
                alt=""
                className="w-[23.79px] md:w-[33px]"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your work email to confirm your attendance"
                className="flex-1 bg-transparent md:text-[20px] text-[13px] font-normal leading-[1.35em] text-[rgba(0,0,0,0.8)] placeholder-[rgba(0,0,0,0.6)] outline-none w-[300px]"
              />
            </div>
            <button type="submit"
              className="max-w-[139px] min-h-[45px] md:max-w-[251px] md:max-h-[81px] bg-gradient-to-r from-[rgba(245,171,64,0.9)] to-[#F5AB40] md:rounded-[8px] rounded-[5px] md:px-[56px] md:py-[21px] md:text-[29px] text-[15px] font-bold leading-[1.35em] text-white whitespace-nowrap hover:cursor-pointer">
              RSVP Now
            </button>
          </form>
        </div>
      </div>
      <div className="absolute md:bottom-20 bottom-10 left-0 w-full flex flex-col md:flex-row md:items-center justify-around md:px-8 px-[26px]">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={280}
          height={86}
          className="w-[150px] md:w-[280px]"
        />
        <p className="md:text-[20px] text-[13px] text-white">
          &copy; 2009-2025 - Simplilearn Solutions. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
