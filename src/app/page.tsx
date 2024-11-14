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
            <div className="mx-auto px-4 flex items-center justify-center max-w-lg w-full">
                
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4 text-corCinza w-full">
                    <p className="text-lg font-semibold">{cards[cardAtual].text}</p>
                    <Link href={cards[cardAtual].link} passHref>
                        <button className="bg-corVerdeFolha text-white px-4 py-2 rounded-md hover:bg-corVerdeFolhaHover transition duration-300">
                            {cards[cardAtual].linkText}
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
