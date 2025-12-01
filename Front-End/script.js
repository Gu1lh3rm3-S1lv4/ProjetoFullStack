let cardContainer = document.querySelector(".card-Container");
let dados = [];

// Carrega os dados do JSON e renderiza todos os cards inicialmente.
async function carregarDados() {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
    //renderizarCards(dados); // Renderiza todos os cards ao carregar
}

function iniciarBusca() {
    let input = document.querySelector('input[type="text"]');
    let termoBusca = input.value.toLowerCase();

    // Se a busca estiver vazia, renderiza todos os dados novamente.
    if (termoBusca.trim() === "") {
        renderizarCards(dados);
        return;
    }

    let resultados = dados.filter(dado => {
        // Normaliza as propriedades para a busca, tratando campos opcionais.
        const nome = dado.nome?.toLowerCase() || '';
        const descricao = (dado.descrição || dado.descricao)?.toLowerCase() || '';
        const tags = dado.tags?.join(' ').toLowerCase() || '';

        return nome.includes(termoBusca) ||
               descricao.includes(termoBusca) ||
               tags.includes(termoBusca);
    });

    renderizarCards(resultados);
}

function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa a área de cards antes de renderizar.

    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("Card");

        // Verifica a existência de cada propriedade antes de exibi-la.
        const descricao = dado.descrição || dado.descricao || "";
        const ano = dado.ano || dado.data_criacao || "";
        const tagsHTML = dado.tags ? `<p"tags">Tags: ${dado.tags}</p>` : "";

        article.innerHTML = `
            <h2>${dado.nome}</h2>
            <p>${descricao}</p>
            <p><strong>Ano/Criação:</strong> ${ano}</p>
            ${tagsHTML}
            <a href="${dado.link}" target="_blank" rel="noopener noreferrer">Saiba mais</a>
        `;

        cardContainer.appendChild(article);
    }
}

// Chama a função para carregar os dados assim que o script for executado.
carregarDados();