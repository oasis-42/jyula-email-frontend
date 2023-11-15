import { LastTemplates } from "./components/LastTemplates";
import { FavsTemplates } from "./components/FavsTemplates";

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
        <section className="flex p-1 w-full border justify-around">
          <LastTemplates />
          <FavsTemplates />
        </section>
      </article>
    </>
  );
}
