## Instalação

```bash
$ git clone https://github.com/xperiencexr/filmes.git
```

```bash
$ npm install
```

## Executar a aplicação

```bash
# watch mode
$ npm run start:dev
```

## Objetivo:

Temos uma api de cadastro de filmes que precisa de alguns ajustes e melhorias. Veja abaixo algumas funcionalidades que seria legal a nossa api ter:

#### Admin

- Cadastrar admin (somente admin logado poderá cadastrar outro admin)
- O email deve ser único
- Retornar todos os admins
- Retornar um único admin
- Atualizar um único admin
- Remover um admin (somente admin logado pode remover outro admin)

#### Movie

- Cadastrar filme (somente admin logado poderá cadastrar um filme)
- Retornar todos os filmes
- Buscar filme por título
- Retornar um filme
- Remover um filme (somente admin logado pode remover o filme)

#### Bonus

- Criar Front-end em React para consumir os dados da api

### Dicas

- Procure seguir as melhores práticas do framework NestJS.
- https://docs.nestjs.com/first-steps
