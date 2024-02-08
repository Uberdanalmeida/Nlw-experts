const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Uma linguagem de programação para criar páginas estáticas",
            "Um framework para desenvolvimento mobile",
            "Uma linguagem de programação para web",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do comando 'console.log()' em JavaScript?",
        respostas: [
            "Exibir um alerta na tela",
            "Registrar mensagens no console do navegador",
            "Iniciar uma função assíncrona",
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma variável em JavaScript?",
        respostas: [
            "Um tipo de dado primitivo",
            "Um valor constante que não pode ser alterado",
            "Um contêiner para armazenar e manipular dados",
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma função em JavaScript?",
        respostas: [
            "Um loop de repetição",
            "Um bloco de código que realiza uma tarefa específica",
            "Uma declaração condicional",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a diferença entre 'let', 'const' e 'var' na declaração de variáveis?",
        respostas: [
            "São palavras-chave intercambiáveis em JavaScript",
            "Afetam o escopo de uma variável",
            "São usadas apenas para números inteiros",
        ],
        correta: 1
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Um modelo de desenvolvimento orientado a objetos",
            "Um padrão de projeto para organização de código",
            "A representação da estrutura da página web para manipulação via código",
        ],
        correta: 2
    },
    {
        pergunta: "Como se faz um comentário de uma única linha em JavaScript?",
        respostas: [
            "// Isso é um comentário",
            "/* Isso é um comentário */",
            "'Isso é um comentário'",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Comparação de valores, sem levar em consideração o tipo",
            "Atribuição de valor a uma variável",
            "Comparação de valores, considerando o tipo",
        ],
        correta: 2
    },
    {
        pergunta: "O que é AJAX em JavaScript?",
        respostas: [
            "Uma biblioteca para criação de interfaces gráficas",
            "Uma técnica para atualizar partes de uma página sem recarregar a página inteira",
            "Um algoritmo de ordenação de dados",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o propósito do método 'addEventListener' em JavaScript?",
        respostas: [
            "Criar elementos HTML dinamicamente",
            "Adicionar estilos CSS a elementos da página",
            "Associar eventos a elementos HTML para executar funções específicas",
        ],
        correta: 2
    }
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
