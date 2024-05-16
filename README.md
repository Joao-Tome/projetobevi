# Projeto Bevi para Teste da entrevista

Projeto iniciado com Create-React-App
Mais informaçoes sobre no README React.md

# Requisitos

Node v20.13.1

# Detalhes
Algumas coisas podem estar reduntandes ou "erradas". muita coisa deixei de fora por não ser tão necessario para o teste (Contexto de login.)

## Pages
### Principais
Dentro de /src/pages estão as paginas do react, "Home.js" seria a pagina principal (bem vazio...) e ErrorPage seria a pagina de erro, bem simples para o que ela eh
"PaginaBase.js" eh como se fosse a master, tudo eh renderizado nela.

### Produto
A Pasta Produto esta todas as paginas do Produto.
Temos produotDetalhes.js e ProdutoHome.js
ProdutoHome.js - seria a Principal dos produtos, é aonde esta sendo listado, e o Detalhes eh carregado dentro dela, por uma modal
ProdutoDetalhes.js - é o formulario de Criação e Alteração do produto, aqui onde sera carregado o produto (ou vazio) para fazer a adição ou alteração do produto.

## Sass e Stylesheet

Na pasta /src/sass estão os arquivos sass do projeto, por ser bem simples, não tem muito conteudo dentro deles.
quando compilado para css. foi adicionado na pasta /stc/stylesheet, com o mesmo nome

## Service

Aonde esta o axios.js, seria a parta para todos os serviços fora estilo que precisa de um .js especifico, no caso, so tenho o axios, então ele esta aqui.

## components

Alguns componentes que criei para usar nas paginas.
NavBar.js - Seria a navbar de todas as paginas. para deixar separado.
ProdutoCard.js - O card da listagem de pedidos. para carregar eles de forma mais facil.
Loading.js - A "tela" de loading quando esta esperando algum dado da API.

## tests

Arquivos de teste, o jest pega automaticamente esses arquivos.

# Inicialização

Use o comando 'npm install' para instalar as depedencias do projeto

Para alterar qualquer sass. pode usar o comando: "sass --watch src/sass:src/stylesheet" ele ira compilar todo movimento de arquivos sass para o pasta correta.

Utilize o .env.template para criar um novo arquivo .env com as informações do necessarias.

Para executar o projeto, utilize 'npm start .env'

# Teste

Use o Comando 'npm test' para iniciar os teste da pasta /src/tests/.
Todos eh para dar valido.