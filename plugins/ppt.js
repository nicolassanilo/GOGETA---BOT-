export default async function (sock, m) {
    const jid = m.key.remoteJid;
    const buttonId = m.message?.buttonsResponseMessage?.selectedButtonId;
    const opciones = ["piedra", "papel", "tijera"];

    // --- Manejar la respuesta de un botón ---
    if (buttonId && opciones.includes(buttonId)) {
        const eleccionUsuario = buttonId;
        const eleccionBot = opciones[Math.floor(Math.random() * opciones.length)];
        const resultado = eleccionUsuario === eleccionBot
            ? "🤝 ¡Empate!"
            : (
            (eleccionUsuario === "piedra" && eleccionBot === "tijera") ||
            (eleccionUsuario === "papel" && eleccionBot === "piedra") ||
            (eleccionUsuario === "tijera" && eleccionBot === "papel")
                ? "🎉 ¡Ganaste!"
                : "😢 ¡Perdiste!"
            );

        await sock.sendMessage(jid, {
            text: `Tu elegiste: *${eleccionUsuario}*\nYo elegí: *${eleccionBot}*\n\n${resultado}`
        });
        return;
    }

    // --- Iniciar una nueva partida ---
    const buttons = [
      { buttonId: "piedra", buttonText: { displayText: "✊ Piedra" }, type: 1 },
      { buttonId: "papel", buttonText: { displayText: "✋ Papel" }, type: 1 },
      { buttonId: "tijera", buttonText: { displayText: "✌️ Tijera" }, type: 1 },
    ];

    await sock.sendMessage(jid, {
      text: "🎮 *Piedra, Papel o Tijera*\nElige una opción:",
      buttons,
      footer: "🔥 Gogeta - Bot 🔥"
    });
}
