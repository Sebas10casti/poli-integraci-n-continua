FROM node:18-alpine

# Instala paquetes necesarios para Docker y otras herramientas
RUN apk update && \
    apk add docker-cli curl

# Instala Docker Compose
RUN curl -fsSL https://github.com/docker/compose/releases/download/1.29.2/docker-compose-Linux-x86_64 -o /usr/local/bin/docker-compose \
    && chmod +x /usr/local/bin/docker-compose

# Establece el directorio de trabajo dentro del contenedor en /app
WORKDIR /app

# Copia los archivos package.json y package-lock.json (si existe) del directorio local al directorio /app del contenedor
COPY package*.json ./

# Instala las dependencias del proyecto utilizando npm install
RUN npm install

# Copia todos los archivos del directorio local al directorio /app del contenedor
COPY . .

# Expone el puerto 4200 del contenedor, lo que permite acceder a la aplicación desde el exterior del contenedor
EXPOSE 4200

# Define el comando predeterminado para iniciar la aplicación
CMD ["npm", "start"]
