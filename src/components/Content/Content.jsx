import { ArrowsOutSimple, ArrowsInSimple, Star } from "phosphor-react";
import { useState } from "react";

export function Content() {
  const [isLastTemplates, setIsLastTemplates] = useState(true);
  const [isFavTemplates, setIsFavTemplates] = useState(true);

  return (
    <>
      <article
        className="w-screen 
      h-min-screen 
      rounded-tl-[15px] 
      rounded-bl-[15px] 
      p-8 
      bg-[#FFFFFF] 
      shadow-2xl 
      flex
      justify-around">
        <section className="flex flex-col gap-6 p-1 min-w-[30rem] border">
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
                  <div className="border-t border-black pt-[0.125rem] w-full text-sm">
                    <p className="break-words">Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                </>
              )}
            </li>
          </ul>
        </section>
        <section className="flex flex-col items-start border gap-6 p-1 min-w-[30rem]">
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
        </section>
      </article>
    </>
  );
}
