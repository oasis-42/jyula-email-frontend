import { ClipboardText, PaperPlaneRight, Plus, Star } from "phosphor-react";

export function Dashboard() {
  return (
    <>
      <article className="flex flex-col items-center justify-center gap-4 px-4 my-auto mx-0">
        <button className="w-[11.5rem] bg-[#D9D9D9] rounded-[15px] p-5 font-semibold">Nova campanha</button>
        <section className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <button
              className="w-[18.25rem] 
            bg-[#D9D9D9] 
            rounded-[15px] 
            p-5 flex 
            items-center 
            justify-around 
            font-bold">
              Templates
              <Plus size={16} color="#050505" weight="bold" />
            </button>
            <button
              className="w-[18.25rem] 
            bg-[#D9D9D9] 
            rounded-[15px] 
            p-5 flex 
            items-center 
            justify-around 
            font-bold">
              Grupos
              <Plus size={16} color="#050505" weight="bold" />
            </button>
            <button
              className="w-[18.25rem] 
            bg-[#D9D9D9] 
            rounded-[15px] 
            p-5 flex 
            items-center 
            justify-around 
            font-bold">
              Contatos frequentes
              <Plus size={16} color="#050505" weight="bold" />
            </button>
          </div>
          {/* ======== */}
          <div className="flex flex-col items-center justify-center gap-2">
            <button
              className="w-[18.25rem] 
            bg-[#D9D9D9] 
            rounded-[15px] 
            p-5 flex 
            items-center 
            justify-around 
            font-bold">
              Enviados
              <PaperPlaneRight size={16} color="#050505" weight="bold" />
            </button>
            <button
              className="w-[18.25rem] 
            bg-[#D9D9D9] 
            rounded-[15px] 
            p-5 flex 
            items-center 
            justify-around 
            font-bold">
              Favoritos
              <Star size={16} color="#050505" weight="fill" />
            </button>
            <button
              className="w-[18.25rem] 
            bg-[#D9D9D9] 
            rounded-[15px] 
            p-5 flex 
            items-center 
            justify-around 
            font-bold">
              Relatorios de envio
              <ClipboardText size={16} color="#050505" weight="bold" />
            </button>
          </div>
        </section>
      </article>
    </>
  );
}
