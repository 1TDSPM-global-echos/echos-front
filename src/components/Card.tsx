import Link from 'next/link';
import { CardProps } from '../types/types';

export default function Card({ icon: Icon, text, link, linkText }: CardProps) {
    return (
        <div className="card-style">
            <div className="flex items-center space-x-2">
                <span>
                    <Icon size={40}/>
                </span>
                <p className="text-lg font-semibold text-center md:text-left">{text}</p>
            </div>
            <Link href={link} passHref>
                <button className="botao-principal">{linkText}</button>
            </Link>
        </div>
    );
}
