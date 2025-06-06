# Ecoponto API

Este projeto é uma aplicação Node.js para gerenciar ecopontos, que são pontos designados para a coleta de materiais recicláveis. A API permite o cadastro de ecopontos com seus respectivos nomes, latitudes e longitudes, armazenando esses dados no Firebase.

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Endpoints da API](#endpoints-da-api)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Instalação

1. Clone o repositório:

   ```
   git clone https://github.com/yourusername/ecoponto-api.git
   ```

2. Acesse o diretório do projeto:

   ```
   cd ecoponto-api
   ```

3. Instale as dependências:

   ```
   npm install
   ```

4. Configure o Firebase:
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
   - Obtenha sua configuração do Firebase e adicione em `src/config/firebase.js`.

## Uso

Para iniciar o servidor, execute:

```
npm start
```

O servidor irá rodar em `http://localhost:3000`.

## Endpoints da API

- `POST /ecopontos`

  - Cria um novo ecoponto.
  - O corpo da requisição deve incluir:
    - `nome`: Nome do ecoponto
    - `latitude`: Latitude do ecoponto
    - `longitude`: Longitude do ecoponto

## Contribuição

Contribuições são bem-vindas! Por favor, abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT.
