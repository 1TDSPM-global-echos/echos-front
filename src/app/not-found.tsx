'use client';

import React from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
    const router = useRouter();

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-8">Página Não Encontrada</h2>
        </main>
    );
};

export default NotFound;
