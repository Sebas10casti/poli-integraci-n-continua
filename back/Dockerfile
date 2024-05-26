# Utiliza una imagen base de Node.js
FROM node:alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto en el que la aplicación Express.js escucha
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "app.js"]  # Reemplaza "app.js" por el nombre de t