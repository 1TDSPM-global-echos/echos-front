import Image from 'next/image';

export default function Equipe() {
  const membros = [
    {
      nome: 'Maria Eduarda',
      funcao: 'Analista de Dados',
      descricao: 'Especialista em engenharia de software e banco de dados.',
      foto: '/maria.jpg',
    },
    {
      nome: 'Samuel Damasceno',
      funcao: 'Desenvolvedor Full-Stack',
      descricao: 'Responsável pelo Back-end e pela criação de interfaces intuitivas e amigáveis.',
      foto: '/felipe.jpg',
    },
    {
      nome: 'Felipe Prometti',
      funcao: 'Especialista em IA',
      descricao: 'Focado em garantir a precisão dos fatores de emissão e impacto ambiental utilizando Inteligência Artificial.',
      foto: '/felipe.jpg',
    },
  ];

  return (
        
    <div className="bg-corCinzaClaro text-corCinza">
            <section className="secao-img bg-img-equipe">
            <h1 className="text-white text-6xl font-bold">Quem Somos</h1>
               
            </section>

      <section className="bg-corTurquesa text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Conheça Nossa Equipe</h1>
        <p className="text-lg">
          Um time dedicado a criar soluções inovadoras para um futuro sustentável.
        </p>
      </section>

      {/* Lista de Membros */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {membros.map((membro, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center border border-corTurquesa"
            >
              <Image
                src={membro.foto}
                alt={membro.nome}
                width={150}
                height={150}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">{membro.nome}</h3>
              <p className="text-corTurquesa font-medium">{membro.funcao}</p>
              <p className="text-gray-600 mt-2">{membro.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Chamada Final */}
      <section className="bg-corVerdeFolha text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Juntos por um futuro mais sustentável!</h2>
        <p className="text-lg">
          Nossa equipe está aqui para transformar ideias em impacto positivo. Entre em contato para
          saber mais sobre o projeto.
        </p>
      </section>
    </div>
  );
}
