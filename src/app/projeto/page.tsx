import React from "react";

const Projeto = () => {
    return (
        <main className="relative min-h-screen bg-img-projeto bg-cover bg-center">
            <section className="flex items-center justify-center h-screen bg-black/40 text-white">
                <h1 className="text-6xl font-bold drop-shadow-md">
                    Sobre o Projeto
                </h1>
            </section>

            <section className="relative bg-white py-12 px-6 lg:px-32 text-gray-800 shadow-lg -mt-12 rounded-t-3xl">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-6">O que é o Echos?</h2>
                    <p className="mb-4 text-lg leading-relaxed">
                        O <strong>Echos</strong> é uma iniciativa voltada para
                        a conscientização ambiental. Criado para ajudar as
                        pessoas a entenderem e reduzirem o impacto ambiental de
                        suas atividades diárias, nosso objetivo é oferecer uma
                        ferramenta prática e educativa para calcular a pegada
                        de carbono gerada por atividades como transporte,
                        consumo de energia, viagens e uso de gás.
                    </p>
                    <h2 className="text-3xl font-semibold mt-10 mb-4">
                        Como Funciona?
                    </h2>
                    <p className="mb-4 text-lg leading-relaxed">
                        A calculadora de pegada de carbono permite que os
                        usuários insiram dados específicos sobre suas
                        atividades. Utilizando fatores de emissão confiáveis,
                        o sistema estima as emissões de gases de efeito estufa
                        e oferece uma análise detalhada e personalizada.
                    </p>
                    <p className="mb-4 text-lg leading-relaxed">
                        Além disso, o Echos disponibiliza informações educativas
                        sobre o que é a pegada de carbono e maneiras práticas de
                        reduzir as emissões, incentivando mudanças positivas nos
                        hábitos de indivíduos e organizações.
                    </p>
                    <h2 className="text-3xl font-semibold mt-10 mb-4">
                        Por que o Echos é Importante?
                    </h2>
                    <p className="text-lg leading-relaxed">
                        A conscientização é o primeiro passo para transformar
                        hábitos e promover um futuro mais sustentável. Ao
                        entender suas emissões, os usuários podem tomar
                        decisões mais conscientes e alinhadas com a preservação
                        do meio ambiente. O Echos oferece um caminho claro para
                        contribuir na luta contra as mudanças climáticas.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Projeto;
