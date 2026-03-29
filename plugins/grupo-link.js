async function handler(m, { conn, orgs, participants, groupMetadata }) {
  let group = m.chat;
  let totalMembers = participants.length;
  let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group);
  conn.reply(m.chat, `*⚡🌩️──『 LINK DEL GRUPO UWU』──🌩️⚡*

📛 *Grupo:* ${groupMetadata.subject}
👥 *Miembros:* ${totalMembers}

🔗 *Enlace mágico:* 
${link}

🐭 ¡Itachi dice que lo compartas con los mejores entrenadores! ⚡`,  m, { detectLink: true });
}

handler.help = ['link'];
handler.tags = ['grupo'];
handler.command = ['link', 'enlace'];
handler.group = true;
handler.botAdmin = true;

export default handler;