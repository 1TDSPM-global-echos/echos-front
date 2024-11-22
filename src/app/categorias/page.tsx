"use client";

import Link from "next/link";
import { useApiDisponivel } from "@/context/ApiDisponivelContext";

export default function CategoriasPage() {
    const { categorias } = useApiDisponivel();

    return (
        <main>
            <section className="secao-img bg-img-categorias relative">
                <h1 className="text-4xl font-bold text-center mb-8 text-white drop-shadow-lg">
                    Categorias de Atividades
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-10">
                    {categorias.map((categoria) => (
                        <Link
                            key={categoria.idCateg}
                            href={`/categorias/${categoria.idCateg}`}
                            className="relative bg-white bg-opacity-80 rounded-xl p-6 shadow-lg hover:shadow-2xl transition hover:bg-opacity-90 border border-gray-300 hover:border-gray-500"
                        >
                            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">{categoria.nomeCateg}</h2>
                            <p className="text-gray-600 text-sm text-center">
                                {categoria.descCateg}
                            </p>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
