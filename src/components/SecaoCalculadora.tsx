import Link from 'next/link';

export default function SecaoCalculadora() {
    return (
        <section className="bg-corTurquesa text-white py-40 px-6">
            <div className="max-w-screen-lg mx-auto text-center space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold">Conheça Nossa Calculadora de Pegada de Carbono</h2>
                <p className="text-lg md:text-xl max-w-3xl mx-auto">
                    A nossa calculadora permite que você descubra o impacto ambiental das suas atividades diárias. Entenda como seus hábitos afetam o meio ambiente e obtenha sugestões para reduzir sua pegada de carbono.
                    Faça parte da mudança para um futuro mais sustentável!
                </p>
                <Link href="/calculadora" className="inline-block bg-white text-corTurquesa font-semibold px-8 py-3 rounded-md hover:bg-gray-200 transition duration-300">
                    Acessar a Calculadora
                </Link>
            </div>
        </section>
    );
}
