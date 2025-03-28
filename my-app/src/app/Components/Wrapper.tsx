import React, { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
  className?: string;  // Para permitir clases personalizadas si se necesita
}

const Wrapper: React.FC<WrapperProps> = ({ children, className = '' }) => {
  return (
    <section className={`container mx-auto px-4 py-6 lg:px-32      ${className}`}>
      <div className="flex flex-col">
        {children}
      </div>
    </section>
  );
};

export default Wrapper;