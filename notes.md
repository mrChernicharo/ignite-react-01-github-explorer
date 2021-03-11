# yarn init -y

# yarn add react

# yarn add react-dom

- cria pastas public e src

===============================================================================================

# BABEL

# yarn add @babel/core @babel/cli @babel/preset-env -D

- cria babel.config.js

# yarn babel src/index.js --out-file dist/bundle.js

- Acima estamos dizendo à **cli do Babel**: converta o código de src/index.js e ponha-o no arquivo bundle.js dentro da pasta dist.
  Rodando o comando a pasta dist é criada com o arquivo bundle.js lá dentro
  No arquivo temos uma versão ES5 do nosso código escrito com ES8+

- Massa, mas o babel não entende React...

# yarn add @babel/preset-react

...e agora entende! É só adicionar esse novo preset dentro do array de presets do arquivo babel.config

- E vc pode mudar a extensão do arquivo de .js para .jsx. Isso não muda nada na realidade, serve apenas pra mudar o ícone do arquivo e "informar" que nele estamos usando html dentro do js...

===============================================================================================

# WEBPACK

- O webpack nos permite importar arquivos de diversas extensões para extensões compreendidas pelo browser

# yarn add webpack webpack-cli -D

- criamos o arquivo webpack.config.js. Esse é o cara responsável por "adaptar" nossa aplicação para trabalhar com tipos diferentes de arquivos

-entry: ponto de entrada da aplicação

-output: arquivo de saída da aplicação
\*\*\* aqui usamos a lib path:
o \_\_dirname indica o diretório raíz, onde se encontra o arquivo .config
na lib path construimos caminhos usando a função resolve(). Isso previne problemas com barras invertidas por exemplo, se o sistema tiver que rodar num windows

-resolve: recebe as extensões. Extensões declaradas aqui não precisam mais ser indicadas na hora de fazer imports

-module: recebe um array de rules
\*\*test: recebe regEx que combina com as extensões desejadas

\*\*exculde: como os arquivos de bibliotecas externas (na node_modules) já vêm com seus bundles prontos, não vamos querer passar esses arquivos pelo nosso loader

\*\*use: aqui vc especifica o loader que vai usar...

# yarn add babel-loader -D

o babel-loader é a integração entre o babel com os demais arquivos q nossa aplicação precisa ter ou importar.

Assim, tudo é processado pelo webpack, que entrega um bundle minificado, muito mais esquisito que o bundle do babel puro, isso pq o webpack junta o código de tudo que é arquivo dentro do mesmo código

crie o bundle com:

# yarn webpack

===================================================

# ESTRUTURA REACTJS

  <body>
    <div id="root"></div>
    <script src="../dist/bundle.js"></script>
  </body>

////

import React from "react";
import { render } from "react-dom";
import { App } from "./App";

render(<h1>Test</h1>, document.getElementById("root"));

-nas versões antigas do react era preciso importar React em todos os arquivos....sem esse import, o webpack nem roda!

pra resolver podemos passar uma configuração pro @babel-loader assim:

module.exports = {
presets: [
"@babel/preset-env",
["@babel/preset-react", { runtime: "automatic" }],
],
};

-Esse { runtime: automatic } vai então permitir que o webpack entenda o react mais moderno, sem os imports obrigatórios

-No webpack vc ainda tem a opção de usar a propriedade mode que define "development" ou "production"

Em development o bundle é feito mais rapidamente, pois há menos checagens e otimizações. Indo no bundle vc vê até que o código fica maiorzão, enquanto que em "production" o código é todo minificado, em uma só linha

===================================================

# yarn add html-webpack-plugin -D

essa lib nos permitirá melhorar a referência ao arquivo bundle.js na tag script do index.html

basta acresentar a propriedade plugins no webpack.config e passar um array.

Nesse array instanciamos um novo objeto HtmlWebpackPlugin, disponibilizado pela lib que acabamos de instalar.

Dentro dele criamos um objeto com a prop "template" que receberá o caminho pro arquivo html de entrada (atualmente na pasta public) usando a lib path do node

plugins: [
new HtmlWebpackPlugin({
template: path.resolve(__dirname, "public", "index.html"),
}),
],

Com isso podemos então referenciar nosso script de bundle omitindo o caminho dele no nosso projeto:

  <body>
    <div id="root"></div>
    <script src="bundle.js"></script>
  </body>

rodando então o yarn webpack, teremos um arquivo index.html sendo criado na pasta /dist e se abrir o arquivo, veremos que a aplicação funciona como esperado

===================================================

# WEBPACK DEV-SERVER

# yarn add webpack-dev-server -D

com o dev-server o bundle será refeito automaticamente sem que a gente tenha que criar o bundle manualmente toda vez que alterarmos o código

Lib instalada, vamos no webpack.config criar a nova propriedade devServer

    devServer: {
    	contentBase: path.resolve(__dirname, 'public')
    },

e aí podemos rodar

# yarn webpack serve

e vemos que o projeto está rodando na porta 8080

e agora com live reload!

ou seja, sempre que a gente salvar, um novo bundle será gerado, bem rapidinho!

===================================================

# SOURCE MAPS

servem para visualizar o código original, mesmo quando o código já foi todo zoado pelo bundle.

Isso facilita o debug pois vc consegue ver o seu código no console

para fazer basta criar a prop "devtool" lá no webpack.config

devtool: 'eval-source-map',

aqui estamos usando o eval-source-map, que é indicado para modo de desenvolvimento.
Há outras ferramentas de source map disponíveis...mais pra frente veremos outras

#

===================================================

#

===================================================

#
