"use client";

import { useEffect, useState } from "react";
import { useApiDisponivel } from "@/context/ApiDisponivelContext";
import { useParams } from "next/navigation";
import { Categoria } from "@/types/types";

export default function CategoriaDetalhePage() {
    const { id }: { id: string } = useParams();
    const { categorias } = useApiDisponivel();
    const [categoria, setCategoria] = useState<Categoria | null>(null);

    useEffect(() => {
        const categoriaEncontrada = categorias.find((cat) => cat.id === parseInt(id, 10));
        setCategoria(categoriaEncontrada ?? null);
    }, [id, categorias]);

    if (!categoria) {
        return <p className="text-center mt-10">Carregando detalhes...</p>;
    }

    return (
        <main>
            <section className="secao-img bg-img-categoriaid relative">
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 text-center text-white px-6 py-12">
                    <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">{categoria.nome}</h1>
                    <p className="text-lg drop-shadow-md mb-6">{categoria.descricao}</p>
                    <p className="text-lg drop-shadow-md">
                        <strong>Impacto Global:</strong> {categoria.impactoGlobal}
                    </p>
                </div>
            </section>
            <section className="max-w-screen-md mx-auto py-10 px-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Dicas para Reduzir o Impacto</h2>
                <ul className="list-disc pl-5 space-y-3">
                    {categoria.dicas.map((dica, index) => (
                        <li key={index} className="text-gray-700">{dica}</li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
