<div align="center">

```
  ██████╗  ██████╗  ██████╗ ███████╗████████╗ █████╗ 
 ██╔════╝ ██╔═══██╗██╔════╝ ██╔════╝╚══██╔══╝██╔══██╗
 ██║  ███╗██║   ██║██║  ███╗█████╗     ██║   ███████║
 ██║   ██║██║   ██║██║   ██║██╔══╝     ██║   ██╔══██║
 ╚██████╔╝╚██████╔╝╚██████╔╝███████╗   ██║   ██║  ██║
  ╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝   ╚═╝   ╚═╝  ╚═╝
                                                   
            ██████╗  ██████╗ ████████╗
            ██╔══██╗██╔═══██╗╚══██╔══╝
            ██████╔╝██║   ██║   ██║   
            ██╔══██╗██║   ██║   ██║   
            ██████╔╝╚██████╔╝   ██║   
            ╚═════╝  ╚═════╝    ╚═╝   
```
<h1 align="center">GOGETA - BOT</h1>

<p align="center">
  <b>Un bot de WhatsApp multifuncional, construido con Baileys (Multi-Device).</b>
  <br>
  <i>Potente, rápido y fácil de extender.</i>
</p>

</div>

---

### `—[ 🖼️ VISTA PREVIA ]—`

<div align="center">
  <!-- Reemplaza la URL de abajo con el enlace a tu imagen -->
  <img src="https://i.postimg.cc/xCz6TTbZ/Polish-20250807-144544105.jpg" alt="Vista Previa del Bot" width="300"/>
  <p><i>Aquí puedes ver cómo se ve el bot en acción.</i></p>
</div>


---

### `—[ 🚀 PUESTA EN MARCHA ]—`

Sigue estos pasos para tener tu propia instancia de Gogeta Bot funcionando en minutos.

#### **1. Requisitos Previos**
- Node.js `24.15.0 o superior` (versiones 24.x o 26+)
- Git
- Un número de WhatsApp activo para vincular.

#### **2. Instalación**

```bash
# 1. Clona este repositorio en tu máquina
git clone https://github.com/NICOLAS-SANILO/GOGETA---BOT.git

# 2. Navega al directorio del proyecto
cd Gogeta-Bot

# 3. Instala todas las dependencias necesarias
npm install
```

#### **3. Ejecución**

```bash
# Inicia el bot (recomendado)
npm start

# O alternativamente
node index.js
```
> Al ejecutar el comando, aparecerá un **código QR** en tu terminal.

#### **4. Conexión**
1.  Abre WhatsApp en tu teléfono.
2.  Ve a `Ajustes` > `Dispositivos vinculados` > `Vincular un dispositivo`.
3.  Escanea el código QR que se muestra en la terminal.
4.  ¡Listo! El bot estará en línea y operativo.

---
### `—[ ☁️ DESPLIEGUE EN REPLIT (24/7) ]—`

Para mantener tu bot activo 24/7, puedes usar Replit.

1.  Crea un nuevo Repl usando la plantilla **Node.js**.
2.  Sube todos los archivos del bot.
3.  Replit instalará las dependencias (`npm install`) y ejecutará el bot (`npm start`) automáticamente cuando presiones el botón **"Run"**.
4.  Una vez que el bot esté conectado, la pestaña "Webview" mostrará el mensaje "Gogeta-Bot está activo!".
5.  Para mantenerlo siempre activo, puedes usar el servicio "Always On" de Replit o un servicio de monitoreo externo como UptimeRobot apuntando a la URL de tu Webview.

> **Nota:** El proyecto ya incluye los archivos de configuración (`.replit` y `replit.nix`) necesarios para que funcione correctamente en Replit.

### `—[ ☁️ DESPLIEGUE EN RENDER (Recomendado) ]—`

Render es una excelente alternativa para un despliegue estable con almacenamiento persistente.

1.  Crea una cuenta en Render.
2.  Haz clic en **"New"** > **"Blueprint"**.
3.  Conecta tu repositorio de GitHub donde se encuentra el bot.
4.  Render leerá el archivo `render.yaml` y configurará automáticamente el servicio y los discos persistentes.
5.  Haz clic en **"Apply"** para iniciar el despliegue.
6.  Una vez desplegado, ve a la pestaña **"Logs"** de tu servicio para ver el código QR y escanearlo.

> Los discos persistentes guardan la sesión (`session`) y los datos de usuario (`data`) entre reinicios.
---

### `—[ ⚙️ COMANDOS DISPONIBLES ]—`

El prefijo para usar los comandos es: `.`

**🤖 Comandos Generales**
- `.menu`: Muestra este menú de comandos.
- `.register <nombre> <edad>`: Te registra en el bot.
- `.ping`: Mide la latencia y velocidad del bot.
- `.info`: Proporciona información sobre el bot.
- `.profile [@usuario]`: Muestra el perfil de un usuario.

**⛩️ Gacha & Economía**
- `.daily`: Reclama tu recompensa diaria.
- `.claim`: Reclama un personaje aleatorio.
- `.balance`: Muestra tu balance de monedas.
- `.collection`: Muestra tu colección de personajes.
- `.sell <nº>`: Vende un personaje de tu colección.
- `.gift @usuario <nº>`: Regala un personaje a otro usuario.
- `.top`: Muestra el ranking de los más ricos.
- `.achievements`: Muestra tus logros desbloqueados.

**🔄 Intercambios & Mercado**
- `.trade @usuario <tu_nº> <su_nº>`: Propone un intercambio.
- `.trade accept | reject`: Acepta o rechaza un intercambio.
- `.market`: Muestra los personajes en venta.
- `.market sell <nº> <precio>`: Vende un personaje en el mercado.
- `.market buy <ID>`: Compra un personaje del mercado.
- `.market remove <ID>`: Retira tu personaje del mercado.

**🎮 Juegos**
- `.ppt`: Juega Piedra, Papel o Tijera.
- `.adivina`: Adivina el número que estoy pensando.
- `.trivia`: Responde una pregunta de trivia.
- `.matematica`: Resuelve un problema matemático.
- `.ahorcado`: Juega al ahorcado.

**🎉 Comandos de Diversión**
- `.sticker`: Convierte una imagen/video en sticker.
- `.ship @user1 @user2`: Calcula la compatibilidad de amor.
- `.gay [@usuario]`: Mide el nivel de homosexualidad.
- `.pinterest <búsqueda>`: Busca imágenes en Pinterest.

**📥 Descargas**
- `.ytmp3 <búsqueda/url>`: Descarga el audio de un video de YouTube.
- `.ytmp4 <búsqueda/url>`: Descarga un video de YouTube.
- `.instagram <url>`: Descarga un video o imagen de Instagram.
- `.tiktok <url>`: Descarga un video de TikTok sin marca de agua.

**🛠️ Administración (Solo Admins)**
- `.tag`: Menciona a todos en el grupo.
- `.ban @usuario`: Expulsa a un usuario del grupo.
- `.promote @usuario`: Hace administrador a un usuario.
- `.demote @usuario`: Quita el admin a un usuario.
- `.antipriv`: Activa/desactiva el anti-privado (Solo Owner).

---

### `—[ 👥 CREADOR Y COLABORADORES ]—`

Este proyecto es posible gracias al esfuerzo y la dedicación de las siguientes personas:

#### **Creador**
- **NICOLAS-SANILO** - `[Desarrollador Principal]`

#### **Colaboradores**
- ¡Agradecimientos a todos los que han contribuido! Si quieres ayudar, no dudes en hacer un Pull Request.

---

<div align="center">
  <p>Hecho con ❤️ y código.</p>
</div>
