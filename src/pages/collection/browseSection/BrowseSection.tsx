import React, { useMemo } from "react";
import BrowseCard from "../../../components/browseCard/BrowseCard";
import { useAppSelector } from "../../../store/store";
import Loader from "../../../components/loader/Loader";

export default function BrowseData() {
  const { data: collections, isLoading } = useAppSelector(
    (state) => state.collections
  );

  const randomNumber = useMemo(
    () => Math.random() * (collections?.length - 8),
    [collections?.length]
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full h-[1084px] md:h-[629px] sm:h-[629px] ls:h-[928px] flex flex-col items-center px-0 py-[40px] sm:px-[40px] ls:px-[100px] ls:py-[80px] gap-[40px] ls:gap-[60px] bg-[#2B2B2B]">
      <div className="w-full h-[46px] sm:h-[39px] ls:h-[46px] flex px-7 md:px-[60px] sm:px-0 lg:px-0 ls:px-0 justify-start">
        <div className="  text-[28px] ls:text-[38px] font-work-sans font-semibold">
          Browse Categories
        </div>
      </div>
      <div className="w-full h-[918px] md:h-[470px] sm:h-[470px] lg:h-[662px] flex flex-wrap items-center justify-center gap-[20px] sm:gap-[30px]">
        {collections.slice(randomNumber, randomNumber + 8).map((data, i) => (
          <BrowseCard key={i} item={data} />
        ))}
      </div>
    </div>
  );
}
