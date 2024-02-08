const perguntas = [
    {
        pergunta: "O que é React.js?",
        respostas: [
            "Uma linguagem de programação",
            "Uma biblioteca JavaScript para construção de interfaces de usuário",
            "Um sistema operacional",
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a principal função do JSX no React?",
        respostas: [
            "Definir estilos CSS",
            "Manipular dados no servidor",
            "Permitir a escrita de marcação HTML em arquivos JavaScript",
        ],
        correta: 2,
    },
    {
        pergunta: "O que é um componente em React?",
        respostas: [
            "Um arquivo de configuração",
            "Uma função que renderiza elementos na interface",
            "Um banco de dados",
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a ferramenta recomendada para criar um novo aplicativo React?",
        respostas: [
            "Create React Application (CRA)",
            "Angular CLI",
            "Vue CLI",
        ],
        correta: 0,
    },
    {
        pergunta: "O que é o estado (state) em um componente React?",
        respostas: [
            "Uma variável global disponível em todo o aplicativo",
            "Dados que não podem ser modificados",
            "Dados que podem ser modificados e afetam a renderização do componente",
        ],
        correta: 2,
    },
    {
        pergunta: "Qual é a função do método 'render()' em um componente React?",
        respostas: [
            "Iniciar o componente",
            "Renderizar elementos na interface",
            "Capturar eventos de clique",
        ],
        correta: 1,
    },
    {
        pergunta: "O que é propriedade (props) em React?",
        respostas: [
            "Dados armazenados no servidor",
            "Valores que podem ser passados de um componente pai para um componente filho",
            "Métodos de estilização de componentes",
        ],
        correta: 1,
    },
    {
        pergunta: "Como o React otimiza o desempenho das aplicações?",
        respostas: [
            "Minificando automaticamente o código",
            "Utilizando a linguagem de programação C++",
            "Realizando atualizações eficientes no DOM",
        ],
        correta: 2,
    },
    {
        pergunta: "O que é o conceito de 'lifting state up' em React?",
        respostas: [
            "Elevar o estado de um componente filho para um componente pai",
            "Reduzir a complexidade de um componente",
            "Adicionar estilo aos elementos da interface",
        ],
        correta: 0,
    },
    {
        pergunta: "Como importar um componente React em um arquivo JavaScript?",
        respostas: [
            "import React from 'MeuComponente'",
            "include MeuComponente from 'React'",
            "import MeuComponente from 'caminho/do/componente'",
        ],
        correta: 2,
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('nane', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta) 

    dt.querySelector('input').onchange = (event) => {
    const estaCorreto = event.target.value == item.correta

    corretas.delete(item)
    if(estaCorreto){
        corretas.add(item)
    }
    
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }

    quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}
