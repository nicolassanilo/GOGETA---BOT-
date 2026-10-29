import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.resolve(process.env.DATABASE_PATH || './data');
const ticketsPath = path.join(dataDir, 'tickets.json');

fs.mkdirSync(dataDir, { recursive: true });

function readTickets() {
    try {
        return JSON.parse(fs.readFileSync(ticketsPath, 'utf8'));
    } catch (error) {
        if (error.code === 'ENOENT') {
            return [];
        }
        throw error;
    }
}

function writeTickets(tickets) {
    fs.writeFileSync(ticketsPath, JSON.stringify(tickets, null, 2));
}

export function createTicket(userId, description) {
    const ticket = {
        ticketId: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        userId,
        description,
        status: 'open',
        createdAt: new Date().toISOString()
    };

    const tickets = readTickets();
    tickets.push(ticket);
    writeTickets(tickets);
    return ticket;
}

export function closeTicket(ticketId) {
    const tickets = readTickets();
    const ticket = tickets.find(item => item.ticketId === ticketId && item.status === 'open');

    if (!ticket) {
        return false;
    }

    ticket.status = 'closed';
    ticket.closedAt = new Date().toISOString();
    writeTickets(tickets);
    return true;
}

export function getTickets() {
    return readTickets();
}
