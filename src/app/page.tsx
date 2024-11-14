'use client'
import { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { cards } from '@/data/cards';

export default function Home() {

    const [cardAtual, setcardAtual] = useState(0);

    const proximoCard = () => {
        setcardAtual((prev) => (prev + 1) % cards.length);
    };

    const cardAnterior = () => {
        setcardAtual((prev) => (prev - 1 + cards.length) % cards.length);
    };

    return (
        <div className="bg-cover bg-center bg-no-repeat min-h-screen bg-[url('../assets/fundo-home.jpeg')] flex items-center justify-center">
            <div className="mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-32 items-start">
                
                <div className="flex flex-col items-center max-w-lg w-full">
                    <div className="card-style">
                        <div className="flex items-center space-x-2">
                            {cards[cardAtual].icon}
                            <p className="text-lg font-semibold">{cards[cardAtual].text}</p>
                        </div>
                        <Link href={cards[cardAtual].link} passHref>
                            <button className="botao-principal">
                                {cards[cardAtual].linkText}
                            </button>
                        </Link>
                    </div>
                    <div className="mt-4 flex space-x-4">
                        <button onClick={cardAnterior} className="nav-btn">
                            <FaArrowLeft size={24} />
                        </button>
                        <button onClick={proximoCard} className="nav-btn">
                            <FaArrowRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="dark-overlay text-center md:text-left max-w-lg w-full flex flex-col justify-center items-center md:items-start">
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
