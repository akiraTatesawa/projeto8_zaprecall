export function decksDB() {
  const decks = [
    {
      name: "React",
      content: [
        {
          questionTitle: " O que é JSX?",
          questionAnswer: "Uma extensão de linguagem do JavaScript",
        },
        {
          questionTitle: "O React é __",
          questionAnswer:
            "Uma biblioteca JavaScript para construção de interfaces",
        },
        {
          questionTitle: "Componentes devem iniciar com __ ",
          questionAnswer: "Letra maiúscula",
        },
        {
          questionTitle: "Podemos colocar __ dentro do JSX",
          questionAnswer: "Expressões",
        },
        {
          questionTitle: "Usamos o npm para __ ",
          questionAnswer:
            "Gerenciar os pacotes necessários e suas dependências",
        },
        {
          questionTitle: " O ReactDOM nos ajuda __",
          questionAnswer:
            "Interagindo com a DOM para colocar componentes React na mesma",
        },
        {
          questionTitle: "Usamos props para __ ",
          questionAnswer: "Passar diferentes informações para componentes",
        },
      ],
    },
    {
      name: "Química",
      content: [
        {
          questionTitle: "Ácidos são elétron-deficientes?",
          questionAnswer: "Sim",
        },
        {
          questionTitle: "Uma base de Lewis doa __",
          questionAnswer: "Pares de elétrons",
        },
        {
          questionTitle: "Qual a fórmula do ácido sulfuroso?",
          questionAnswer: "H2SO3",
        },
        {
          questionTitle: "O que é pH?",
          questionAnswer: "(-1)log([H+])",
        },
        {
          questionTitle: "O ânodo sofre __",
          questionAnswer: "Oxidação",
        },
        {
          questionTitle: "O cátodo é o polo __",
          questionAnswer: "Positivo",
        },
      ],
    },
    {
      name: "Kaguya-sama",
      content: [
        {
          questionTitle: "Qual é o nome do presidente?",
          questionAnswer: "Shirogane Miyuki",
        },
        {
          questionTitle: "Qual é o sobrenome da Kaguya?",
          questionAnswer: "Shinomiya",
        },
        {
          questionTitle: "Ishigami e Miko estão no __ ano",
          questionAnswer: "Primeiro",
        },
        {
          questionTitle: "Quem se declarou primeiro?",
          questionAnswer: "Shirogane",
        },
        {
          questionTitle: "Quantas temporadas tem o anime?",
          questionAnswer: "3, por enquanto",
        },
        {
          questionTitle: "Hayasaka tentou beijar a __",
          questionAnswer: "Chika",
        },
      ],
    },
    {
      name: "Lab de Química",
      content: [
        {
          questionTitle: "Quais vidrarias são utilizadas na titulação?",
          questionAnswer: "Bureta e erlenmeyer",
        },
        {
          questionTitle: "O que é o ponto de equilíbrio?",
          questionAnswer: "nº de mols(A) = nº mols de B",
        },
        {
          questionTitle: "Nome da substância que identifica o ponto de viragem",
          questionAnswer: "Indicador",
        },
        {
          questionTitle: "Principal titulante de uma reação complexante",
          questionAnswer: "EDTA",
        },
        {
          questionTitle: "Padroniza-se NaOH com _",
          questionAnswer: "Biftalato de potássio",
        },
        {
          questionTitle: "Padroniza-se HCl com _",
          questionAnswer: "Carbonato de sódio",
        },
      ],
    },
    {
      name: "Quântica",
      content: [
        {
          questionTitle: "A equação de Schrödinger descreve __",
          questionAnswer: "O estado quântico de um sistema físico",
        },
        {
          questionTitle: "O que é o operador Hamiltoniano (Ĥ)?",
          questionAnswer:
            "É um operador cujo observável é correspondente à energia total do sistema",
        },
        {
          questionTitle:
            "O operador Hamiltoniano leva em conta quais tipos de energia?",
          questionAnswer: "Cinética e Potencial",
        },
        {
          questionTitle: "O que é a dualidade matéria-energia?",
          questionAnswer:
            "Partículas subatômicas se comportam tanto como onda quanto como partícula",
        },
        {
          questionTitle:
            "Qual é a solução para o problema da radiação do corpo negro?",
          questionAnswer: "Descrever a energia de forma discreta",
        },
        {
          questionTitle:
            "A quantidade que determina quando a quântica deve ser usada é __",
          questionAnswer: "A constante de Planck",
        },
        {
          questionTitle:
            "Como calcular a densidade da probabilidade de encontrar um elétron numa posição x?",
          questionAnswer: "Função de onda ao quadrado",
        },
      ],
    },
  ];

  return decks;
}
