# Usar imagen base de Node.js
FROM node:18-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json desde comic-app
COPY comic-app/package*.json ./

# Instalar dependencias
RUN npm ci --production

# Copiar todo el código fuente de la aplicación React
COPY comic-app/ ./

# Construir la aplicación para producción
RUN npm run build

# Usar nginx para servir la aplicación
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Exponer puerto 80
EXPOSE 80

# Nginx se ejecuta automáticamente