# CRUD para Usuários

Este projeto realiza a criação de um CRUD (Create, Read, Update e Delete) para um sistema web de usuários.
A aplicação web foi escrita em TypeScript, utilizando Node.js e Express. 
Para armazenar os usuários da aplicação, o banco de dados MongoDB foi utilizado. 

# Funcionalidades

**Rota Create**

Esta rota é responsável por criar um usuário, recebendo um id, um nome, um nome de usuário e uma senha.
Caso já exista algum usuário com o mesmo id, é retornado um erro, do contrário o usuário é adicionado, com a hora atual como data de último acesso.

**Rota Read**

Esta rota recebe um id como parâmetro de rota e retorna o usuário que o representa, caso exista.

**Rota Update**

Esta rota recebe um id, nome, nome de usuário e senha. 
O usuário correspondente ao id tem suas informações atualizadas, caso exista, incluíndo a nova data de último acesso.

**Rota Delete**

Esta rota recebe um id, e o deleta do banco de dados caso o mesmo exista.

**Como Executar o Código**

Para executar o código, basta clonar este repositório, e digitar 'docker-compose up' em seu diretório.

