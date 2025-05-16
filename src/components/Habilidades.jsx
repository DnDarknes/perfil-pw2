import React from 'react';

export function Habilidades({ habilidades }) {
  return (
    <ul className="list-disc list-inside text-sm mt-2">
      {habilidades.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}