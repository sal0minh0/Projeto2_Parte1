# Site de uma Loja de Quadrinhos

<img width="300px" height="250px" src="assets/logo.jpg"/>

<s>

#### **_Parte1: Com Html e CSS_**

</s>

<u>

#### **_Agora temos muitos programas: Com JavaScript_**

[Design no Figma atualizado](https://www.figma.com/design/OKRCQhZmaMFCgiEUzqGZlQ/ProjetoWeb2_Design?node-id=0-1&node-type=canvas&t=TKM1ahAVRj4GyLsj-0)

</u>

Cloud que funcionou melhor:<br>
<u>
https://comicbook-store.netlify.app/
</u>

# Descrição dos programas em JS



Esse programa é um sistema simples de gerenciamento de produtos em uma página web. Ele utiliza JavaScript e sessionStorage para armazenar temporariamente informações sobre produtos adicionados. Eis a ideia principal:

1. Armazenar Produtos:
A função adicionarProduto adiciona objetos representando produtos (descricao e valor) a uma lista armazenada no sessionStorage. Isso permite que os dados sejam preservados enquanto a página estiver aberta, mas serão perdidos ao fechar o navegador.


2. Atualizar o Resumo:
A função atualizarResumo atualiza uma seção da página (elemento com ID descricao), exibindo a lista de produtos armazenados no sessionStorage.


3. Interação com Botões:

Cada botão com as classes .body-adicionar ou .body-pr-venda é configurado para capturar o clique do usuário.

Quando clicado, o botão busca informações sobre o produto (descrição e valor) a partir de elementos no HTML (data-nome e data-valor) e chama a função adicionarProduto.



4. Persistência Temporária e Carregamento Inicial:
Quando a página é carregada, a função atualizarResumo é chamada para exibir os produtos já adicionados durante a sessão.



Objetivo Geral:

O programa serve para criar uma lista dinâmica de produtos selecionados pelo usuário, com exibição em tempo real e armazenamento temporário no sessionStorage. É útil para sistemas como carrinhos de compras ou listas de pedidos.

