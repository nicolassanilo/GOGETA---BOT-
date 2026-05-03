# Instalación de Node.js v16 para GOGETA-BOT

## Opción 1: Instalación Local (Recomendada)

### Windows
1. **Descargar Node.js v16.x:**
   - Visita: https://nodejs.org/download/release/v16.20.2/
   - Descarga: `node-v16.20.2-x64.msi`
   - Ejecuta el instalador

2. **Verificar instalación:**
   ```cmd
   node --version
   npm --version
   ```

### macOS
1. **Usando Homebrew:**
   ```bash
   brew install node@16
   brew link node@16
   ```

2. **O descargar desde:**
   - https://nodejs.org/download/release/v16.20.2/
   - `node-v16.20.2-darwin-x64.tar.gz`

### Linux
1. **Usando NVM (Recomendado):**
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   source ~/.bashrc
   nvm install 16
   nvm use 16
   nvm alias default 16
   ```

2. **O descarga directa:**
   ```bash
   wget https://nodejs.org/download/release/v16.20.2/node-v16.20.2-linux-x64.tar.xz
   tar -xf node-v16.20.2-linux-x64.tar.xz
   sudo cp -r node-v16.20.2-linux-x64/* /usr/local/
   ```

## Opción 2: Docker (Sin instalación local)

### Requisitos
- Docker instalado en tu sistema

### Pasos
1. **Construir y ejecutar el contenedor:**
   ```bash
   docker-compose up -d
   ```

2. **Ver logs del bot:**
   ```bash
   docker-compose logs -f gogeta-bot
   ```

3. **Reiniciar si es necesario:**
   ```bash
   docker-compose restart gogeta-bot
   ```

## Opción 3: Servicios en la Nube

### Replit
1. Importa el repositorio en Replit
2. Replit automáticamente usará Node.js v16
3. Presiona "Run" para iniciar

### Render
1. Conecta tu repositorio a Render
2. Render usará la versión especificada en `package.json`
3. Despliegue automático

### Railway
1. Crea nuevo proyecto desde GitHub
2. Railway detectará Node.js automáticamente
3. Configura variables de entorno si es necesario

## Verificación de Instalación

Después de instalar Node.js, ejecuta:

```bash
# Verificar versión de Node.js
node --version
# Debe mostrar: v16.x.x

# Verificar versión de npm
npm --version

# Instalar dependencias del bot
npm install

# Iniciar el bot
npm start
```

## Archivos de Configuración Creados

- `.nvmrc` - Especifica Node.js v16 para NVM
- `Dockerfile` - Configuración para Docker con Node.js v16
- `docker-compose.yml` - Orquestación de contenedores
- `render.yaml` - Configuración para Render (ya existía)

## Solución de Problemas

### Error: "node no se reconoce"
- Reinicia tu terminal después de instalar Node.js
- Verifica que Node.js esté en tu PATH

### Error: "npm install falla"
- Limpia caché: `npm cache clean --force`
- Borra node_modules: `rm -rf node_modules`
- Reinstala: `npm install`

### Error de permisos (Linux/macOS)
```bash
# Fix permisos npm
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

## Variables de Entorno (Opcional)

Crea archivo `.env`:
```
NODE_ENV=production
PORT=3000
OWNER_NUMBER=5492604035392
```

## Soporte

Si tienes problemas:
1. Verifica que Node.js v16 esté instalado correctamente
2. Asegúrate de tener permisos de administrador
3. Consulta los logs para errores específicos
4. Prueba con Docker si la instalación local falla
