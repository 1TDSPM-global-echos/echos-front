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
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                </button>

                <div className={`md:flex space-x-8 ${isOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}>
                    <Link href="/sobre" className="text-lg font-medium transition duration-300">
                        Sobre
                    </Link>
                    <Link href="/projetos" className="text-lg font-medium transition duration-300">
                        Projetos
                    </Link>
                    <Link href="/calculadora" className="text-lg font-medium transition duration-300">
                        Calculadora
                    </Link>
                    <Link href="/contato" className="text-lg font-medium transition duration-300">
                        Contato
                    </Link>
                </div>
            </div>
        </nav>
    );
}
