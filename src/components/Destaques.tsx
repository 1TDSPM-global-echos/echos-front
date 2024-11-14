import { FaLeaf, FaWater, FaRecycle, FaLightbulb, FaTree, FaWind } from 'react-icons/fa';

const objetivos = [
    { icon: FaLeaf, color: 'text-corVerdeFolha', title: 'Reduzir o Impacto Ambiental', text: 'Nossa calculadora ajuda você a entender e reduzir sua pegada de carbono.' },
    { icon: FaWater, color: 'text-corTurquesa', title: 'Economizar Recursos Naturais', text: 'Descubra como pequenos ajustes podem fazer uma grande diferença.' },
    { icon: FaRecycle, color: 'text-corVerdeFolha', title: 'Promover Sustentabilidade', text: 'Aprenda sobre práticas sustentáveis e como adotá-las no dia a dia.' },
    { icon: FaLightbulb, color: 'text-corAmarelo', title: 'Economizar Energia', text: 'Saiba como reduzir o consumo de energia em sua rotina.' },
    { icon: FaTree, color: 'text-corVerdeFolha', title: 'Preservar a Natureza', text: 'A preservação das florestas é essencial para o equilíbrio ambiental.' },
    { icon: FaWind, color: 'text-corTurquesa', title: 'Apoiar Energias Renováveis', text: 'Incentivamos o uso de fontes de energia limpa e sustentável.' },
];

export default function Destaques() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-screen-lg mx-auto text-center border border-dashed border-corVerdeFolha rounded-lg p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-corCinza mb-6">Nossos Objetivos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {objetivos.map(({ icon: Icon, color, title, text }, index) => (
                        <div key={index} className="flex flex-col items-center space-y-4 pt-4">
                            <Icon size={40} className={color} />
                            <h3 className="text-xl font-semibold text-corCinza">{title}</h3>
                            <p className="text-sm text-corCinza">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
