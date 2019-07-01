## cervejaria

#### Utilizado a api _https://api.punkapi.com/v2/_

Projeto teste cervejaria utilizado o framework __VUEJS__, __Bootstrap vue__ e o __Axios__.

Neste projeto foi realizado a construção dos componentes _cadastro_, _login_, _cervejaria_ e 
o compontente principal de App.vue.

Construído as rotas para os componentes em _router_

A pasta services contém os arquivos _config_ e _cervejasApi_ onde no arquivo _config_ contém 
a url base da api, para poder fazer as chamadas a api. Em _cervejasApi_ contém os métodos:

para filtrar por nome todas as cervejas, listar as cervejas, realizar o cadastro e login do usuário.

Foi feito a paginação, limitando 16 cervejas por páginas, onde o usuário poderá navevar entre as 
páginas 1 a 15.

obs: Quando inserido um email ou senha incorreta é retornado um error para o usuário; é mostrado 
no console o retorno dos dados ao fazer o longin indicando que tudo ocorreu certo.

_instalado as extensões Allow-Control-Allow-Origin_, no chrome para permitir o login e cadastro. 


##### Problema

Problema encontrado, infelizmente retornou um error ao fazer o _redirect_ após o cadastro ou login, onde seria direcionado para a home(página inicial contendo as cervejas) por isso comentei essa parte do código. Logo coloquei os três links no menu para realizar a navegação.

