import { ArrowsInSimple, Star } from "phosphor-react";

export function Content() {
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
        <section className="flex flex-col gap-6">
          <span>Últimos templates utilizados</span>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center p-4 bg-[#D9D9D9] rounded-[15px] gap-4">
              <button>Lorem ipsum dolor sit amet consectetur</button>
              <button>
                <Star size={16} color="#050505" weight="bold" />
              </button>
              <details className="list-none cursor-pointer">
                <summary></summary>
                <p>Ola</p>
              </details>
            </li>
            <li className="flex items-center p-4 bg-[#D9D9D9] rounded-[15px] gap-4">
              <button>Lorem ipsum dolor sit amet consectetur</button>
              <button>
                <Star size={16} color="#050505" weight="bold" />
              </button>
              <button>
                <ArrowsInSimple size={16} color="#050505" weight="bold" />
              </button>
            </li>
          </ul>
        </section>
        <section>
          <span>Templates favoritos</span>
        </section>
      </article>
    </>
  );
}
