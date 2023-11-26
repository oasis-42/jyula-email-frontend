import React, { useState } from "react";
import { FavoritesTemplates } from "../components/favoritesTemplates/favoritesTemplates";
import { LastTemplates } from "../components/lastTemplates/lastTemplates";

export default function CreateCampaign() {
  const [actualTemplate, setActualTemplate] = useState("Last");
  return (
    <>
      <article className="flex flex-col gap-1 p-[0.125rem] h-screen">
        <div className="flex p-2 gap-6">
          <button className="text-base font-bold " onClick={() => setActualTemplate("Last")}>
            Últimos templates utilizados
          </button>
          <button className="text-base font-bold" onClick={() => setActualTemplate("Favorites")}>
            Templates favoritos
          </button>
        </div>

        <section
          className="
        flex
        items-center
        justify-center
        p-[0.125rem]
        flex-col
        gap-2">
          {actualTemplate === "Last" ? <LastTemplates /> : <FavoritesTemplates />}
        </section>
      </article>
    </>
  );
}
