'use client';

import React from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
    const router = useRouter();

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-8">Página Não Encontrada</h2>
            <p className="text-lg text-gray-300 mb-8 text-center px-4 max-w-2xl">
                A página que você está procurando não existe ou foi movida. 
                Verifique o endereço e tente novamente. Se achar que isso é um erro, entre em contato conosco.
            </p>
            
            <button
                onClick={() => router.push("/")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg font-medium transition transform hover:scale-105"
            >
                Voltar para a Página Inicial
            </button>
        </main>
    );
};

export default NotFound;
