import { itensMenu, redesSociais } from '@/data/itensMenu';

export default function Footer() {
    return (
        <footer className="bg-corCinza text-corCinzaClaro py-10 border-t border-corVerdeFolha">
            <div className="mx-auto px-6 lg:px-16 max-w-screen-lg grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left place-items-center">
                
                <div className="flex flex-col items-center md:items-start space-y-3">
                    <h2 className="text-xl font-bold text-corCinzaClaro">Echos</h2>
                    <p className="text-sm max-w-xs">
                        Conscientização ambiental e práticas sustentáveis para um futuro melhor. Explore nosso conteúdo e descubra como você pode fazer a diferença!
                    </p>
                </div>
                
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <h3 className="text-xl font-semibold text-corCinzaClaro">Páginas</h3>
                    {itensMenu.map((item) => (
                        <a
                            key={item.nome}
                            href={item.href}
                            className="hover:text-corVerdeFolha text-sm transition duration-200"
                        >
                            {item.nome}
                        </a>
                    ))}
                </div>

                <div className="flex flex-col items-center md:items-start space-y-2">
                    <h3 className="text-xl font-semibold text-corCinzaClaro">Siga-nos</h3>
                    <div className="flex justify-center md:justify-start space-x-6">
                        {redesSociais.map((rede) => {
                            const Icon = rede.icone;
                            return (
                                <a
                                    key={rede.nome}
                                    href={rede.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={rede.nome}
                                    className="text-corCinzaClaro hover:text-corVerdeFolha transition duration-300"
                                >
                                    <Icon size={36} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="text-center mt-10 text-sm text-gray-500">
                © 2024 Echos - Todos os direitos reservados.
            </div>
        </footer>
    );
}
