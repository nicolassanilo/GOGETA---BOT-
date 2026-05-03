# Usar Node.js v16 como imagen base
FROM node:16-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración
COPY package*.json ./

# Instalar dependencias
RUN npm ci --only=production

# Copiar el resto del código
COPY . .

# Crear directorios necesarios
RUN mkdir -p data sessions media

# Exponer el puerto
EXPOSE 3000

# Comando para iniciar el bot
CMD ["npm", "start"]
