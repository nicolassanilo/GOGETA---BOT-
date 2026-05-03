import { getUser } from '../lib/database.js';

/**
 * Manejador para el comando .formarpareja
 * @type {import('../lib/functions.js').CommandHandler}
 */
const handler = async (sock, m, args) => {
    const sender = m.key.participant || m.key.remoteJid;
    const user = getUser(sender);

    if (!user.registered) {
        return await sock.sendMessage(m.key.remoteJid, { 
            text: "❌ Debes estar registrado para formar una pareja." 
        });
    }

    // Verificar si se mencionó a alguien
    if (!m.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length > 0) {
        return await sock.sendMessage(m.key.remoteJid, { 
            text: "💕 *FORMAR PAREJA*\n\n❌ Debes mencionar a alguien para formar pareja.\n\n💡 Ejemplo: `.formarpareja @usuario`" 
        });
    }

    const targetJid = m.message.extendedTextMessage.contextInfo.mentionedJid[0];
    const targetName = `@${targetJid.split('@')[0]}`;
    const senderName = `@${sender.split('@')[0]}`;

    // No permitir formar pareja con uno mismo
    if (targetJid === sender) {
        return await sock.sendMessage(m.key.remoteJid, { 
            text: "❌ No puedes formar pareja contigo mismo. 💔" 
        });
    }

    // Generar porcentaje de compatibilidad
    const compatibility = Math.floor(Math.random() * 41) + 60; // 60-100%
    
    let message = `💕 *TEST DE COMPATIBILIDAD* 💕\n\n`;
    message += `👫 *${senderName}* y *${targetName}*\n`;
    message += `💓 *Compatibilidad:* ${compatibility}%\n\n`;

    // Respuestas según la compatibilidad
    if (compatibility < 70) {
        message += `💔 *Resultado:* Pareja incompatible... Mejor sigan siendo amigos 😅`;
    } else if (compatibility < 80) {
        message += `💝 *Resultado:* Tienen algo de química, pero necesitan trabajar más en su relación 💪`;
    } else if (compatibility < 90) {
        message += `💖 *Resultado:* ¡Buena compatibilidad! Hay potencial para una bonita historia de amor ✨`;
    } else if (compatibility < 95) {
        message += `💘 *Resultado:* ¡Excelente compatibilidad! Son hechos el uno para el otro 🥰`;
    } else {
        message += `💕 *Resultado:* ¡COMPATIBILIDAD PERFECTA! ¡Alma gemelas detectadas! 💑✨`;
    }

    message += `\n\n💡 _Este es solo un juego divertido, el amor real va más allá de los números_`;

    await sock.sendMessage(m.key.remoteJid, { 
        text: message,
        mentions: [sender, targetJid]
    }, { quoted: m });
};

handler.command = 'formarpareja';
handler.help = 'Mide la compatibilidad amorosa entre dos usuarios.';

export default handler;