"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../assets/logo-sem-fundo.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#00000050] text-white shadow-lg fixed top-0 left-0 w-full z-10">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                
                <Link href="/" className="flex items-center">
                    <Image
                        src={Logo}
                        alt="GlobalSolution Logo"
                        width={80}
                        height={80}
                        className="mr-2"
                    />
                </Link>

                <button
                    className="md:hidden text-white focus:outline-none z-20"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                </button>

                {/* Links */}
                <div className={`md:flex md:space-x-8 ${isOpen ? 'flex flex-col items-center bg-black bg-opacity-90 absolute top-0 left-0 h-screen w-full pt-20' : 'hidden md:block'} transition-all duration-300`}>
                    <Link href="/sobre" className="linksnav py-2 md:py-0 hover:text-gray-400">
                        Sobre
                    </Link>
                    <Link href="/projetos" className="linksnav py-2 md:py-0 hover:text-gray-400">
                        Projetos
                    </Link>
                    <Link href="/calculadora" className="linksnav py-2 md:py-0 hover:text-gray-400">
                        Calculadora
                    </Link>
                    <Link href="/contato" className="linksnav py-2 md:py-0 hover:text-gray-400">
                        Contato
                    </Link>
                </div>
            </div>
        </nav>
    );
}
