# Sorteador de Amigos 🎉

Este projeto é uma aplicação simples em JavaScript para criar uma lista de amigos, visualizar os nomes adicionados e sortear aleatoriamente um nome da lista. Ele é ideal para quem deseja organizar brincadeiras como amigo secreto ou apenas explorar funcionalidades de manipulação de listas e DOM no JavaScript.

## 🚀 Funcionalidades

- **Adicionar amigo**: Adicione nomes à lista de amigos.
- **Listar amigos**: Visualize todos os amigos adicionados.
- **Sortear amigo**: Sorteie um amigo aleatoriamente a partir da lista.
- **Limpar campo de entrada**: Após adicionar um nome, o campo de entrada é limpo automaticamente.

## 🛠️ Tecnologias utilizadas

- **HTML**: Para a estrutura do projeto.
- **CSS**: Para a estilização da interface (se necessário).
- **JavaScript**: Para a lógica do projeto e manipulação do DOM.

## 📋 Como funciona o código?

### Principais funções

1. **`adicionarAmigo()`**
   - Captura o valor inserido no campo de entrada.
   - Adiciona o nome à lista `ListaDeAmigos`.
   - Atualiza a lista exibida na tela.
   - Limpa o campo de entrada.

2. **`listarAmigo(ListaDeAmigos)`**
   - Limpa o conteúdo atual da lista exibida.
   - Percorre o array `ListaDeAmigos` e cria um item `<li>` para cada nome.
   - Adiciona os itens ao elemento HTML com ID `listaAmigos`.

3. **`sortearAmigo()`**
   - Seleciona aleatoriamente um nome da lista `ListaDeAmigos`.
   - Exibe o nome sorteado no elemento com ID `#resultado`.

4. **`escreverTexto(tag, texto)`**
   - Escreve o texto especificado dentro de um elemento HTML identificado pela tag ou ID.

5. **`limparCampo()`**
   - Limpa o valor do campo de entrada após a adição de um amigo.

**Deployment**
jogo-amigo-secreto-5k3a-l74cpyyzr-sarahs-projects-675fd93f.vercel.app
