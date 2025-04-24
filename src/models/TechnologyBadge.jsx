import React from 'react';

export const TechnologyBadge = ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      className="w-30 h-8 mx-2 my-2 transition-transform transform hover:scale-110 hover:shadow-lg"
    />
);