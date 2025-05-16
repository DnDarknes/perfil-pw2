import { Foto } from "./Foto";
import { Nome } from "./Nome";
import { Historico } from "./Historico";
import { Habilidades } from "./Habilidades";
import { Telefone } from "./Telefone";
import React from 'react';

export function Perfil({ perfil }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg w-80">
      <Foto src={perfil.foto} alt={perfil.nome} />
      <Nome>{perfil.nome}</Nome>
      <Historico>{perfil.historico}</Historico>
      <Habilidades habilidades={perfil.habilidades} />
      <Telefone numero={perfil.telefone} />
    </div>
  );
}