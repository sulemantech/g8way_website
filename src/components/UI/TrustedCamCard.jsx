export default function TrustedCompCard({NumberText,Image , Text}) {
  return (
    <div className="min-w-[240px] min-h-[149.55px] max-md:min-w-[96%] max-md:min-h-fit rounded-[25px] border border-[#86868B33] flex flex-col items-center justify-between space-y-2 p-4 max-md:flex-row max-md:justify-start space-x-4 max-md:mx-[4%]">
      <p className="text-[#10E0D7] text-[24px] leading-[24px] tracking-[0%] text-center font-normal w-fit md:hidden">{NumberText}</p>
      <div className="flex flex-col items-center justify-center space-y-2 max-md:flex-row-reverse min-w-[90%] max-md:items-start max-md:justify-between max-md:px-2">
      <img className="min-w-[34px] min-h-[34px]" src={Image} alt="" />
      <p className="text-[#86868b] text-[16px] text-center font-normal w-[187.2px] max-md:text-left">{Text}</p>
      </div>
    </div>
  );
}
