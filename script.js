const desafios = [
    "Leia 10 páginas de um livro.",
    "Faça 20 minutos de exercício.",
    "Aprenda algo novo por 15 minutos.",
    "Organize seu ambiente de estudo.",
    "Escreva 5 metas para sua semana.",
    "Pratique lógica por 30 minutos.",
    "Assista uma aula e faça anotações."
];

function gerarDesafio() {
    const indice = Math.floor(Math.random() * desafios.length);
    document.getElementById("desafio").innerText = desafios[indice];
    document.getElementById("mensagem").innerText = "";
}

function marcarConcluido() {
    document.getElementById("mensagem").innerText = "🔥 Parabéns! Você concluiu o desafio!";
}