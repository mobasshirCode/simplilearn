import { submitEmail } from "@/app/actions/submitEmail";

export default function Intro() {
  return (
    <section className="md:px-[100px] px-[21px] md:pb-[100px] pb-[15px]">
      {/* main rsvp here */}
      <form action={submitEmail}
        className="flex flex-col md:flex-row md:gap-[23px] gap-[16px] items-start md:pt-[70px] pt-[32px] md:pb-[60px] pb-[29px]">
        <div className="flex-1 bg-[rgba(231,231,231,0.2)] border border-[rgba(0,0,0,0.29)] md:rounded-[8px] rounded-[3px] px-[24px] md:py-[27px] flex items-center md:gap-[23px] gap-[12px] max-w-full min-h-[45px] md:max-w-[606px] md:max-h-[81px]">
          <img
            src="/images/message.png"
            alt="mes icon"
            className="w-[23.79px] md:w-[33px]"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your work email to confirm your attendance"
            className="flex-1 bg-transparent md:text-[20px] text-[13px] font-normal leading-[1.35em] text-[rgba(0,0,0,0.7)] placeholder-[rgba(0,0,0,0.3)] outline-none w-[300px]"
          />
        </div>
        <button type="submit"
          className="min-w-[139px] min-h-[45px] md:max-w-[251px] md:max-h-[81px] bg-gradient-to-r from-[rgba(245,171,64,0.9)] to-[#F5AB40] md:rounded-[8px] rounded-[5px] md:px-[56px] md:py-[21px] md:text-[29px] text-[15px] font-bold leading-[1.35em] text-white whitespace-nowrap hover:cursor-pointer">
          RSVP Now
        </button>
      </form>

      {/* Extra fillers yaha */}
      <div className="max-w-[1240px] mx-auto">
        <p className="md:text-[27px] text-[15px] font-medium leading-[1.444em] md:mb-[50px] mb-[15px]">
          AI is accelerating change across every operational layer. Roles are
          shifting. Leadership models are collapsing and reforming. Frontline
          and mid-level managers will soon lead teams of people and intelligent
          agents.
          <br />
          <br />
          But even the most advanced enterprises are asking the same question:
        </p>
        <h2 className="md:text-[40px] text-[25px] font-black text-center max-w-[790px] mx-auto leading-[1.35em] md:mb-[61px] mb-[17px]">
          Which capabilities will matter most, and how do we build them at
          scale?
        </h2>
        <p className="md:text-[27px] text-[15px] font-medium leading-[1.444em]">
          This invite-only roundtable gathers CHROs, CLOs, and enterprise
          workforce leaders for a candid, senior-level discussion on what's
          coming next.
        </p>
      </div>
    </section>
  );
}
