FROM node:18-alpine

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
