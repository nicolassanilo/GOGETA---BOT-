/**
 * Manejador para el comando .meme
 * @type {import('../lib/functions.js').CommandHandler}
 */
const handler = async (sock, m, args) => {
    const sender = m.key.participant || m.key.remoteJid;
    
    // Lista de memes predefinidos (puedes agregar más)
    const memes = [
        {
            text: "😂 *MEME DEL DÍA* 😂\n\nCuando crees que entendiste el material de examen... 📚\n\n*Resultado:* El examen te entiende a ti 😭",
            emoji: "😂"
        },
        {
            text: "🤡 *MEME CLÁSICO* 🤡\n\nYo: 'Mañana empiezo a hacer ejercicio' 💪\n\nMañana: 😴😴😴",
            emoji: "🤡"
        },
        {
            text: "🌚 *MEME NOCTURNO* 🌚\n\nA las 11 PM: 'Solo un capítulo más' 📺\n\nA las 4 AM: 🤡🤡🤡",
            emoji: "🌚"
        },
        {
            text: "🤓 *MEME DE PROGRAMADOR* 🤓\n\n'Funciona en mi máquina' 🖥️\n\nEn producción: 💀💀💀",
            emoji: "🤓"
        },
        {
            text: "🎭 *MEME DE LA VIDA* 🎭\n\nCuando crees que todo va bien... ✨\n\nLa vida: 'Piensa de nuevo' 😈",
            emoji: "🎭"
        },
        {
            text: "🍕 *MEME DE HAMBRE* 🍕\n\nYo: 'Voy a hacer dieta' 🥗\n\nMi estómago: 'PIZZA AHORA' 🍕🍕🍕",
            emoji: "🍕"
        },
        {
            text: "🎮 *MEME GAMER* 🎮\n\n'Un último juego y me voy a dormir' 🎮\n\n3 horas después: 🎮🎮🎮",
            emoji: "🎮"
        },
        {
            text: "💸 *MEME DEL DINERO* 💸\n\nInicio de mes: 💰💰💰\n\nFin de mes: 🥜🥜🥜",
            emoji: "💸"
        }
    ];

    // Seleccionar meme aleatorio
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    
    let message = `${randomMeme.emoji} *MEME ALEATORIO* ${randomMeme.emoji}\n\n`;
    message += randomMeme.text;
    message += `\n\n💡 _¿Quieres más memes? Usa `.meme` nuevamente_`;

    await sock.sendMessage(m.key.remoteJid, { text: message }, { quoted: m });
};

handler.command = 'meme';
handler.help = 'Muestra un meme aleatorio divertido.';

export default handler;