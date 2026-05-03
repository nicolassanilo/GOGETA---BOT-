/**
 * Manejador para el comando .menuJuegos
 * @type {import('../lib/functions.js').CommandHandler}
 */
const handler = async (sock, m, args) => {
    let message = `🎮 *MENÚ DE JUEGOS* 🎮\n\n`;
    
    message += `🎯 *JUEGOS CLÁSICOS*\n`;
    message += `┌─────────────────┐\n`;
    message += `│ 🔹 \`.ppt\`\n`;
    message += `│    Juega Piedra, Papel o Tijera\n`;
    message += `│ 🔹 \`.adivina\`\n`;
    message += `│    Adivina el número secreto\n`;
    message += `│ 🔹 \`.ahorcado\`\n`;
    message += `│    Juega al ahorcado\n`;
    message += `└─────────────────┘\n\n`;
    
    message += `🧠 *JUEGOS DE CONOCIMIENTO*\n`;
    message += `┌─────────────────┐\n`;
    message += `│ 🔹 \`.trivia\`\n`;
    message += `│    Responde preguntas de trivia\n`;
    message += `│ 🔹 \`.matematica\`\n`;
    message += `│    Resuelve problemas matemáticos\n`;
    message += `└─────────────────┘\n\n`;
    
    message += `🎲 *JUEGOS DE AZAR*\n`;
    message += `┌─────────────────┐\n`;
    message += `│ 🔹 \`.ticket\`\n`;
    message += `│    Compra un ticket de lotería\n`;
    message += `└─────────────────┘\n\n`;
    
    message += `💡 *EJEMPLOS DE USO*\n`;
    message += `• \`.ppt piedra\` - Elige piedra en el juego\n`;
    message += `• \`.ppt papel\` - Elige papel en el juego\n`;
    message += `• \`.ppt tijera\` - Elige tijera en el juego\n`;
    message += `• \`.adivina 50\` - Adivina que el número es 50\n`;
    message += `• \`.ahorcado\` - Inicia el juego del ahorcado\n`;
    message += `• \`.trivia\` - Comienza una pregunta de trivia\n`;
    message += `• \`.matematica\` - Recibe un problema matemático\n`;
    message += `• \`.ticket\` - Compra un ticket de lotería\n\n`;
    
    message += `📋 *INFORMACIÓN DE JUEGOS*\n`;
    message += `┌─────────────────┐\n`;
    message += `│ • **Piedra, Papel o Tijera**\n`;
    message += `│   Elige entre piedra, papel o tijera\n`;
    message += `│   y compite contra el bot\n\n`;
    message += `│ • **Adivina el Número**\n`;
    message += `│   El bot piensa un número del 1-100\n`;
    message += `│   y tú debes adivinarlo\n\n`;
    message += `│ • **Ahorcado**\n`;
    message += `│   Adivina la palabra letra por letra\n`;
    message += `│   antes de quedarte sin intentos\n\n`;
    message += `│ • **Trivia**\n`;
    message += `│   Responde preguntas de conocimientos\n`;
    message += `│   generales sobre varios temas\n\n`;
    message += `│ • **Matemáticas**\n`;
    message += `│   Resuelve operaciones matemáticas\n`;
    message += `│   de diferentes dificultades\n\n`;
    message += `│ • **Ticket de Lotería**\n`;
    message += `│   Compra un ticket para ganar premios\n`;
    message += `│   basado en números aleatorios\n`;
    message += `└─────────────────┘\n\n`;
    
    message += `🏆 *SISTEMA DE PUNTOS*\n`;
    message += `┌─────────────────┐\n`;
    message += `│ • Algunos juegos dan recompensas\n`;
    message += `│ • Gana monedas jugando bien\n`;
    message += `│ • Los puntos se suman a tu balance\n`;
    message += `│ • Usa \`.balance\` para ver tus monedas\n`;
    message += `└─────────────────┘\n\n`;
    
    message += `⚠️ *REGLAS IMPORTANTES*\n`;
    message += `┌─────────────────┐\n`;
    message += `│ • Debes estar registrado para jugar\n`;
    message += `│ • No hagas trampas en los juegos\n`;
    message += `│ • Respeta a otros jugadores\n`;
    message += `│ • Diviértete y aprende algo nuevo\n`;
    message += `└─────────────────┘`;

    await sock.sendMessage(m.key.remoteJid, { text: message }, { quoted: m });
};

handler.command = 'menuJuegos';
handler.help = 'Muestra el menú de juegos disponibles.';

export default handler;