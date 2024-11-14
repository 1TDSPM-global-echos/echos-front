'use client'
import { useState } from 'react';
import { FaLeaf, FaWater, FaLightbulb, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {

    const cards = [
        {
            icon: <FaLeaf size={40} className="text-corVerdeFolha" />,
            text: "Você sabia que o ser humano médio consome 60kg de papel por ano?",
            link: "/calculadora",
            linkText: "Calcule seu consumo",
        },
        {
            icon: <FaWater size={40} className="text-corPrimaria" />,
            text: "Cada pessoa utiliza em média 150 litros de água por dia. Qual o seu impacto?",
            link: "/calculadora",
            linkText: "Calcule seu uso de água",
        },
        {
            icon: <FaLightbulb size={40} className="text-yellow-500" />,
            text: "Lâmpadas incandescentes consomem 75% mais energia que as de LED. Descubra como economizar!",
            link: "/projetos",
            linkText: "Veja Projetos Sustentáveis",
        },
    ];

    const [cardAtual, setcardAtual] = useState(0);

    const proximoCard = () => {
        setcardAtual((prev) => (prev + 1) % cards.length);
    };

    const cardAnterior = () => {
        setcardAtual((prev) => (prev - 1 + cards.length) % cards.length);
    };

    return (
        <div className="bg-cover bg-center bg-no-repeat min-h-screen bg-[url('../assets/fundo-home.jpeg')] flex items-center justify-center">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                
                <div className="flex flex-col items-center max-w-lg w-full">
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4 text-corCinza w-full">
                        <div className="flex items-center space-x-2">
                            {cards[cardAtual].icon}
                            <p className="text-lg font-semibold">{cards[cardAtual].text}</p>
                        </div>
                        <Link href={cards[cardAtual].link} passHref>
                            <button className="bg-corVerdeFolha text-white px-4 py-2 rounded-md hover:bg-corVerdeFolhaHover transition duration-300">
                                {cards[cardAtual].linkText}
                            </button>
                        </Link>
                    </div>
                    <div className="mt-4 flex space-x-4">
                        <button onClick={cardAnterior} className="text-corCinza hover:text-corPrimaria transition duration-300 bg-white p-2 rounded-full">
                            <FaArrowLeft size={24} />
                        </button>
                        <button onClick={proximoCard} className="text-corCinza hover:text-corPrimaria transition duration-300 bg-white p-2 rounded-full">
                            <FaArrowRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="text-corCinzaClaro text-center md:text-left bg-black bg-opacity-60 p-6 rounded-lg flex flex-col justify-center items-center md:items-start max-w-lg w-full">
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
