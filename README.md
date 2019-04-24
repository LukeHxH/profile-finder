# Profile Finder

Uma aplicação com React e Apollo para consumir dados da API do Github com GraphQL, que consiste em buscar dados de usuários do Github a partir do username fornecido.

## Configurações

Primeiramente, você deve [criar um token de acesso no Github](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line).

Em seguida, dentro da pasta `src`, você deve criar um arquivo chamado `config.js`, no seguinte estilo:

```js
const REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN = "SEU TOKEN AQUI";

export { REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN };
```

Ao fazer isso, sua aplicação funcionará normalmente.

## Rodando a aplicação

Antes de qualquer coisa, ao clonar o repositório, você deve instalar as dependências a partir do comando:

```
npm install
```

Em seguida, você deve executar o seguinte comando: 

```
npm start
```

E então, isso vai rodar a aplicação em modo de desenvolvedor.

