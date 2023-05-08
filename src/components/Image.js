import React from 'react';

export default function Image({ imageUrl, alt }) {
  return <img src={imageUrl} width="300px" alt={`${alt} image`} />;
}
