import React from "react";
import { Link } from "react-router-dom";
import { BrowseCardProps } from "../../types/Types";

const BrowseCard: React.FC<BrowseCardProps> = ({ item }) => {
  return (
    <Link to={`/collection/${item.collection}`}>
      <div className="flex flex-col w-[147.5px] h-[209px] md:w-[150px] sm:w-[165px] sm:h-[209px] ls:w-[243px] xl:w-80 ls:h-[316px] rounded-[20px] bg-[#3B3B3B]">
        <div className="w-[147.5px] h-[142px] md:w-[150px] sm:w-[165px] sm:h-[142px] ls:w-[243px] ls:h-[240px] xl:w-80 rounded-tl-[20px] rounded-tr-[20px]">
          <img
            className="relative w-[147.5px] h-[142px] md:w-[150px] sm:w-[165px] sm:h-[142px] ls:w-[243px] ls:h-[240px] xl:w-80 rounded-tl-[20px] rounded-tr-[20px] object-cover"
            src={item.image_url}
            alt={item.collection.slice(0, 10)}
          />
        </div>
        <div className="w-[147.5px] h-[67px] md:w-[150px] sm:w-[165px] sm:h-[67px] ls:w-[243px] ls:h-[76px] xl:w-80 bg-[#3B3B3B] rounded-bl-[20px] rounded-br-[20px] pt-[20px] pb-[25px] px-[20px] sm:pt-[20px] sm:pb-[25px] sm:px-[20px] ls:pt-[20px] ls:pb-[25px] ls:px-[30px] gap-[25px]">
          <div className=" sm:text-[16px] ls:text-[22px] font-semibold font-work-sans sm:leading-[22.4px] lg:leading-[30.80px] justify-start">
            {item.name.slice(0, 8)}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BrowseCard;
