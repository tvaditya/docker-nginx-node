FROM node:15

WORKDIR /usr/src/app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install && npm list

# Copia todo o código do projeto
COPY . .

# Expõe a porta que a aplicação irá rodar
EXPOSE 3000

# Define o comando para rodar a aplicação
CMD ["npm", "start"]
