import { ArrowsInSimple, ArrowsOutSimple } from "phosphor-react";
import { useState } from "react";

export function FavoritesTemplates() {
  const [isFavTemplates, setIsFavTemplates] = useState(true);

  return (
    <>
      <div
        className="flex
          items-center
          justify-between
          flex-wrap
          p-2
          bg-[#D9D9D9]
          rounded-[15px]
          w-[67rem]">
        <button className="text-lg break-words">Lorem ipsum.</button>
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
      </div>
    </>
  );
}
