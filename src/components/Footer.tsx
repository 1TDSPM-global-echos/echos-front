import { itensMenu, redesSociais } from '@/data/itensMenu';

export default function Footer() {
    return (
        <footer className="bg-corCinza text-corCinzaClaro py-8 border-t border-gray-700">
            <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-2xl font-bold text-corCinzaClaro">Echos</h2>
                    <p className="text-sm max-w-xs text-center md:text-left mt-2">
                        Conscientização ambiental e práticas sustentáveis para um futuro melhor.
                    </p>
                </div>
                
                <div className="flex flex-col items-center md:items-start space-y-2">
                    {itensMenu.map((item) => (
                        <a
                            key={item.nome}
                            href={item.href}
                            className="hover:text-gray-400 text-sm"
                        >
                            {item.nome}
                        </a>
                    ))}
                </div>

                <div className="flex items-center space-x-6">
                    {redesSociais.map((rede) => {
                        const Icon = rede.icone;
                        return (
                            <a
                                key={rede.nome}
                                href={rede.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={rede.nome}
                                className="text-corCinzaClaro hover:text-gray-400 transition duration-300"
                            >
                                <Icon size={24} />
                            </a>
                        );
                    })}
                </div>
            </div>

            <div className="text-center mt-6 text-sm text-gray-500">
                © 2024 Echos - Todos os direitos reservados.
            </div>
        </footer>
    );
}
