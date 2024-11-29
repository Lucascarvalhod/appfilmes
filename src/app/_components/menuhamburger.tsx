'use client'


import React, { useState } from 
'react';
import { FaBars, FaTimes } from 'react-icons/fa'
;
import Link from 'next/link';

export const Menu: React.FC = () => {
  
    const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className="text-2xl cursor-pointer p-4 block md:hidden"
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      {isOpen && (
        <div className="absolute top-0 left-0 bg-white border border-gray-300 p-4 flex flex-col z-10 opacity-100 transform-none animate-slideIn">
          <FaTimes className="self-start size-6 cursor-pointer" onClick={toggleMenu} />
          <Link href="/">Home</Link>
          <Link href="/about">Sobre</Link>
          <Link href="/contato">Contato</Link>
        </div>
      )}
    </div>
  );
};
