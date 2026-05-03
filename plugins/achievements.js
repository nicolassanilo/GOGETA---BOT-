import { getUser } from '../lib/database.js';
import { achievementsData } from '../lib/achievements.js';

/**
 * Manejador para el comando .achievements
 * @type {import('../lib/functions.js').CommandHandler}
 */
const handler = async (sock, m, args) => {
    const sender = m.key.participant || m.key.remoteJid;
    const user = getUser(sender);

    if (!user.registered) {
        return await sock.sendMessage(m.key.remoteJid, { 
            text: "❌ Debes estar registrado para ver tus logros." 
        });
    }

    let message = `🏆 *TUS LOGROS* 🏆\n\n`;
    
    if (user.achievements.length === 0) {
        message += "Aún no has desbloqueado ningún logro. ¡Sigue jugando para obtenerlos!\n\n";
    } else {
        user.achievements.forEach(achievementId => {
            const achievement = achievementsData[achievementId];
            if (achievement) {
                message += `✅ *${achievementId.replace(/_/g, ' ')}*\n`;
                message += `   ${achievement.description}\n`;
                if (achievement.reward) {
                    message += `   🎁 Recompensa: ${achievement.reward} monedas\n`;
                }
                message += "\n";
            }
        });
    }

    // Mostrar logros no desbloqueados
    message += "📋 *LOGROS PENDIENTES*\n\n";
    Object.keys(achievementsData).forEach(achievementId => {
        if (!user.achievements.includes(achievementId)) {
            const achievement = achievementsData[achievementId];
            message += `❌ *${achievementId.replace(/_/g, ' ')}*\n`;
            message += `   ${achievement.description}\n`;
            if (achievement.reward) {
                message += `   🎁 Recompensa: ${achievement.reward} monedas\n`;
            }
            message += "\n";
        }
    });

    await sock.sendMessage(m.key.remoteJid, { text: message }, { quoted: m });
};

handler.command = 'achievements';
handler.help = 'Muestra tus logros desbloqueados y pendientes.';

export default handler;