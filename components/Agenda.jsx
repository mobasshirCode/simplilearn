export default function Agenda() {
  return (
    <section className="md:pt-[60px] pt-[18px] md:pb-[95px] pb-[32px] md:px-[104px] px-[21px] bg-[#00FFFF]">
      <h2 className="md:text-[40px] text-[24px] font-black leading-[1.35em] text-[#1D4DF4] md:mb-[31px] mb-[24px]">
        Event Agenda
      </h2>

      {/* all 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[34px] gap-[15px]">
        <div className="bg-white rounded-[8px] md:p-[23px] p-[20px] shadow-xl">
          <h3 className="md:text-[24px] text-[19px] font-black leading-[1.35em] text-[#1D4DF4] mb-[4px]">
            Welcome & Opening
          </h3>
          <p className="md:text-[20px] text-[15px] font-bold leading-[1.5em] text-black mt-[95px]">
            Sudipto Mitra, CRO Simplilearn
            <br />
          </p>
          <p className="md:text-[20px] text-[15px] font-medium leading-[1.5em] text-black mt-[30px]">
            Why capability-building is now
            a board-level issue and what's changing in the workforce
            landscape.
          </p>
        </div>

        <div className="bg-white rounded-[8px] md:p-[22px] p-[20px] shadow-xl">
          <h3 className="md:text-[24px] text-[19px] font-black leading-[1.35em] text-[#1D4DF4] mb-[4px]">
            Keynote:
            <br />
            What Enterprise Leaders Are Seeing on the Ground
          </h3>
          <p className="md:text-[20px] text-[15px] font-bold leading-[1.364em] text-black mt-[30px]">
            Rob Lauber, Former CLO McDonald's
            <br />
          </p>
          <p className="md:text-[20px] text-[15px] leading-[1.364em] text-black mt-[30px]">
            A grounded view of how AI and AI agents are reshaping work,
            workflows, and leadership across industries.
          </p>
        </div>

        <div className="bg-white rounded-[8px] md:p-[32px] p-[20px] shadow-xl">
          <h3 className="md:text-[24px] text-[19px] font-black leading-[1.35em] text-[#1D4DF4] mb-[4px]">
            Lunch & Executive Conversation
          </h3>
          <p className="md:text-[20px] text-[15px] font-bold leading-[1.5em] text-black mt-[50px]">
            Industry Experts Invited
            <br />
          </p>
          <p className="md:text-[20px] text-[15px] font-medium leading-[1.5em] text-black mt-[30px]">
            What large enterprise talent ecosystems are learning about
            capability-building at scale.
          </p>
        </div>
      </div>
    </section>
  );
}
