import { ReactNode } from 'react';

export interface CardProps {
    icon: ReactNode;
    text: string;
    link: string;
    linkText: string;
}

export interface CarouselProps {
    cards: CardProps[];
    quantidadePorVez: number;
}
