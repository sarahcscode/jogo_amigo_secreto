let ListaDeAmigos = [];

function adicionarAmigo() {
    let AmigoAdicionado = document.querySelector('input').value;
    ListaDeAmigos.push(AmigoAdicionado)
    console.log(ListaDeAmigos);
    listarAmigo(ListaDeAmigos);
    limparCampo();
}
function listarAmigo(ListaDeAmigos) {
    let campo = document.getElementById('listaAmigos');
    campo.innerHTML = "";
    ListaDeAmigos.forEach((nome) => {
        let li = document.createElement('li');
        li.textContent = nome;
        campo.appendChild(li); 
    });
}
function sortearAmigo() {
    let AmigoSorteado = ListaDeAmigos[Math.floor(Math.random() * ListaDeAmigos.length)];
    console.log(AmigoSorteado);
    return escreverTexto('#resultado', `Amigo sorteado: ${AmigoSorteado}`);
}
function escreverTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function limparCampo() {
    AmigoAdicionado = document.querySelector('input');
    AmigoAdicionado.value = '';
}