# Site de uma Loja de Quadrinhos

<img width="300px" height="250px" src="assets/logo.jpg"/>

<s>

#### **_Parte1: Com Html e CSS_**

</s>

<u>

#### **_Agora temos muitos programas: Com JavaScript_**

[Design no Figma atualizado]([https://www.figma.com/design/OKRCQhZmaMFCgiEUzqGZlQ/ProjetoWeb2_Design?node-id=0-1&node-type=canvas&t=TKM1ahAVRj4GyLsj-0](https://www.figma.com/design/TYJOMPXugFYI4cmmUnhz0r/ProjetoWeb2_Design?fuid=1439971536536702876&classId=25bb3b42-ce93-41f1-9db8-7ae421637f6b&assignmentId=0eca69dc-687b-4700-a310-0c39987aca32&submissionId=63a244d0-f896-300a-a7f5-3cbbfdaa7b47)

</u>

Cloud que funcionou melhor:<br>
<u>
https://comicbook-store.netlify.app/
</u>

# Descrição dos programas em JS

<h2>
  
'''
adicionarproduto.js
'''

</h2><br>

Esse programa é um sistema simples de gerenciamento de produtos na página. Eis a ideia principal:

1. Armazenar Produtos
2. Atualizar o Resumo
3. Interação com Botões
4. Persistência Temporária e Carregamento Inicial

Objetivo Geral:

O programa serve para criar uma lista dinâmica de produtos selecionados pelo usuário, com exibição em tempo real e armazenamento temporário no sessionStorage. É útil para sistemas como carrinhos de compras ou listas de pedidos.

<h2><br> 
  
'''
atualizacoesemail.js
''' 

</h2><br>

Esse programa é uma simulação de envio de atualizaçõea da loja com email, com um popup para se verficar o Email foi colocado no input
ou não.

<h2><br> 
  
'''
cadastrofeito.js
'''

</h2><br>

Esse programa é uma simulação de cadastro verificando se as sessões obrigatorias estão sendo inseridas e retornando um popup informando cadastro feito.

<h2><br> 
  
'''
contadorcarrinho.js
''' 
  
</h2><br>


1. Função Principal: initCart

2. Carrinho como Objeto

3. Atualiza a Exibição e soma para contar os produtos do Carrinho: updateCartDisplay

4. Adicionar Itens ao Carrinho (addToCart):

5. Configuração de Eventos

6. Inicialização do DomContentLoaded

Objetivo Geral:

O código implementa um sistema de contador de compras dinâmico que:

Atualiza a exibição em tempo real.

Permite a interação com botões vinculados a produtos específicos.


<h2><br> 
  
'''
indexresumo.js
''' 

</h2><br>


Manda funções para redicionar para páginas específicas

<h2><br> 
  
'''
loginfeito.js
''' 

</h2><br>

Esse programa é uma simulação de login verificando se o email está sendo inserido e retornando um popup informando login feito.

<h2><br> 
  
'''
popupbotao.js
''' 
  
</h2><br>

1. Exibição de Popups ao Clicar nos Botões

2. Controle do Tempo de Exibição

3. Fechamento Manual do Popup

Objetivo Geral:

Esse código gerencia popups dinâmicos que:

São exibidos temporariamente (3 segundos) ao clicar em botões específicos.

Podem ser fechados manualmente clicando em áreas ou botões específicos.

Utiliza temporizadores para evitar sobreposição de popups e garantir uma experiência de usuário fluida.

<h2><br> 
  
'''
procuraproduto.js (não fincionou)
''' 

</h2><br>

1. Busca em Tempo Real

2. Filtragem de Resultados

3. Exibição de Resultados (displayResults)

4. Esconder Resultados (hideResults)

5. Posicionamento Dinâmico do Popup

Objetivo Geral:

Este código implementa um sistema de busca em tempo real com as seguintes funcionalidades:

Busca dinâmica por itens baseados em seus atributos data-nome.

Exibição de sugestões filtradas em um popup, posicionado dinamicamente.

Ocultação do popup quando não há resultados ou quando o campo de busca está vazio.

<h2><br> 
  
'''
resumo.js
'''

</h2><br>

1. Carregamento dos Produtos

2. Exibição dos Produtos

3. Cálculo do Valor Total da Compra

4. Evento de Alteração na Quantidade


Objetivo Geral:

Este código implementa uma funcionalidade para exibir produtos selecionados e calcular dinamicamente o valor total da compra com base na quantidade informada pelo usuário. A interação entre o campo de quantidade e a exibição do valor total garante uma experiência de compra em tempo real.

