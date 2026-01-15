import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="relative w-full md:h-[693px] h-[580px] overflow-hidden">
        <div className="absolute inset-0 ">
          <Image
            src="/images/hero-banner.png"
            alt="Hero Background"
            fill
            className="object-cover "
            priority
          />
        </div>

        <div className="relative z-10 md:pt-[55px] md:pl-[93px] pt-[28px] pl-[18px]">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={280}
            height={86}
            className="w-[150px] h-[46px] md:w-[280px] md:h-[86px] "
          />
        </div>

        {/* baki ka written content */}
        <div className="relative z-10 md:pl-[100px] pl-[20px] md:pr-[100px] md:pt-[66px] pt-[33px]">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:mb-[24px] mb-[10.6px] inline-block bg-[#00FFFF] rounded-[6px] py-[6px] md:py-[11px] px-[13px] md:px-[20px] md:w-[174px] md:h-[56px] w-[110px] h-[35.4px]">
              <span className="text-[16px] md:text-[25px] font-bold text-[#25286A]">
                Invite-Only
              </span>
            </div>

            <p className="text-[20px] md:text-[24px] font-bold text-[#00FFFF] mb-[7px] md:mb-[19px] md:px-3 w-[195px] md:w-[500px]">
              An Executive Roundtable • Lunch
            </p>
          </div>

          <h1 className="text-[32px] md:text-[46px] font-bold text-[#F5AB40] md:max-w-[771px] max-w-[300px] leading-[1.35em]">
            The Skills That Matter Next:
            <br />
          </h1>
          <h1 className="text-[32px] md:text-[46px] text-[#F5AB40] md:max-w-[561px] max-w-[330px] leading-[1.35em]">
            Preparing Your Workforce & Leaders for the AI Era
          </h1>
          <div className="flex flex-col gap-[19px] md:pt-[44px] pt-[39px]">
            <div className="flex items-center md:gap-[25px] gap-[9px]">
              <img
                src="/images/Calender.png"
                alt="calndr icon"
                className="w-[18px] md:w-[24px]"
              />
              <p className="md:text-[30px] text-[18px] leading-[1.35em] text-white">
                February 20, 2026
              </p>
            </div>
            <div className="flex items-center md:gap-[25px] gap-[9px]">
              <img
                src="/images/Location.png"
                alt="gps icon"
                className="w-[18px] md:w-[24px]"
              />
              <p className="md:text-[30px] text-[18px]  leading-[1.35em] text-white">
                Chamberlain's Steak & Fish House, Dallas
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
