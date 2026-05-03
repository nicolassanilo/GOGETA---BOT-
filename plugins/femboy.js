/**
 * Manejador para el comando .femboy
 * @type {import('../lib/functions.js').CommandHandler}
 */
const handler = async (sock, m, args) => {
    const sender = m.key.participant || m.key.remoteJid;
    
    // Extraer el usuario mencionado o usar el remitente
    let targetJid = sender;
    let targetName = "tí";
    
    if (m.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length > 0) {
        targetJid = m.message.extendedTextMessage.contextInfo.mentionedJid[0];
        targetName = `@${targetJid.split('@')[0]}`;
    }
    
    // Generar porcentaje aleatorio
    const femboyPercentage = Math.floor(Math.random() * 101);
    
    let message = `🏳️‍⚧️ *TEST DE FEMBOY* 🏳️‍⚧️\n\n`;
    message += `📊 *${targetName}* es ${femboyPercentage}% femboy\n\n`;
    
    // Respuestas según el porcentaje
    if (femboyPercentage < 20) {
        message += `💪 *Resultado:* ¡Totalmente masculino! 🧔‍♂️`;
    } else if (femboyPercentage < 40) {
        message += `👨 *Resultado:* Mayormente masculino con un toque suave 😌`;
    } else if (femboyPercentage < 60) {
        message += `😌 *Resultado:* Equilibrado entre masculino y femboy ⚖️`;
    } else if (femboyPercentage < 80) {
        message += `💅 *Resultado:* Bastante femboy, pero con algo de masculinidad ✨`;
    } else {
        message += `👗 *Resultado:* ¡Femboy nivel experto! 💕✨`;
    }
    
    message += `\n\n💡 _Este es solo un juego divertido, no te lo tomes en serio_`;

    await sock.sendMessage(m.key.remoteJid, { 
        text: message,
        mentions: [targetJid]
    }, { quoted: m });
};

handler.command = 'femboy';
handler.help = 'Mide el nivel de femboy de un usuario.';

export default handler;