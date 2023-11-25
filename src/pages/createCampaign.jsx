import React from "react";
import { FavoritesTemplates } from "../components/favoritesTemplates/favoritesTemplates";
import { LastTemplates } from "../components/lastTemplates/lastTemplates";

export default function CreateCampaign() {
  return (
    <>
      <article
        className="w-fit
        h-full
        rounded-tl-[15px]
        rounded-bl-[15px]
        p-8
        bg-[#FFFFFF]
        shadow-2xl
        flex
        justify-center
        border
        my-0
        mx-auto">
        <section className="flex p-1 gap-4 border justify-around">
          <LastTemplates />
          <FavoritesTemplates />
        </section>
      </article>
    </>
  );
}
