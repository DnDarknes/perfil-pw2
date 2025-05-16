import React from 'react';

export function Foto({ src, alt }) {
  return <img src={src} alt={alt} className="w-32 h-32 rounded-full object-cover" />;
}