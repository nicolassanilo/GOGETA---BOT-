/**
 * Manejador para el comando .menuImagenes
 * @type {import('../lib/functions.js').CommandHandler}
 */
const handler = async (sock, m, args) => {
    let message = `🖼️ *MENÚ DE IMÁGENES & MULTIMEDIA* 🖼️\n\n`;
    
    message += `📸 *COMANDOS DE IMÁGENES*\n`;
    message += `┌─────────────────┐\n`;
    message += `│ 🔹 \`.sticker\`\n`;
    message += `│    Convierte imagen/video en sticker\n`;
    message += `│ 🔹 \`.pinterest <búsqueda>\`\n`;
    message += `│    Busca imágenes en Pinterest\n`;
    message += `└─────────────────┘\n\n`;
    
    message += `📥 *COMANDOS DE DESCARGA*\n`;
    message += `┌─────────────────┐\n`;
    message += `│ 🔹 \`.ytmp3 <búsqueda/url>\`\n`;
    message += `│    Descarga audio de YouTube\n`;
    message += `│ 🔹 \`.ytmp4 <búsqueda/url>\`\n`;
    message += `│    Descarga video de YouTube\n`;
    message += `│ 🔹 \`.instagram <url>\`\n`;
    message += `│    Descarga video/imagen de Instagram\n`;
    message += `│ 🔹 \`.tiktok <url>\`\n`;
    message += `│    Descarga video de TikTok sin marca\n`;
    message += `└─────────────────┘\n\n`;
    
    message += `🎭 *COMANDOS DE DIVERSIÓN*\n`;
    message += `┌─────────────────┐\n`;
    message += `│ 🔹 \`.meme\`\n`;
    message += `│    Muestra un meme aleatorio\n`;
    message += `│ 🔹 \`.ship @user1 @user2\`\n`;
    message += `│    Calcula compatibilidad de amor\n`;
    message += `│ 🔹 \`.gay [@usuario]\`\n`;
    message += `│    Mide nivel de homosexualidad\n`;
    message += `│ 🔹 \`.femboy [@usuario]\`\n`;
    message += `│    Mide nivel de femboy\n`;
    message += `│ 🔹 \`.formarpareja @usuario\`\n`;
    message += `│    Mide compatibilidad amorosa\n`;
    message += `└─────────────────┘\n\n`;
    
    message += `💡 *EJEMPLOS DE USO*\n`;
    message += `• \`.sticker\` - Responde a una imagen para convertirla\n`;
    message += `• \`.pinterest gatos bonitos\` - Busca imágenes de gatos\n`;
    message += `• \`.ytmp3 Despacito\` - Descarga audio de YouTube\n`;
    message += `• \`.ytmp4 https://youtube.com/watch?v=...\` - Descarga video\n`;
    message += `• \`.instagram https://instagram.com/p/...\` - Descarga de IG\n`;
    message += `• \`.tiktok https://tiktok.com/@user/video/...\` - Descarga de TT\n`;
    message += `• \`.ship @usuario1 @usuario2\` - Calcula compatibilidad\n`;
    message += `• \`.gay @usuario\` - Mide nivel de homosexualidad\n\n`;
    
    message += `📋 *INFORMACIÓN IMPORTANTE*\n`;
    message += `┌─────────────────┐\n`;
    message += `│ • Para stickers: responde a una imagen\n`;
    message += `│   o video con el comando \`.sticker\`\n`;
    message += `│ • Los videos de TikTok se descargan sin marca\n`;
    message += `│ • Pinterest puede mostrar varios resultados\n`;
    message += `│ • Algunas descargas pueden tardar según\n`;
    message += `│   el tamaño y velocidad del servidor\n`;
    message += `│ • Los comandos de diversión son solo juegos\n`;
    message += `│   y no deben tomarse en serio\n`;
    message += `└─────────────────┘\n\n`;
    
    message += `⚠️ *NOTAS ADICIONALES*\n`;
    message += `┌─────────────────┐\n`;
    message += `│ • Respeta los derechos de autor al usar\n`;
    message += `│   contenido descargado\n`;
    message += `│ • No abuses de los comandos de descarga\n`;
    message += `│ • El contenido puede no estar disponible\n`;
    message += `│   si el video/imagen es privado o eliminado\n`;
    message += `└─────────────────┘`;

    await sock.sendMessage(m.key.remoteJid, { text: message }, { quoted: m });
};

handler.command = 'menuImagenes';
handler.help = 'Muestra el menú de comandos de imágenes y multimedia.';

export default handler;