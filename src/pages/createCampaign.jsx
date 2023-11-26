import React from "react";
import { FavoritesTemplates } from "../components/favoritesTemplates/favoritesTemplates";
import { LastTemplates } from "../components/lastTemplates/lastTemplates";

function CreateCampaign() {
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
          <FavoritesTemplates />
        </section>
      </article>
    </>
  );
}

export default CreateCampaign;
