import { FaLeaf, FaWater, FaLightbulb } from 'react-icons/fa';

export const cards = [
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
