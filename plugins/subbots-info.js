/*import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch, rmSync, promises as fsPromises } from "fs";
const fs = { ...fsPromises, existsSync };
import path, { join } from 'path' 
import ws from 'ws';

let handler = async (m, { conn: _envio, command, usedPrefix, args, text, isOwner}) => {
const isCommand1 = /^(deletesesion|deletebot|deletesession|deletesesaion)$/i.test(command)  
const isCommand2 = /^(stop|pausarai|pausarbot)$/i.test(command)  
const isCommand3 = /^(bots|sockets|socket)$/i.test(command)   

async function reportError(e) {
  await m.reply(`🌳Itachi-Bot⚡: ¡ups! ocurrió un error inesperado 🐛`)
  console.log(e)
}

switch (true) {       
case isCommand1:
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let uniqid = `${who.split`@`[0]}`
  const path = `./${jadi}/${uniqid}`

  if (!await fs.existsSync(path)) {
    await conn.sendMessage(m.chat, { 
      text: `⚡Itachi-Bot⚡: no se detectó ninguna sesión activa 🔍\n\nUsa: *${usedPrefix + command}*\nO con ID:\n*${usedPrefix + command} (ID)*` 
    }, { quoted: m })
    return
  }

  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {
      text: `⚡Este comando solo se puede usar desde el *Itachi-Bot principal* ⚡\n\nLink: https://wa.me/${global.conn.user.jid.split`@`[0]}?text=${usedPrefix + command}`
    }, { quoted: m }) 
  } else {
    await conn.sendMessage(m.chat, { 
      text: `⚡Itachi-Bot⚡: ¡sub-bot desconectado exitosamente! 💤` 
    }, { quoted: m })
  }

  try {
    fs.rm(`./${jadi}/` + uniqid, { recursive: true, force: true })
    await conn.sendMessage(m.chat, { text : `🗑️ Sesión eliminada correctamente.` }, { quoted: m })
  } catch (e) {
    reportError(e)
  }  
  break

case isCommand2:
  if (global.conn.user.jid == conn.user.jid) {
    conn.reply(m.chat, `⚡Este comando solo puede usarlo un *sub-bot Itachi*⚡`, m)
  } else {
    await conn.reply(m.chat, `⚡Itachi-Bot⚡ se ha *desactivado temporalmente* ⚠️`, m)
    conn.ws.close()
  }  
  break

case isCommand3:
  const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];

  function convertirMsADiasHorasMinutosSegundos(ms) {
    var segundos = Math.floor(ms / 1000);
    var minutos = Math.floor(segundos / 60);
    var horas = Math.floor(minutos / 60);
    var días = Math.floor(horas / 24);
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    var resultado = "";
    if (días !== 0) resultado += días + "d ";
    if (horas !== 0) resultado += horas + "h ";
    if (minutos !== 0) resultado += minutos + "m ";
    if (segundos !== 0) resultado += segundos + "s";
    return resultado.trim();
  }

  const message = users.map((v, i) => 
` ⚡────[ *Itachi Sub-Bot #${i + 1}* ]────⚡
 🧸 Nombre : ${v.user.name || 'Pikachu'}
 🔗 Enlace : wa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}owner 
 🔋 Online : ${v.uptime ? convertirMsADiasHorasMinutosSegundos(Date.now() - v.uptime) : 'Desconocido'}
 ⚡────────────────────────────`).join('\n\n');

  const responseMessage = `*⚡ PIKACHU-BOT ⚡*\n\n🌼 Sub-Bots conectados: *${users.length}*\n\n${message || '⚠️ No hay sub-bots conectados actualmente.'}`.trim();

  await _envio.sendMessage(m.chat, {text: responseMessage, mentions: _envio.parseMention(responseMessage)}, {quoted: fkontak})
  break   
}}

handler.tags = ['serbot']
handler.help = ['sockets', 'deletesesion', 'pausarai']
handler.command = ['deletesesion', 'deletebot', 'deletesession', 'deletesession', 'stop', 'pausarai', 'pausarbot', 'bots', 'sockets', 'socket']

export default handler*/