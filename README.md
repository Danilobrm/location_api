  <p align="center">Instruções de uso API de localização</p>

## Instalação

```bash
$ git clone https://github.com/Danilobrm/location_api.git
$ npm install
```

**dentro do arquivo .env adicione JWT_SECRET=sua_chave_jwt (coloque uma chave de criptografia para o jsonwebtoken gerar um token de acesso baseado na sua chave)

## Executando a API

```bash
$ docker-compose up --build

```

## Endpoints

- registrar - POST /user/register

request body

{
"password": "password123",
"email": "john.doe@example.com"
}


- login - POST /login

request body

{
"password": "password123",
"email": "john.doe@example.com"
}


- criar localização - POST /location/create

request body

{
"name": "Office",
"city": "Springfield",
"state": "Anystate"
}


- editar localização - PATCH /location/edit/:id

request body

{
"name": "Office",
"city": "Springfield",
"state": "Anystate"
}


- deletar localização - DELETE /location/:id


- pegar localização por id - GET /location/:id


- pegar localização por nome - GET /location?name=name
  // se não por passado a query, irá retornar todas as localizações


## Como usar

ao executar docker-compose up --build com o docker aberto, será gerado dois containers e executados em conjunto, um para postgres e um para a build da API
em seguida, você pode testar cada endpoint utilizando o base_url http://localhost:3000 em um software para testar endpoints
