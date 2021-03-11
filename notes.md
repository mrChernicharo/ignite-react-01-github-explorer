# yarn init -y

# yarn add react

# yarn add react-dom

- cria pastas public e src

===============================================================================================

# yarn add @babel/core @babel/cli @babel/preset-env -D

- cria babel.config.js

# yarn babel src/index.js --out-file dist/bundle.js

- Acima estamos dizendo à **cli do Babel**: converta o código de src/index.js e ponha-o no arquivo bundle.js dentro da pasta dist.
  Rodando o comando a pasta dist é criada com o arquivo bundle.js lá dentro
  No arquivo temos uma versão ES5 do nosso código escrito com ES8+

- Massa, mas o babel não entende React...

# yarn add @babel/preset-react

...e agora entende! É só adicionar esse novo preset dentro do array de presets do arquivo babel.config

===============================================================================================

#

#

#

#

#

#

#

#

#

#
