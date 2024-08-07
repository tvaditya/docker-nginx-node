# Docker Nginx Node

Este projeto implementa um ambiente Docker com Nginx atuando como proxy reverso para uma aplicação Node.js, que se comunica com um banco de dados MySQL. Quando um usuário acessa o Nginx, a aplicação Node.js adiciona um registro ao banco de dados e retorna uma mensagem junto com a lista de registros.

## Estrutura do Projeto
|-- /nginx
| |-- default.conf
|-- /node
| |-- Dockerfile
| |-- index.js
| |-- package.json
|-- docker-compose.yml


## Pré-requisitos

- Docker
- Docker Compose

## Configuração

### Nginx

O arquivo `nginx/default.conf` configura o Nginx como proxy reverso.

### Node.js

O Dockerfile e outros arquivos de configuração para a aplicação Node.js.

### Docker Compose

O arquivo `docker-compose.yml` para orquestrar os serviços.

## Como Usar

### Subir a Instância do Docker

1. Clone o repositório:

    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd desafio
    ```

2. Construa e inicie os contêineres:

    ```bash
    docker-compose up --build -d
    ```

3. Acesse o serviço em [http://localhost:8080](http://localhost:8080).

Ao acessar esta URL, você deverá ver a mensagem "Full Cycle Rocks!" seguida pela lista de nomes cadastrados no banco de dados.

## Solução de Problemas

- Verifique os logs do contêiner Node.js para erros específicos:

    ```bash
    docker logs node
    ```

- Se os contêineres não iniciarem corretamente, execute o comando abaixo para ver os logs em tempo real:

    ```bash
    docker-compose up --build
    ```

## Considerações

- Certifique-se de que você está usando a plataforma `linux/arm64` para compatibilidade com MacOS M1.
- Use volumes para persistir dados do MySQL.
