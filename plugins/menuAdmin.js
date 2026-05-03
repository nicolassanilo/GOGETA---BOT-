import { owner } from '../config.js';
import { isAdmin } from '../lib/functions.js';

/**
 * Manejador para el comando .menuAdmin
 * @type {import('../lib/functions.js').CommandHandler}
 */
const handler = async (sock, m, args) => {
    const sender = m.key.participant || m.key.remoteJid;
    const isOwner = owner.some(o => sender.startsWith(o.replace(/[\s-]/g, '')));
    
    // Verificar si es admin o owner
    const isGroupAdmin = m.key.remoteJid.endsWith('@g.us') ? await isAdmin(sock, m.key.remoteJid, sender) : false;
    
    if (!isOwner && !isGroupAdmin) {
        return await sock.sendMessage(m.key.remoteJid, { 
            text: "❌ Este comando solo puede ser usado por administradores del grupo o el owner del bot." 
        });
    }

    let message = `👮‍♂️ *MENÚ DE ADMINISTRACIÓN* 👮‍♂️\n\n`;
    
    if (isOwner) {
        message += `👑 *COMANDOS DE OWNER*\n`;
        message += `┌─────────────────┐\n`;
        message += `│ 🔹 \`.antipriv\`\n`;
        message += `│    Activa/desactiva anti-privado\n`;
        message += `│ 🔹 \`.ban @usuario\`\n`;
        message += `│    Expulsa a un usuario del grupo\n`;
        message += `│ 🔹 \`.promote @usuario\`\n`;
        message += `│    Hace admin a un usuario\n`;
        message += `│ 🔹 \`.demote @usuario\`\n`;
        message += `│    Quita el admin a un usuario\n`;
        message += `└─────────────────┘\n\n`;
    }
    
    if (isGroupAdmin) {
        message += `🛡️ *COMANDOS DE ADMIN GRUPAL*\n`;
        message += `┌─────────────────┐\n`;
        message += `│ 🔹 \`.tag\`\n`;
        message += `│    Menciona a todos los miembros\n`;
        message += `│ 🔹 \`.ban @usuario\`\n`;
        message += `│    Expulsa a un usuario (si tienes permisos)\n`;
        message += `│ 🔹 \`.promote @usuario\`\n`;
        message += `│    Hace admin (si eres owner del grupo)\n`;
        message += `│ 🔹 \`.demote @usuario\`\n`;
        message += `│    Quita admin (si eres owner del grupo)\n`;
        message += `└─────────────────┘\n\n`;
    }
    
    message += `📋 *INFORMACIÓN ADICIONAL*\n`;
    message += `┌─────────────────┐\n`;
    message += `│ • Los comandos de owner solo pueden\n`;
    message += `│   ser usados por el dueño del bot\n`;
    message += `│ • Los comandos de admin requieren\n`;
    message += `│   ser administrador del grupo\n`;
    message += `│ • Usa los comandos con responsabilidad\n`;
    message += `└─────────────────┘\n\n`;
    
    message += `💡 *Ejemplos de uso*\n`;
    message += `• \`.antipriv\` - Activa anti-privado\n`;
    message += `• \`.ban @usuario_spam\` - Expulsa usuario\n`;
    message += `• \`.promote @usuario_confiable\` - Hace admin\n\n`;
    
    message += `⚠️ *Nota:* Algunos comandos pueden requerir\n`;
    message += `permisos adicionales según el grupo.`;

    await sock.sendMessage(m.key.remoteJid, { text: message }, { quoted: m });
};

handler.command = 'menuAdmin';
handler.help = 'Muestra el menú de comandos de administración.';

export default handler;