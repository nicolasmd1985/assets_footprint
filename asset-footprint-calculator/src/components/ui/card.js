import React from 'react';

export const Card = ({ children, className }) => {
  return <div className={`bg-white shadow-md rounded-md ${className}`}>{children}</div>;
};

export const CardHeader = ({ children }) => {
  return <div className="p-4 border-b">{children}</div>;
};

export const CardTitle = ({ children }) => {
  return <h2 className="text-xl font-bold">{children}</h2>;
};

export const CardContent = ({ children }) => {
  return <div className="p-4">{children}</div>;
};
