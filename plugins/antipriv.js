import { owner } from '../config.js';
import { config, saveConfig } from '../lib/functions.js';
import { isAdmin } from '../lib/functions.js';

/**
 * Manejador para el comando .antipriv
 * @type {import('../lib/functions.js').CommandHandler}
 */
const handler = async (sock, m, args) => {
    const sender = m.key.participant || m.key.remoteJid;
    const isOwner = owner.some(o => sender.startsWith(o.replace(/[\s-]/g, '')));
    
    // Solo el owner puede usar este comando
    if (!isOwner) {
        return await sock.sendMessage(m.key.remoteJid, { 
            text: "❌ Este comando solo puede ser usado por el owner del bot." 
        });
    }

    // Toggle del anti-privado
    config.antiPrivado = !config.antiPrivado;
    saveConfig();

    const status = config.antiPrivado ? "activado" : "desactivado";
    const statusEmoji = config.antiPrivado ? "🔒" : "🔓";
    
    let message = `${statusEmoji} *Anti-Privado ${status}*\n\n`;
    
    if (config.antiPrivado) {
        message += "📝 *Estado:* Activado\n";
        message += "⚠️ Ahora el bot bloqueará automáticamente los usuarios que le envíen mensajes privados (excepto el owner).\n";
        message += "🔧 Usa `.antipriv` nuevamente para desactivarlo.";
    } else {
        message += "📝 *Estado:* Desactivado\n";
        message += "✅ El bot ahora acepta mensajes privados de todos los usuarios.\n";
        message += "🔧 Usa `.antipriv` nuevamente para activarlo.";
    }

    await sock.sendMessage(m.key.remoteJid, { text: message }, { quoted: m });
};

handler.command = 'antipriv';
handler.help = 'Activa/desactiva el anti-privado (Solo Owner).';
handler.owner = true;

export default handler;