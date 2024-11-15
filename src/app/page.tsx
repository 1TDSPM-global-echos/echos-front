'use client'

import Carrossel from '@/components/Carrossel';
import { cards } from '@/data/cards';
import Destaques from '@/components/Destaques';
import SecaoCalculadora from '@/components/SecaoCalculadora';

export default function Home() {
    return (
        <main> 
            <section className="bg-img-home flex items-center justify-center px-4 sm:px-8 md:px-16 pt-20">
                <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-32 items-center w-full max-w-screen-lg">
                    
                    <Carrossel cards={cards} quantidadePorVez={1} />

                    <div className="dark-overlay text-center md:text-left max-w-lg w-full flex flex-col justify-center items-center md:items-start">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Bem-vindo ao Echos!</h1>
                        <p className="text-base md:text-lg">
                            Nosso projeto busca conscientizar sobre o impacto ambiental dos hábitos diários e incentivar práticas mais sustentáveis.
                            Explore nossos recursos e descubra como você pode fazer a diferença!
                        </p>
                    </div>
                </div>
            </section>

            <Destaques />

            <SecaoCalculadora />
        </main>
    );
}
