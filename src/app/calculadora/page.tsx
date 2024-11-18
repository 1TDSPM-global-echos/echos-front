'use client';

import { useState } from 'react';

export default function CalculadoraPage() {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dados, setDados] = useState({
        eletricidade: 0,
        gas: 0,
        transporte: 0,
        viagensAereas: 0,
    });
    const [resultado, setResultado] = useState<string | null>(null);

    const etapas = [
        "Introdução",
        "Eletricidade",
        "Gás",
        "Transporte",
        "Viagens Aéreas",
        "Resultado"
    ];

    const avancarEtapa = async () => {
        if (etapaAtual === etapas.length - 2) {
            const enviar = Object.keys(dados).map((key) => ({
                nomeCategoria: key.charAt(0).toUpperCase() + key.slice(1),
                quantidade: dados[key as keyof typeof dados],
            }));

            const res = await fetch('http://localhost:8080/echos-java/api/resultados/calcular', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(enviar),
            });

            const data = await res.json();
            setResultado(data.pegadaTotal);
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
        switch (etapaAtual) {
            case 0:
                return (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-corTurquesa mb-6">
                            O que é pegada de carbono?
                        </h2>
                        <p className="mb-6">
                            Atividades do dia a dia emitem gases que causam mudanças climáticas. Use nossa calculadora para descobrir sua pegada de carbono.
                        </p>
                        <button
                            onClick={avancarEtapa}
                            className="botao-secundario"
                        >
                            Iniciar Calculadora
                        </button>
                    </div>
                );
            case 1:
                return (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-corCinza mb-4">Consumo de Eletricidade</h2>
                        <input
                            type="number"
                            name="eletricidade"
                            placeholder="Consumo mensal (kWh)"
                            value={dados.eletricidade}
                            onChange={mudancaInput}
                            className="w-full p-2 border border-gray-300 rounded-md mb-4"
                        />
                    </div>
                );
            case 2:
                return (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-corCinza mb-4">Consumo de Gás</h2>
                        <input
                            type="number"
                            name="gas"
                            placeholder="Consumo mensal (m³)"
                            value={dados.gas}
                            onChange={mudancaInput}
                            className="w-full p-2 border border-gray-300 rounded-md mb-4"
                        />
                    </div>
                );
            case 3:
                return (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-corCinza mb-4">Transporte</h2>
                        <input
                            type="number"
                            name="transporte"
                            placeholder="Km rodados por mês"
                            value={dados.transporte}
                            onChange={mudancaInput}
                            className="w-full p-2 border border-gray-300 rounded-md mb-4"
                        />
                    </div>
                );
            case 4:
                return (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-corCinza mb-4">Viagens Aéreas</h2>
                        <input
                            type="number"
                            name="viagensAereas"
                            placeholder="Km voados por ano"
                            value={dados.viagensAereas}
                            onChange={mudancaInput}
                            className="w-full p-2 border border-gray-300 rounded-md mb-4"
                        />
                    </div>
                );
            case 5:
                return (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-corTurquesa mb-6">Resultado</h2>
                        <p>Sua pegada de carbono estimada é: {resultado} kg CO₂ por mês</p>
                        <button onClick={() => setEtapaAtual(0)} className="botao-secundario mt-4">Recomeçar</button>
                    </div>
                );
            default:
                return null;
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
                                className={`flex-1 border-t-2 ${index <= etapaAtual ? 'border-corTurquesa' : 'border-gray-300'
                                    }`}
                            >
                                <span
                                    className={`block text-center text-sm ${index === etapaAtual ? 'text-corTurquesa font-semibold' : 'text-gray-400'
                                        }`}
                                >
                                    {etapa}
                                </span>
                            </div>
                        ))}
                    </div>

                    {renderEtapa()}

                    <div className="flex justify-between mt-8">
                        {etapaAtual > 0 && (
                            <button
                                onClick={voltarEtapa}
                                className="botao-secundario"
                            >
                                Voltar
                            </button>
                        )}
                        {(etapaAtual < etapas.length - 1 && etapaAtual > 0) && (
                            <button
                                onClick={avancarEtapa}
                                className="botao-secundario"
                            >
                                Próximo
                            </button>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
