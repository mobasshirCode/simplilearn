import Image from "next/image";

export default function Speakers() {
  return (
    <section className=" bg-gradient-to-b from-[#1D4DF4] to-[#112D8E]  max-w-[1440px] pb-[50px] md:pb-[67px]">
      <div className="relative z-10 md:px-[100px] px-[21px]">
        <h2 className="text-[24px] md:text-[40px] font-black leading-[1.35em] text-[#F5AB40] md:mb-[52px] mb-[24px] pt-[24px] md:pt-[44px]">
          Featured Speakers
        </h2>

        {/* Place for all three speakers */}
        <div className="flex flex-col md:flex-row md:gap-[54px] md:mb-[52px] mb-[10px] items-center md:items-start">
          <div className="md:w-[340px] w-[190px] md:h-[325px] h-[181.66px] rounded-[8px] overflow-hidden flex-shrink-0 relative">
            <Image
              src="/images/speaker-rob-lauber-5172ed.png"
              alt="Rob Lauber"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="flex-1 text-center md:text-start">
            <h3 className="md:text-[30px] text-[22px] font-black leading-[1.35em] text-[#00FFFF] mb-[2px]">
              Rob Lauber
            </h3>
            <p className="md:text-[24px] text-[15px] font-medium leading-[1.458em] text-white max-w-[821px] md:mb-0 mb-[24px]">
              Rob Lauber is a global workforce and capability-building leader
              with over 25 years of experience helping organizations prepare
              leaders and frontline teams for change. Most recently, he served
              as SVP and Chief Learning Officer at McDonald's, leading learning
              and development across 37,000+ restaurants worldwide. His
              perspective is especially relevant as organizations rethink
              leadership and capability models in the age of AI.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:gap-[54px] md:mb-[52px] mb-[10px] items-center md:items-start">
          <div className="md:w-[340px] w-[190px] md:h-[325px] h-[181.66px] rounded-[8px] overflow-hidden flex-shrink-0 relative">
            <Image
              src="/images/speaker-krishna-kumar.png"
              alt="Krishna Kumar"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="flex-1 text-center md:text-start">
            <h3 className="md:text-[30px] text-[22px] font-black leading-[1.35em] text-[#00FFFF] mb-[2px]">
              Krishna Kumar
            </h3>
            <p className="md:text-[24px] text-[15px] font-medium leading-[1.458em] text-white max-w-[818px] md:mb-0 mb-[24px]">
              Krishna Kumar is the Founder and CEO of Simplilearn, working
              closely with enterprises navigating workforce transformation
              driven by AI and digital change. At the center of the learning and
              skills ecosystem, he brings a unique perspective on how roles,
              leadership expectations, and capabilities are evolving across
              industries. Through direct engagement with enterprise leaders and
              education partners, he sees what scales, and what doesn't, in
              building workforce readiness for the AI era, offering a
              cross-enterprise view of the priorities shaping workforce strategy
              today.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:gap-[54px] md:mb-[52px] mb-[10px] items-center md:items-start">
          <div className="md:w-[340px] w-[190px] md:h-[325px] h-[181.66px] rounded-[8px] overflow-hidden flex-shrink-0 relative">
            <Image
              src="/images/speaker-sudipto-mitra-5172ed.png"
              alt="Sudipto Mitra"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="flex-1 text-center md:text-start">
            <h3 className="md:text-[30px] text-[22px] font-black leading-[1.35em] text-[#00FFFF] mb-[2px]">
              Sudipto Mitra
            </h3>
            <p className="md:text-[24px] text-[15px] font-medium leading-[1.458em] text-white max-w-[818px] md:mb-0 mb-[24px]">
              Sudipto Mitra is a senior transformation and growth leader with
              over 20 years of experience helping enterprises navigate
              large-scale change across technology, operations, and talent. As
              Chief Revenue Officer at Simplilearn, he works with executive
              teams to address workforce capability gaps as AI reshapes roles
              and operating models. He previously held leadership roles at
              Accenture, IBM Consulting, and WorkFusion.
            </p>
          </div>
        </div>

        {/* last wala info wiht diff background */}
        <div className="relative rounded-[8px] overflow-hidden max-w-[1240px]">
          <Image
            src="/images/additional-experts-bg.png"
            alt="Additional Experts Background"
            fill
            className="object-cover"
            unoptimized 
          />
          <div className="relative inset-0 md:py-[36px] md:px-[86px] px-[19px] py-[19px] not-even:">
            <h3 className="md:text-[30px] text-[20px] font-black leading-[1.35em] text-[#00FFFF] mb-[7px]">
              Additional Expert Perspectives
            </h3>
            <p className="md:text-[24px] text-[15px] font-medium leading-[1.458em] text-white max-w-[1046px]">
              Invited experts from leading consulting and enterprise learning
              organizations will contribute short perspectives, offering insight
              into how large organizations are evolving skills and leadership
              models in the AI era.
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
