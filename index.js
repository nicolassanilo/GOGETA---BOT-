// index.js
import './server.js'; // Importa e inicia el servidor web para mantener el bot activo en Replit
import { makeWASocket, useMultiFileAuthState, fetchLatestBaileysVersion } from '@whiskeysockets/baileys';
import pino from 'pino';
import makeQR from 'qrcode-terminal';
import { handleCommand } from './lib/functions.js'; // Asegurate de tener esta función
import { loadPlugins } from './lib/loader.js';      // Tu loader de plugins
let plugins = {}; // Aquí almacenaremos los plugins cargados

const startSock = async () => {
  const { version } = await fetchLatestBaileysVersion();
  const { state, saveCreds } = await useMultiFileAuthState(process.env.SESSION_PATH || './session');

  // Crea una instancia de logger. Cambia a 'info' para ver más detalles.
  const logger = pino({ level: 'silent' });

  const sock = makeWASocket({
    version,
    auth: state,
    logger
  });

  // Mostrar el QR manualmente
  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      console.log('📱 Escaneá el código QR para iniciar sesión:');
      makeQR.generate(qr, { small: true });
    }

    if (connection === 'open') {
      console.log('✅ Bot conectado con éxito');
    } else if (connection === 'close') {
      console.log('❌ Conexión cerrada. Reconectando...');
      startSock();
    }
  });

  // Guardar credenciales
  sock.ev.on('creds.update', saveCreds);

  // Cargar plugins
  plugins = await loadPlugins();

  // Manejar comandos entrantes
  sock.ev.on('messages.upsert', async ({ messages }) => {
    if (!messages || !messages[0]?.message) return;

    const m = messages[0];
    try {
      await handleCommand(sock, m, plugins);
    } catch (err) {
      const commandText = m.message?.conversation || m.message?.extendedTextMessage?.text || 'Comando no textual';
      console.error(`❌ Error al manejar el comando "${commandText}":`, err);
    }
  });

  // Manejar eventos de participantes en el grupo (bienvenida/despedida)
  sock.ev.on('group-participants.update', async (update) => {
    const { id, participants, action } = update;
    const a = participants[0];

    try {
      if (action === 'add') {
        await sock.sendMessage(id, {
          text: `¡Bienvenido/a al grupo, @${a.split('@')[0]}! 🎉 Esperamos que disfrutes tu estadía.`,
          mentions: [a]
        });
      } else if (action === 'remove') {
        await sock.sendMessage(id, {
          text: `Adiós, @${a.split('@')[0]}. 👋 ¡Te extrañaremos!`,
          mentions: [a]
        });
      }
    } catch (err) {
      console.error('❌ Error en el evento group-participants.update:', err);
    }
  });
};

startSock();