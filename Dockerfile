# Etapa 1: Construir la aplicación React
FROM node:18-alpine AS build

# Establecer directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json desde app
COPY app/package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar todo el código fuente de la aplicación React
COPY app/ ./

# Construir la aplicación para producción
RUN npm run build

# Etapa 2: Servir con nginx
FROM nginx:alpine

# Copiar los archivos construidos al directorio de nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponer puerto 80
EXPOSE 80

# Nginx se ejecuta automáticamente
CMD ["nginx", "-g", "daemon off;"]