import { ArrowsInSimple, ArrowsOutSimple } from "phosphor-react";
import { useState } from "react";

export function FavsTemplates() {
  const [isFavTemplates, setIsFavTemplates] = useState(true);

  return (
    <div className="p-2">
      <span>Templates favoritos</span>
      <ul className="flex flex-col gap-3 w-fit mt-2">
        <li
          className="flex 
          items-center 
          flex-wrap  
          justify-around 
          bg-[#D9D9D9] 
          rounded-[15px] 
          p-3 
          w-[28rem]">
          <button className="text-base break-words">Lorem ipsum dolor sit amet consectetur</button>
          {isFavTemplates ? (
            <>
              <button
                onClick={() => {
                  setIsFavTemplates((prev) => !prev);
                }}>
                <ArrowsOutSimple size={16} color="#050505" weight="bold" />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  setIsFavTemplates((prev) => !prev);
                }}>
                <ArrowsInSimple size={16} color="#050505" weight="bold" />
              </button>
              <div className="border-t border-black pt-[0.125rem] w-full mt-4">
                <p className="break-words text-sm mt-[0.125rem]">Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </>
          )}
        </li>
      </ul>
    </div>
  );
}
