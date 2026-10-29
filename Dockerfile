# Usar Node.js 24 para cumplir los requisitos actuales de las dependencias
FROM node:24-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración
COPY package*.json ./

# Instalar dependencias
RUN npm install --omit=dev

# Copiar el resto del código
COPY . .

# Crear directorios necesarios
RUN mkdir -p data session media

# Exponer el puerto
EXPOSE 3000

# Comando para iniciar el bot
CMD ["npm", "start"]
