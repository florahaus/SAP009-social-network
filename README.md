# SCANNER DO TEMPO - Rede Social

## Índice

* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. Principais usuários](#2-principais-usuarios)
* [3. Problema resolvido](#3-problema-resolvido)
* [4. Caracteristicas do projeto](#4-caracteristicas-do-projeto)
* [5. Tecnologias utilizadas](#5-tecnologias-utilizadas)
* [6. Como executar o projeto](#6-como-executar-o-projeto)
* [7. Testes](#7-testes)
* [8. Deploy](#8-deploy)
* [9. Protótipo](#9-prototipo)
* [10. História de usuário](#10-historia-de-usuario)

***

## 1. Resumo do projeto

Este projeto é uma rede social chamada "Scanner do Tempo" que permite aos usuários publicar suas memórias favoritas para que elas fiquem guardadas para o futuro. A rede social é parte de um projeto maior, uma máquina historiográfica para capturar memórias para a Cápsula do Tempo até 2068.

## 2. Principais usuários

Os principais usuários do produto são pessoas interessadas em compartilhar suas memórias e histórias com outros usuários, preservando essas lembranças para o futuro.

## 3. Problema resolvido

O "Scanner do Tempo" resolve o problema de armazenamento e compartilhamento de memórias de uma forma acessível e interativa. Permite que os usuários criem uma conta, façam login e publiquem suas memórias, proporcionando uma maneira fácil e conveniente de preservar momentos importantes e compartilhá-los com outros.

## 4. Características do projeto

- A aplicação é uma Single-Page Application (SPA) responsiva, seguindo a técnica "mobile first" para garantir uma boa experiência de uso em dispositivos de tela grande e pequena.
- Foi utilizado o Firebase para implementar o sistema de autenticação, armazenamento de dados e persistência das informações.
- O projeto segue uma arquitetura que separa a manipulação do DOM da lógica de negócio, garantindo a separação de responsabilidades.
- Foram implementadas várias telas e funcionalidades, como a criação, edição e exclusão de publicações.
- A validação dos formulários de registro, login e publicação é realizada, exibindo mensagens descritivas para ajudar os usuários.
- Testes unitários foram criados para cobrir no mínimo 70% de statements, functions, lines e branches do código.

## 5. Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- JavaScript (ES6+)
- HTML
- CSS
- Firebase (para autenticação e persistência de dados)

## 6. Como executar o projeto

- Clone este repositório para o seu ambiente local.
- Certifique-se de ter o Node.js instalado.
- Execute o comando npm install para instalar as dependências.
- Configure as credenciais do Firebase no arquivo de configuração adequado.
- Execute o comando npm run dev para iniciar o servidor de desenvolvimento.
- Acesse a aplicação em seu navegador através do endereço fornecido pelo servidor de desenvolvimento.

## 7. Testes

Os testes unitários podem ser executados com o comando npm run test. Certifique-se de que todas as funcionalidades principais estejam devidamente testadas e com uma cobertura mínima de 70%.

## 8. Deploy

O projeto pode ser implantado em um serviço de hospedagem como o GitHub Pages, Firebase Hosting, Netlify, Vercel, entre outros. Certifique-se de marcar a versão do projeto com uma tag do Git antes de realizar o deploy.

## 9. Protótipo

Para visualizar o protótipo de baixa e alta fidelidade, acesse este link.

## 10. História de Usuário 

Como desenvolvedora do SCANNER DO TEMPO, desejo ter uma rede social para meu projeto, onde os usuários possam publicar suas memórias favoritas para que fiquem guardadas para o futuro.

   **Critérios de aceitação:** 
- Como usuário logado, devo ter a opção de criar uma nova publicação.
- As publicações devem ser exibidas em ordem cronológica inversa, com as mais recentes no topo.
- Como usuário logado, devo poder visualizar as publicações de outros usuários na rede social.
- Como usuário logado, devo ter a opção de editar uma publicação existente que eu tenha criado.
- Como usuário logado, devo ter a opção de excluir completamente uma publicação que eu tenha criado.
- Antes de excluir uma publicação, solicitar confirmação para evitar exclusões acidentais.
- Ao excluir uma publicação, ela deve ser removida permanentemente da rede social.


**Definição de pronto:**
- A funcionalidade de criação de publicações está implementada e funcionando corretamente.
- As publicações são exibidas corretamente em ordem cronológica inversa.
- As informações do autor e o conteúdo são exibidos nas publicações.
- Os usuários podem visualizar a publicação de outros usuários na rede social.
- Os usuários podem editar suas próprias publicações existentes.
- As alterações feitas na edição de uma publicação são salvas corretamente.
- Os usuários são solicitados a confirmar antes de excluir uma publicação.
- As publicações excluídas são removidas permanentemente da rede social.
- A interface do usuário reflete as opções de edição e exclusão das publicações.


### Este é um projeto desenvolvido para atender às necessidades dos usuários do "Scanner do Tempo" e fornecer uma experiência agradável e intuitiva para o compartilhamento de memórias.