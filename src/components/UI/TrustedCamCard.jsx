export default function TrustedCompCard({Image , Text}) {
  return (
    <div className="max-w-[240px] max-h-[149.55px] rounded-[25px] border border-[#86868B33] flex flex-col items-center justify-between space-y-2 p-4">
      <img src={Image} alt="" />
      <p className="text-[#86868b] text-[16px] text-center font-normal w-[169.32px]">{Text}</p>
    </div>
  );
}
