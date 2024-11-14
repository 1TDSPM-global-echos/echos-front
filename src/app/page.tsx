'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {

    const cards = [
        {
            text: "Você sabia que o ser humano médio consome 60kg de papel por ano?",
            link: "/calculadora",
            linkText: "Calcule seu consumo",
        }
    ];

    const [cardAtual, setcardAtual] = useState(0);

    return (
        <div className="bg-cover bg-center bg-no-repeat min-h-screen bg-[url('../assets/fundo-home.jpeg')] flex items-center justify-center">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4 text-corCinza max-w-lg w-full">
                    <p className="text-lg font-semibold">{cards[cardAtual].text}</p>
                    <Link href={cards[cardAtual].link} passHref>
                        <button className="bg-corVerdeFolha text-white px-4 py-2 rounded-md hover:bg-corVerdeFolhaHover transition duration-300">
                            {cards[cardAtual].linkText}
                        </button>
                    </Link>
                </div>

                <div className="bg-black bg-opacity-60 p-6 rounded-lg text-corCinzaClaro text-center md:text-left max-w-lg w-full flex flex-col justify-center">
                    <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Echos!</h1>
                    <p className="text-lg">
                        Nosso projeto busca conscientizar sobre o impacto ambiental dos hábitos diários e incentivar práticas mais sustentáveis.
                        Explore nossos recursos e descubra como você pode fazer a diferença!
                    </p>
                </div>

            </div>
        </div>
    );
}
