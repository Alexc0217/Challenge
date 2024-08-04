#README
---

# Challenge
Bem-vindo! Este README fornece as instruções necessárias para clonar, configurar e testar o projeto.
## Clonando o Repositório
1.1.  Clone o repositório  usando o seguinte comando:
   
    git clone https://github.com/Alexc0217/Challenge.git

1.2.  Entre na pasta do projeto:

     cd Challenge

## Configuração do Ambiente
2.1.  Instale as dependências Ruby  com  o  comando:
   
    bundle install

2.2.  Crie as bases de dados:
   
    rails db:create

2.3.  Execute as migrações do banco de dados:
   
    bundle exec rails db:migrate

2.4. Abra uma nova aba no terminal, e entre na pasta ```client```.

2.5. instale  as dependências do React com:

    sudo npm install

Caso esteja utilizando o sistema operacional Windows, abra o terminal com permissão de administrador.

## Executando o Servidor
3.1.  Antes de rodar os testes, inicie o servidor Rails:

    rails s

3.2.  Em uma aba  separada, vá para a pasta `client` e inicie o client:

    cd client

    sudo npm start

## Rodando os Testes
Para executar os testes do back end (servidor), entre na pasta ```Challenge``` e use o comando:
    
    rspec spec/*

Para executar os testes do front end (client, snapshot tests), entre na pasta ```client``` e use o comando:

    npm test -- --u
  
---

Certifique-se de seguir estas etapas para configurar o ambiente corretamente e realizar testes. Se tiver alguma dúvida ou problema, consulte a documentação ou entre em contato.
