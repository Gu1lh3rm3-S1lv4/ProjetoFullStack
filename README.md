# 🧠 Base de Conhecimento Inteligente (Powered by Gemini AI)

> Um motor de busca de tecnologias Front-end integrado a um gerador de conteúdo autônomo via Inteligência Artificial.

![Badge Status](https://img.shields.io/badge/Status-Concluído-green)
![Badge Node](https://img.shields.io/badge/Node.js-v18+-339933?logo=node.js)
![Badge AI](https://img.shields.io/badge/AI-Google_Gemini-8E75B2)

## 💻 Sobre o Projeto

Este projeto é uma aplicação **Full Stack** conceitual que resolve o problema de popular bases de conhecimento manualmente.

Ele opera em duas frentes:
1.  **Front-end (A Interface):** Uma aplicação web leve e responsiva onde usuários podem pesquisar por linguagens, frameworks e ferramentas.
2.  **Back-end (A Automação):** Um script em Node.js que utiliza a API do **Google Gemini** para gerar, validar e expandir o banco de dados do site automaticamente, garantindo conteúdo estruturado e sem duplicatas.

---

## 🚀 Funcionalidades

### 🎨 Front-end
- **Busca em Tempo Real:** Filtragem instantânea por nome, descrição ou tags.
- **Normalização de Dados:** Algoritmo capaz de lidar com chaves JSON inconsistentes (ex: `descricao` vs `descrição`).
- **Dark Mode Nativo:** Design moderno utilizando variáveis CSS (`:root`).
- **Responsividade:** Layout adaptável para Mobile e Desktop.

### 🤖 Back-end (Automação com IA)
- **Geração de Conteúdo:** Cria 25 novas tecnologias por execução usando o modelo `gemini-2.5-flash`.
- **Validação de Schema:** Força a IA a responder estritamente seguindo um padrão JSON (Array de Objetos), prevenindo erros de quebra no front.
- **Anti-Duplicidade:** O script lê a base atual antes de gerar novos itens, instruindo a IA a não repetir tecnologias já cadastradas.
- **Resiliência:** Sistema de *retries* com backoff exponencial para lidar com falhas de API.

---

## 🛠 Tecnologias Utilizadas

**Front-end:**
- HTML5 Semântico
- CSS3 (Flexbox, CSS Variables, Transitions)
- JavaScript (ES6+, Fetch API, DOM Manipulation)

**Back-end & Ferramentas:**
- **Node.js**: Ambiente de execução.
- **Google Gemini API**: Modelo de linguagem para geração de dados.
- **Dotenv**: Gerenciamento de variáveis de ambiente.
- **File System (fs)**: Persistência de dados em arquivos JSON locais.

---

## 📂 Estrutura do Projeto

```bash
/
├── Front-End/              # Interface Web
│   ├── index.html
│   ├── style.css           # Estilização (Dark Mode)
│   ├── script.js           # Lógica de busca e renderização
│   └── data.json           # Base de dados consumida pelo site
│
├── Back-End/               # Automação
│   ├── gerador.js          # Script principal de IA
│   ├── baseDeConhecimento.json # Arquivo gerado/atualizado
│   ├── .env                # Chaves de API (Não comitado)
│   └── package.json
│
└── README.md
