// lista (array) com as tecnologias que já começam cadastradas
// cada item é um objeto com "nome" e "ano"
const tecnologias = [
    {
        nome:"Disquete",
        ano:"1971"
    },
    {
        nome:"Fita Cassete",
        ano:"1963"
    },
    {
        nome:"Máquina de escrever",
        ano:"1868"
    }
]

// pega os elementos do HTML pelo id para usar no JavaScript
const formulario = document.getElementById("formTecnologia") // o formulário
const campoNome = document.getElementById("nome")            // campo de texto do nome
const campoAno = document.getElementById("ano")              // campo de texto do ano
const corpoTabela = document.getElementById("corpoTabela")   // corpo da tabela (tbody)

// função que mostra todas as tecnologias na tabela
function exibir(){
    // limpa a tabela antes de desenhar de novo (evita repetir linhas)
    corpoTabela.innerHTML = "";

    // percorre a lista do primeiro (posição 0) até o último item
    for (let posicao = 0; posicao < tecnologias.length; posicao++){

        // pega a tecnologia que está na posição atual
        const tecnologia = tecnologias[posicao]

        // adiciona uma nova linha (tr) na tabela com posição, nome e ano
        corpoTabela.innerHTML += `
            <tr>
                <td>${posicao}</td>
                <td>${tecnologia.nome}</td>
                <td>${tecnologia.ano}</td>
            </tr>
       
        `
       
    }
}

// chama a função assim que a página abre, para mostrar os itens iniciais
exibir();

// fica "escutando" o envio do formulário (quando clica em Cadastrar)
formulario.addEventListener("submit", function(evento){
    // impede a página de recarregar ao enviar o formulário
    evento.preventDefault();

    // cria um novo objeto com o que o usuário digitou nos campos
    const tecnologia = {
        nome: campoNome.value,
        ano: campoAno.value
    }

    // adiciona a nova tecnologia no final da lista
    tecnologias.push(tecnologia)

    // atualiza a tabela para aparecer o item novo
    exibir()

} )