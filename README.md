# Echos: Calculadora de Pegada de Carbono 🌱

O **Echos** é uma iniciativa voltada para a conscientização ambiental. Este sistema permite que os usuários calculem suas emissões de carbono com base em atividades como transporte, consumo de energia, viagens e muito mais. O projeto visa promover mudanças sustentáveis por meio da informação e do engajamento.

---

## 📋 Índice

- [📦 Sobre o Projeto](#-sobre-o-projeto)
- [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [⚙️ Instalação e Configuração](#️-instalação-e-configuração)
- [💡 Uso do Sistema](#-uso-do-sistema)
- [📂 Estrutura de Pastas](#-estrutura-de-pastas)

---

## 📦 Sobre o Projeto

O **Echos** foi desenvolvido para ajudar indivíduos e organizações a entenderem e reduzirem o impacto ambiental de suas atividades. O sistema utiliza dados locais e fatores de emissão para calcular as emissões de carbono e fornece recomendações para ações mais sustentáveis.

**Funcionalidades principais:**
- Calculadora de pegada de carbono.
- Exibição de categorias e fatores de emissão.
- Informações educativas sobre sustentabilidade.
- Suporte parcial offline para dados locais.

---

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido com as seguintes tecnologias:

- **Frontend:** Next.js, Tailwind CSS, TypeScript.
- **Backend:** API RESTful em Java (Jakarta REST).
- **Banco de Dados:** Oracle.
- **Outras Ferramentas:** Node.js, Vercel para deploy do frontend.

---

## ⚙️ Instalação e Configuração

### Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas:
- Node.js (v16 ou superior)
- NPM ou Yarn
- Java JDK 17+
- Banco de dados Oracle

### Passos para Configuração

1. **Configure as variáveis de ambiente:**  
   Crie um arquivo `.env.local` na raiz do projeto e adicione:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8080/api
Inicie o servidor de desenvolvimento:
npm run dev
Acesse a aplicação em:
http://localhost:3000.

---

## 💡 Uso do Sistema ##
-Acesse a calculadora e insira informações sobre suas atividades diárias.
-Visualize os resultados das emissões de carbono e explore as categorias disponíveis.
-Confira dicas e informações educativas para reduzir suas emissões.

---


## 📂 Estrutura de Pastas

src/
├── app/
│   ├── layout.tsx       # Layout global
│   ├── not-found.tsx    # Página 404
│   ├── page.tsx         # Página inicial
│   └── ...              # Outras páginas
├── components/
│   ├── Navbar.tsx       # Barra de navegação
│   ├── Footer.tsx       # Rodapé
│   └── ...              # Outros componentes
├── context/
│   └── ApiDisponivelContext.tsx # Gerenciamento de disponibilidade da API
├── data/
│   └── ...              # Dados locais e estáticos
├── types/
│   └── types.tsx        # Tipagem TypeScript

