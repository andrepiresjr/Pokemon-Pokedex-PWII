# Minha Pokédex

Projeto escolar desenvolvido com **React, Vite, Bootstrap e Axios**, consumindo a PokéAPI.

## Integrantes
- Nome do integrante 1
- Nome do integrante 2 (se houver)

> Substitua os nomes acima pelos nomes reais de todos os integrantes.

## Funcionalidades iniciais
- Buscar Pokémon pelo nome.
- Listar os primeiros Pokémon da PokéAPI.
- Exibir imagem, número e tipo do Pokémon.
- Carregar mais resultados.
- Exibir mensagens de carregamento e erro.

## Tecnologias
- React
- Vite
- Bootstrap
- Axios
- PokéAPI: https://pokeapi.co/

## Como executar
1. Instale o [Node.js](https://nodejs.org/).
2. Abra a pasta do projeto no VS Code.
3. Abra o terminal dentro da pasta.
4. Execute:

   ```bash
   npm install
   ```

5. Depois execute:

   ```bash
   npm run dev
   ```

6. Abra no navegador o endereço mostrado pelo Vite (normalmente `http://localhost:5173`).

## Organização das pastas

```text
pokedex-react/
├── public/
├── src/
│   ├── components/
│   │   └── PokemonCard.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Sobre a API
O projeto utiliza somente requisições HTTP **GET** para consultar os dados da PokéAPI. Não há cadastro, edição ou exclusão de informações na API.

## Próximas melhorias
- Criar filtros por tipo.
- Melhorar o layout e a identidade visual.
- Criar uma tela de detalhes para cada Pokémon.
- Adicionar paginação ou botão para carregar mais Pokémon.
