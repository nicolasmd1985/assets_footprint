import React from 'react';

export const Button = ({ type, children, className }) => {
  return (
    <button
      type={type}
      className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
};
