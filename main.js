const catalogo = [

    {
        id: '1',
        nome: 'Quebra cabeça Dinossauro',
        preco: '19,00',
        imagem: 'quebraCabecaRex.png',
    },

    {
        id: '2',
        nome: 'Kit Ferramentas',
        preco: '14,99',
        imagem: 'ferramentas.png',
    },

    {
        id: '3',
        nome: 'Kit Ferramentas Pro',
        preco: '16,90',
        imagem: 'ferramentas2.png',
    },

    {
        id: '4',
        nome: 'Quebra cabeça Carros',
        preco: '19,00',
        imagem: 'quebraCabecaCar.png',
    },

    {
        id: '5',
        nome: 'Amoeba',
        preco: '9,90',
        imagem: 'amoeba.png',
    },

    {
        id: '6',
        nome: 'Quebra cabeça Princesa',
        preco: '14,90',
        imagem: 'princesa.png',
    },

    {
        id: '7',
        nome: 'Jogo Futuro Engenheiro',
        preco: '24,90',
        imagem: 'futuroengenheiro.png',
    },

    {
        id: '8',
        nome: 'Jogo das Mimicas',
        preco: '24,90',
        imagem: 'mimicas.png',
    },

    {
        id: '9',
        nome: 'Kit de Pintura',
        preco: '9,90',
        imagem: 'pintura.png',
    },

    {
        id: '10',
        nome: 'Gelastica',
        preco: '7,90',
        imagem: 'gelastica.png',
    },

    {
        id: '11',
        nome: 'Jogo Caiu Perdeu',
        preco: '6,90',
        imagem: 'caiuPerdeu.png',
    },

    {
        id: '12',
        nome: 'BeyBlade',
        preco: '19,00',
        imagem: 'beyblade.png',
    },

];

const container = document.getElementById('produtos');

catalogo.forEach((produto) => {
  const precoNumerico = parseFloat(produto.preco.replace(',', '.'));
  const div = document.createElement('div');
  div.innerHTML = `
    <img src="img/${produto.imagem}" alt="${produto.nome}">
    <h4>${produto.nome}</h4>
    <h3>R$ <strong>${produto.preco}</strong> à vista </h3><p>ou R$<strong>${produto.preco}</strong> em até 2x de R$${(precoNumerico / 2).toFixed(2)} sem juros</p>
    <button>Comprar</button>
  `;
  container.appendChild(div);
});
