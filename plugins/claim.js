import { getUser, saveUser } from '../lib/database.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { checkAchievements } from '../lib/achievements.js';
import { checkLevelUp, addXP } from '../lib/leveling.js';

// Use fs.readFileSync for robust JSON loading, avoiding import syntax issues.
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const charactersData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'characters.json')));

const COOLDOWN = 60 * 60 * 1000; // 1 hora en milisegundos

function getWeightedRandomCharacter() {
    const rarities = {
        "Common": 0.60,
        "Uncommon": 0.25,
        "Rare": 0.10,
        "Epic": 0.04,
        "Legendary": 0.01
    };

    const rand = Math.random();
    let cumulative = 0;

    for (const rarity in rarities) {
        cumulative += rarities[rarity];
        if (rand < cumulative) {
            const charactersInRarity = charactersData[rarity];
            const randomCharacter = charactersInRarity[Math.floor(Math.random() * charactersInRarity.length)];
            return { ...randomCharacter, rarity };
        }
    }
}

export default async function (sock, m) {
    const sender = m.key.participant || m.key.remoteJid;
    const user = getUser(sender);
    const now = Date.now();

    if (now - user.lastClaim < COOLDOWN) {
        const timeLeft = new Date(user.lastClaim + COOLDOWN - now).toISOString().slice(11, 19);
        await sock.sendMessage(m.key.remoteJid, { text: `⏳ Debes esperar ${timeLeft} para volver a reclamar.` });
        return;
    }

    const character = getWeightedRandomCharacter();
    user.collection.push(character);
    user.lastClaim = now;
    saveUser(sender, user);

    addXP(sender, 50); // Dar 50 XP por reclamar
    await checkLevelUp(sock, sender); // Verificar si subió de nivel

    await checkAchievements(sock, sender); // Verifica si desbloqueó un logro

    const caption = `
🎉 ¡Felicidades! 🎉

Has obtenido un nuevo personaje:

👤 *Nombre:* ${character.name}
✨ *Rareza:* ${character.rarity}
💰 *Valor:* ${character.value} Monedas

Usa *.collection* para ver todos tus personajes.
    `.trim();

    await sock.sendMessage(m.key.remoteJid, {
        image: { url: character.image },
        caption: caption,
        mentions: [sender]
    });
}