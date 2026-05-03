/**
 * Manejador para el comando .menuGacha
 * @type {import('../lib/functions.js').CommandHandler}
 */
const handler = async (sock, m, args) => {
    let message = `🎮 *MENÚ GACHA & ECONOMÍA* 🎮\n\n`;
    
    message += `💰 *COMANDOS DE ECONOMÍA*\n`;
    message += `┌─────────────────┐\n`;
    message += `│ 🔹 \`.daily\`\n`;
    message += `│    Reclama tu recompensa diaria\n`;
    message += `│ 🔹 \`.balance\`\n`;
    message += `│    Muestra tu balance de monedas\n`;
    message += `│ 🔹 \`.top\`\n`;
    message += `│    Muestra el ranking de usuarios ricos\n`;
    message += `└─────────────────┘\n\n`;
    
    message += `🎯 *COMANDOS GACHA*\n`;
    message += `┌─────────────────┐\n`;
    message += `│ 🔹 \`.claim\`\n`;
    message += `│    Reclama un personaje aleatorio\n`;
    message += `│ 🔹 \`.collection\`\n`;
    message += `│    Muestra tu colección de personajes\n`;
    message += `│ 🔹 \`.sell <nº>\`\n`;
    message += `│    Vende un personaje de tu colección\n`;
    message += `│ 🔹 \`.gift @usuario <nº>\`\n`;
    message += `│    Regala un personaje a otro usuario\n`;
    message += `└─────────────────┘\n\n`;
    
    message += `🏪 *COMANDOS DE MERCADO*\n`;
    message += `┌─────────────────┐\n`;
    message += `│ 🔹 \`.market\`\n`;
    message += `│    Muestra los personajes en venta\n`;
    message += `│ 🔹 \`.market sell <nº> <precio>\`\n`;
    message += `│    Vende un personaje en el mercado\n`;
    message += `│ 🔹 \`.market buy <ID>\`\n`;
    message += `│    Compra un personaje del mercado\n`;
    message += `│ 🔹 \`.market remove <ID>\`\n`;
    message += `│    Retira tu personaje del mercado\n`;
    message += `└─────────────────┘\n\n`;
    
    message += `🔄 *COMANDOS DE INTERCAMBIO*\n`;
    message += `┌─────────────────┐\n`;
    message += `│ 🔹 \`.trade @usuario <tu_nº> <su_nº>\`\n`;
    message += `│    Propone un intercambio\n`;
    message += `│ 🔹 \`.trade accept\`\n`;
    message += `│    Acepta un intercambio propuesto\n`;
    message += `│ 🔹 \`.trade reject\`\n`;
    message += `│    Rechaza un intercambio propuesto\n`;
    message += `└─────────────────┘\n\n`;
    
    message += `🏆 *COMANDOS DE LOGROS*\n`;
    message += `┌─────────────────┐\n`;
    message += `│ 🔹 \`.achievements\`\n`;
    message += `│    Muestra tus logros desbloqueados\n`;
    message += `└─────────────────┘\n\n`;
    
    message += `💡 *EJEMPLOS DE USO*\n`;
    message += `• \`.daily\` - Reclama recompensa diaria\n`;
    message += `• \`.claim\` - Obtén personaje aleatorio\n`;
    message += `• \`.sell 3\` - Vende personaje #3\n`;
    message += `• \`.gift @usuario 2\` - Regala personaje #2\n`;
    message += `• \`.market sell 1 500\` - Vende personaje #1 por 500\n`;
    message += `• \`.trade @usuario 1 3\` - Intercambia personaje #1 por #3\n\n`;
    
    message += `📋 *INFORMACIÓN IMPORTANTE*\n`;
    message += `┌─────────────────┐\n`;
    message += `│ • Debes estar registrado para usar\n`;
    message += `│   estos comandos (.register nombre edad)\n`;
    message += `│ • Los personajes tienen raridad y valor\n`;
    message += `│ • El mercado funciona 24/7\n`;
    message += `│ • Los logros dan recompensas extras\n`;
    message += `└─────────────────┘`;

    await sock.sendMessage(m.key.remoteJid, { text: message }, { quoted: m });
};

handler.command = 'menuGacha';
handler.help = 'Muestra el menú de comandos de gacha y economía.';

export default handler;