export default function TrustedCompCard({ NumberText, Image, Text }) {
  return (
    <div className="min-w-[240px] min-h-[149.55px] rounded-[25px] border border-[#86868B33] flex flex-col items-center justify-between space-y-2 max-md:space-y-0 max-md:bg-gradient-to-b from-white/5 to-transparent p-4 max-md:gap-4

      max-md:min-w-[100%] max-md:max-h-[64px] max-md:min-h-fit max-md:rounded-[12px] max-md:flex-row max-md:justify-start max-md:space-x-2 max-md:mx-[4%] space-x-4">

      <p className="text-[#10E0D7]  text-[24px] leading-[24px] tracking-[0%] text-center font-normal w-[27px] h-[24px] md:hidden">
        {NumberText}
      </p>

      <div className="flex flex-col items-center justify-center space-y-2  
        max-md:flex-row-reverse max-md:justify-between max-md:space-y-0 max-md:gap-4">
        <div className="min-w-[34px] min-h-[34px]  max-w-[34px] max-h-[34px]  md:min-w-[53px] md:min-h-[53px] md:max-w-[53px] md:max-h-[53px] flex justify-center items-center">
          <img className="min-h-[28px] min-w-[28px] object-cover" src={Image} alt="" />
        </div>

        <p className="text-[#86868b] font-inter text-[16px] text-center font-normal w-[187.2px] min-h-[70.55px] flex flex-col justify-end  
          max-md:text-left max-md:hidden">
          {Text.split("/n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>

        <p className="text-[#F0F0F0] md:hidden font-roboto  text-[16px] text-left font-normal min-w-[58.67vw] max-w-[58.67vw] min-h-fit ">
          {Text.replace(/\/n/g, " ")}
        </p>

      </div>
    </div>
  );
}
