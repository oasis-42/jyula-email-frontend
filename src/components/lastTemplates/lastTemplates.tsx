import { ArrowsInSimple, ArrowsOutSimple, Star } from "phosphor-react";
import { useState } from "react";

export function LastTemplates() {
  const [isLastTemplates, setIsLastTemplates] = useState(true);

  return (
    <>
      <div
        className="
  flex
  items-center
  justify-between
  flex-wrap
  p-2
  w-[67rem]
  rounded-[15px]
  bg-[#D9D9D9]">
        <button className="text-lg break-words">Lorem ipsum dolor sit amet consectetur.</button>
        <button>
          <Star color="#050505" weight="bold" />
        </button>
        {isLastTemplates ? (
          <>
            <button onClick={() => setIsLastTemplates((prev) => !prev)}>
              <ArrowsOutSimple color="#050505" weight="bold" />
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setIsLastTemplates((prev) => !prev)}>
              <ArrowsInSimple color="#050505" weight="bold" />
            </button>
            <p className="text-base break-words border-t border-black pt-[0.125rem] w-full mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </>
        )}
      </div>
    </>
  );
}
