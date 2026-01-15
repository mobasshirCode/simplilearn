export default function Explore() {
  return (
    <div className="relative w-full md:pt-[43px] pt-[22px] md:pb-[52px] pb-[40px] bg-[rgba(205,220,251,0.5)]">
      <div className="relative z-10 md:pl-[103px] md:pr-[97px] mx-[21px]">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="md:text-[40px] text-[24px] font-black leading-[1.35em] text-[#F5AB40] mb-[26px]">
            What We'll Explore
          </h2>

          <p className="md:text-[25px] text-[15px] font-medium leading-[1.35em] text-black mb-[40px]">
            The critical shifts every enterprise must plan for:
          </p>

          {/* all 6 cards here */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[28px] gap-[16px]">
            <div className="bg-white rounded-[8px] md:p-[26px] p-[16px] shadow-xl">
              <div className="flex items-center mb-[24px] gap-[8px]">
                <div className="md:w-[36px] w-[26px] flex items-center justify-center flex-shrink-0">
                  <img src="/images/icon1.png" alt="" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-bold leading-[1.25em] text-black">
                  Skills Decay
                </h3>
              </div>
              <p className="text-[16px] md:text-[22px] font-medium leading-[1.364em] text-black">
                every 2-3 years
                <br />
                faster for technical skills
              </p>
            </div>

            <div className="bg-white rounded-[8px] md:p-[26px] p-[16px] shadow-xl">
              <div className="flex items-center mb-[24px] gap-[8px]">
                <div className="md:w-[36px] w-[26px] flex items-center justify-center flex-shrink-0">
                  <img src="/images/icon2.png" alt="" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-bold leading-[1.25em] text-black">
                  Manager Role Shift
                </h3>
              </div>
              <p className="text-[16px] md:text-[22px] font-medium leading-[1.364em] text-black">
                orchestrating
                <br />
                people + AI agents
              </p>
            </div>

            <div className="bg-white rounded-[8px] md:p-[26px] p-[16px] shadow-xl">
              <div className="flex items-center mb-[24px] gap-[8px]">
                <div className="md:w-[36px] w-[26px] flex items-center justify-center flex-shrink-0">
                  <img src="/images/icon3.png" alt="" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-bold leading-[1.25em] text-black">
                  Leaders + AI Co-Pilots
                </h3>
              </div>
              <p className="text-[16px] md:text-[22px] font-medium leading-[1.364em] text-black">
                requires sensemaking
                <br />
                and systems thinking
              </p>
            </div>

            <div className="bg-white rounded-[8px] md:p-[26px] p-[16px] shadow-xl">
              <div className="flex items-center mb-[24px] gap-[8px]">
                <div className="md:w-[36px] w-[26px] flex items-center justify-center flex-shrink-0">
                  <img src="/images/icon4.png" alt="" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-bold leading-[1.25em] text-black">
                  Frontline Capability
                </h3>
              </div>
              <p className="text-[16px] md:text-[22px] font-medium leading-[1.364em] text-black">
                now depends
                <br />
                on digital fluency
              </p>
            </div>

            <div className="bg-white rounded-[8px] md:p-[26px] p-[16px] shadow-xl">
              <div className="flex items-center mb-[24px] gap-[8px]">
                <div className="md:w-[36px] w-[26px] flex items-center justify-center flex-shrink-0">
                  <img src="/images/icon5.png" alt="" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-bold leading-[1.25em] text-black">
                  Core Human Capabilities
                </h3>
              </div>
              <p className="text-[16px] md:text-[22px] font-medium leading-[1.364em] text-black">
                analytical reasoning
                <br />
                and scenario planning
              </p>
            </div>

            <div className="bg-white rounded-[8px] md:p-[26px] p-[16px] shadow-xl">
              <div className="flex items-center mb-[24px] gap-[8px]">
                <div className="md:w-[36px] w-[26px] flex items-center justify-center flex-shrink-0">
                  <img src="/images/icon6.png" alt="" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-bold leading-[1.25em] text-black">
                  Winning Organizations
                </h3>
              </div>
              <p className="text-[16px] md:text-[22px] font-medium leading-[1.364em] text-black">
                predict skills
                <br />
                ahead of demand
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
