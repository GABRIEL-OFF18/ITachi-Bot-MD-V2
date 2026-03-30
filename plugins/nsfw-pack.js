import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {

    m.react('🕑');

    let txt = 'Pack🔥🔥🔥';
    let img = 'https://api.delirius.store/nsfw/girls';

    m.react('✅');

    // viva el porno jodido 
    conn.sendMessage(m.chat, { 
        image: { url: img }, 
        caption: txt, 
        footer: dev, 
        buttons: [
            {
                buttonId: `.pack`,
                buttonText: { displayText: 'Siguiente' }
            },
            {
                buttonId: '.tetas',
                buttonText: { displayText: 'Tetas' }
            }
        ],
        viewOnce: true,
        headerType: 4
    }, { quoted: m });
}

handler.help = ['pack'];
handler.tags = ['emox'];        // corregí "tag" por "tags" (es lo correcto en la mayoría de handlers)
handler.command = ['pack', 'loli'];

export default handler;