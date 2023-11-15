import { ArrowsInSimple, ArrowsOutSimple } from "phosphor-react";
import { useState } from "react";

export function FavsTemplates() {
  const [isFavTemplates, setIsFavTemplates] = useState(true);

  return (
    <div className="border">
      <span>Templates favoritos</span>
      <ul className="flex flex-col gap-3">
        <li
          className="flex
            flex-wrap 
            items-center  
            justify-between
            p-4 
            bg-[#D9D9D9] 
            rounded-[15px] 
            gap-4
            max-w-[23.75rem]">
          <button className="text-base">Lorem ipsum dolor sit amet consectetur</button>
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
              <div className="border-t border-black pt-[0.125rem] w-full text-sm">
                <p className="break-words">Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </>
          )}
        </li>
      </ul>
    </div>
  );
}
