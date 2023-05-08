import React from 'react';
import Image from './Image.js';

export default function Browser({ name, logo, description }) {
  return (
    <>
      <h1>{name}</h1>
      <Image imageUrl={logo} alt={name} />
      <p>{description}</p>
    </>
  );
}
