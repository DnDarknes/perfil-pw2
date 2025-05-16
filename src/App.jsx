import { Perfil } from "./components/Perfil";
import React from 'react';

const perfis = [
  {
    nome: "Bruno Dutra",
    foto: "https://iili.io/3XTOPTX.jpg",
    historico: "Estudante de Análise e Desenvolvimento de Sistemas, entusiasta de tecnologia, com foco em programação.",
    habilidades: ["TypeScript", "Node", "Docker"],
    telefone: "(83) 99124-1208"
  },
  {
    nome: "Maria Oliveira",
    foto: "https://i.ibb.co/sp9jtqsZ/Maria.jpg",
    historico: "UI/UX Designer apaixonada por acessibilidade.",
    habilidades: ["Figma", "Tailwind", "Design Systems"],
    telefone: "(11) 98888-5678"
  },
  {
    nome: "Carlos Pereira",
    foto: "https://i.ibb.co/jZrKjJy4/carlos.jpg",
    historico: "Especialista em DevOps e infraestrutura em nuvem.",
    habilidades: ["AWS", "Kubernetes", "Terraform"],
    telefone: "(11) 97777-4321"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-6 p-6">
      {perfis.map((perfil, index) => (
        <Perfil key={index} perfil={perfil} />
      ))}
    </div>
  );
}

export default App;