'use client';

import { useState, useEffect } from 'react';
import { useApiDisponivel } from '@/context/ApiDisponivelContext';

export default function CalculadoraPage() {
    const { categorias } = useApiDisponivel();
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dados, setDados] = useState<{ [key: string]: number }>({});
    const [resultado, setResultado] = useState<string | null>(null);

    const etapas = ["Introdução", ...categorias.map((c) => c.nome), "Resultado"];

    useEffect(() => {
        const inicialDados = categorias.reduce((acc: { [key: string]: number }, categoria) => {
            acc[categoria.nome] = 0;
            return acc;
        }, {});
        setDados(inicialDados);
    }, [categorias]);

    const avancarEtapa = async () => {
        if (etapaAtual === etapas.length - 2) {
            const totalLocal = categorias.reduce((total, categoria) => {
                const fatorSimulado = 2;
                return total + dados[categoria.nome] * fatorSimulado;
            }, 0);
            setResultado(totalLocal.toFixed(2));
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
                    <p className="mb-6">Use nossa calculadora para descobrir sua pegada de carbono.</p>
                    <button onClick={avancarEtapa} className="botao-secundario">
                        Iniciar Calculadora
                    </button>
                </div>
            );
        } else if (etapaAtual === etapas.length - 1) {
            return (
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-corTurquesa mb-6">Resultado</h2>
                    <p>Sua pegada de carbono estimada é: {resultado} kg CO₂ por mês</p>
                    <button onClick={() => setEtapaAtual(0)} className="botao-secundario mt-4">Recomeçar</button>
                </div>
            );
        } else {
            const categoria = etapas[etapaAtual];
            return (
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-corCinza mb-4">Consumo de {categoria}</h2>
                    <input
                        type="number"
                        name={categoria}
                        placeholder={`Consumo de ${categoria}`}
                        value={dados[categoria]}
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
