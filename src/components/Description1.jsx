import React from "react";

const Description1 = () => {
  return (
    <div className="relative">
      {/* Fondo con desenfoque y colores */}
      <div className="bg-blur opacity-75 absolute inset-0 z-0"></div>
      <p className="relative z-10 rounded-xl border border-black/10 shadow-inner shadow-white/10 col-span-4 text-p text-lg md:text-xl lg:text-xl xl:text-1xl 2xl:text-2xl p-4">
        "Mushishi" es un anime y manga que se sumerge en un mundo misterioso y
        contemplativo, donde criaturas llamadas "Mushi" interactúan con los
        seres humanos y la naturaleza de formas sorprendentes. El protagonista,
        Ginko, es un experto en Mushi que viaja para resolver los problemas
        causados por estas entidades primordiales. La serie explora temas de
        coexistencia entre la humanidad y la naturaleza, mientras presenta
        historias independientes llenas de maravilla, poesía y reflexión.
        "Mushishi" es conocido por su narración tranquila y visualmente
        impresionante, ofreciendo una experiencia única y reflexiva para los
        amantes del anime.
      </p>
    </div>
  );
};

export default Description1;
