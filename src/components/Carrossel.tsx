'use client'
import { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Card from './Card';
import { CarouselProps } from '../types/types';

export default function Carrossel({ cards, quantidadePorVez }: CarouselProps) {
    const [indiceAtual, setIndiceAtual] = useState<number>(0);

    const totalPaginas = Math.ceil(cards.length / quantidadePorVez);

    const proximaPagina = () => {
        setIndiceAtual((prev) => (prev + 1) % totalPaginas);
    };

    const paginaAnterior = () => {
        setIndiceAtual((prev) => (prev - 1 + totalPaginas) % totalPaginas);
    };

    const cardsVisiveis = cards.slice(
        indiceAtual * quantidadePorVez,
        indiceAtual * quantidadePorVez + quantidadePorVez
    );

    return (
        <div className="flex flex-col items-center">
            <div className="flex space-x-4 overflow-hidden">
                {cardsVisiveis.map((card, index) => (
                    <Card
                        key={index}
                        icon={card.icon}
                        text={card.text}
                        link={card.link}
                        linkText={card.linkText}
                    />
                ))}
            </div>

            <div className="mt-4 flex space-x-4">
                <button onClick={paginaAnterior} className="nav-btn">
                    <FaArrowLeft size={24} />
                </button>
                <button onClick={proximaPagina} className="nav-btn">
                    <FaArrowRight size={24} />
                </button>
            </div>
        </div>
    );
}
