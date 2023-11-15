import { ArrowsInSimple, ArrowsOutSimple, Star } from "phosphor-react";
import { useState } from "react";

export function LastTemplates() {
  const [isLastTemplates, setIsLastTemplates] = useState(true);

  return (
    <div className="border">
      <span>Últimos templates utilizados</span>
      <ul className="flex flex-col gap-3">
        <li
          className="flex
            flex-wrap 
            items-center  
            justify-around
            p-4 
            bg-[#D9D9D9] 
            rounded-[15px] 
            gap-4 
            w-full">
          <button className="text-base">Lorem ipsum dolor sit amet consectetur</button>
          <button>
            <Star size={16} color="#050505" weight="bold" />
          </button>
          {isLastTemplates ? (
            <>
              <button
                onClick={() => {
                  setIsLastTemplates((prev) => !prev);
                }}>
                <ArrowsOutSimple size={16} color="#050505" weight="bold" />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  setIsLastTemplates((prev) => !prev);
                }}>
                <ArrowsInSimple size={16} color="#050505" weight="bold" />
              </button>
              <div className="border-t border-black pt-[0.125rem] w-full text-sm flex">
                <p className="break-words">Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </>
          )}
        </li>
      </ul>
    </div>
  );
}
