'use client';

import { useState, useEffect } from 'react';
import { useApiDisponivel } from '@/context/ApiDisponivelContext';

export default function CalculadoraPage() {
    const { categorias } = useApiDisponivel();
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dados, setDados] = useState<{ [key: string]: number }>({});
    const [resultado, setResultado] = useState<string | null>(null);

    const etapas = ["Introdução", ...categorias.map((c) => c.nomeCateg), "Resultado"];

    useEffect(() => {
        const inicialDados = categorias.reduce((acc: { [key: string]: number }, categoria) => {
            acc[categoria.nomeCateg] = 0;
            return acc;
        }, {});
        setDados(inicialDados);
    }, [categorias]);

    const avancarEtapa = async () => {
        if (etapaAtual === etapas.length - 2) {
            try {
                const response = await fetch('http://localhost:8080/echos-java/api/calcular', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(
                        categorias.map((categoria) => ({
                            nomeCategoria: categoria.nomeCateg,
                            quantidade: dados[categoria.nomeCateg],
                        }))
                    ),
                });

                if (response.ok) {
                    const data = await response.json();
                    setResultado(data.pegadaTotal);
                } else {
                    console.error("Erro ao calcular a pegada de carbono.");
                }
            } catch (error) {
                console.error("Erro ao se conectar com a API:", error);
            }
        }
        if (etapaAtual < etapas.length - 1) {
            setEtapaAtual(etapaAtual + 1);
        }
    };

    const voltarEtapa = () => {
        if (etapaAtual > 0) {
            setEtapaAtual(etapaAtual - 1);
        }
    };

    const mudancaInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setDados((prevDados) => ({
            ...prevDados,
            [name]: parseFloat(value),
        }));
    };

    const renderEtapa = () => {
        if (etapaAtual === 0) {
            return (
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-corTurquesa mb-6">O que é pegada de carbono?</h2>
                    <p className="mb-6">
                        Use nossa calculadora para descobrir sua pegada de carbono. Informe os consumos nas categorias a seguir.
                    </p>
                    <button onClick={avancarEtapa} className="botao-secundario">
                        Iniciar Calculadora
                    </button>
                </div>
            );
        } else if (etapaAtual === etapas.length - 1) {
            return (
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-corTurquesa mb-6">Resultado</h2>
                    <p>Sua pegada de carbono estimada é: {resultado ? `${resultado} kg CO₂ por mês` : "Carregando..."}</p>
                    <button onClick={() => setEtapaAtual(0)} className="botao-secundario mt-4">Recomeçar</button>
                </div>
            );
        } else {
            const categoria = etapas[etapaAtual];
            const categoriaInfo = categorias.find((cat) => cat.nomeCateg === categoria);
            return (
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-corCinza mb-4">Consumo de {categoria}</h2>
                    <p className="text-sm text-gray-500 mb-4">{categoriaInfo?.descCateg || "Descreva seu consumo nesta categoria."}</p>
                    <input
                        type="number"
                        name={categoria}
                        placeholder={`Insira o consumo`}
                        value={dados[categoria] || ""}
                        onChange={mudancaInput}
                        className="w-full p-2 border border-gray-300 rounded-md mb-4"
                    />
                </div>
            );
        }
    };

    return (
        <main>
            <section className="bg-img-calc secao-img">
                <div className="w-full max-w-md sm:max-w-lg lg:max-w-3xl mx-auto bg-corCinzaClaro p-6 md:p-10 rounded-lg text-corCinza">
                    <div className="flex justify-between items-center mb-8 space-x-4 overflow-x-auto">
                        {etapas.map((etapa, index) => (
                            <div
                                key={index}
                                className={`flex-1 border-t-2 ${index <= etapaAtual ? 'border-corTurquesa' : 'border-gray-300'}`}
                            >
                                <span
                                    className={`block text-center text-sm ${index === etapaAtual ? 'text-corTurquesa font-semibold' : 'text-gray-400'}`}
                                >
                                    {etapa}
                                </span>
                            </div>
                        ))}
                    </div>

                    {renderEtapa()}

                    <div className="flex justify-between mt-8">
                        {etapaAtual > 0 && (
                            <button onClick={voltarEtapa} className="botao-secundario">
                                Voltar
                            </button>
                        )}
                        {(etapaAtual < etapas.length - 1 && etapaAtual > 0) && (
                            <button onClick={avancarEtapa} className="botao-secundario">
                                Próximo
                            </button>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
