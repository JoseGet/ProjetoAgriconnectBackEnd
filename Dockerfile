FROM node:22

# Instalar dependências globais
RUN npm install -g ts-node nodemon typescript

# Definir diretório de trabalho
WORKDIR /app 

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências primeiro
RUN npm install

# Copiar schema do Prisma e todo código fonte
COPY . .

# Gerar cliente do Prisma após copiar tudo
RUN npx prisma generate

# Expor porta
EXPOSE 3000

# Comando para desenvolvimento
CMD ["npm", "run", "dev"]
