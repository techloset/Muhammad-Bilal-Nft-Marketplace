import React, { useMemo } from "react";
import TrendCard from "../../../components/trendingCard/TrendCard";
import Loader from "../../../components/loader/Loader";
import { useAppSelector } from "../../../store/store";

export default function TrendingData() {
  const { data: collections, isLoading } = useAppSelector(
    (state) => state.collections
  );

  const randomNumber = useMemo(
    () => Math.random() * (collections?.length - 3),
    [collections?.length]
  );

  if (isLoading || !collections) {
    return <Loader />;
  }

  return (
    <div className="w-full h-[718px] sm:h-[716px] ls:h-[836px] px-[30px] sm:pt-[40px] sm:pb-[80px] sm:px-[40px] ls:px-[110px] flex flex-col justify-center items-center py-[40px] ls:py-[80px] gap-[40px] ls:gap-[60px] bg-[#2B2B2B]">
      <div className="w-full h-[93px] sm:h-[71px] ls:h-[91px] flex flex-col gap-[10px] md:px-[15px] sm:px-0 ls:px-0 lg:px-0">
        <div className=" text-[28px] ls:text-[38px] font-semibold font-work-sans leading-[39.2px] ls:leading-[45.6px]">
          Trending Collection
        </div>
        <div className=" text-[16px] ls:text-[22px] font-normal font-work-sans leading-[22.4px] ls:leading-[35.2px]">
          Checkout our weekly updated trending collection.
        </div>
      </div>
      <div className="w-full h-[505px] sm:h-[525px] ls:h-[525px] flex items-center justify-center gap-[30px]">
        {collections.slice(randomNumber, randomNumber + 3).map((data, i) => (
          <TrendCard
            key={i}
            item={data}
            view={
              i === 0 ? "" : i === 1 ? "hidden md:block" : "hidden ls:block"
            }
          />
        ))}
      </div>
    </div>
  );
}
