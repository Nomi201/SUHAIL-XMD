const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923329824112";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_42_11_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE0LFxuICAgICAgICA3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDg2LFxuICAgICAgICA1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDg1LFxuICAgICAgICA2LFxuICAgICAgICA3NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODUsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDg5LFxuICAgICAgICAxODUsXG4gICAgICAgIDQzLFxuICAgICAgICA3NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDUwLFxuICAgICAgICAxOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDIzLFxuICAgICAgICA1OSxcbiAgICAgICAgODAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDcyLFxuICAgICAgICA2NSxcbiAgICAgICAgNjksXG4gICAgICAgIDcwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODEsXG4gICAgICAgIDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAwLFxuICAgICAgICA2NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgODgsXG4gICAgICAgIDMxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDUxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjRYVk9XaE14KzZNbWVPdk9QcE9KZXRGQUJMTWZ0VkRrL3Q2elB3c2xWL1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzIzOTg4MjU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxOTI1MkMwRjJGOUExQ0Q1RUM2N0Y0ODdBQjI3NzkzNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzEwMzAxNDhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidDNuYzlpY3FUeFNuMmhwbTg5OUtwd1wiLFxuICBcInBob25lSWRcIjogXCIwN2VmOWE0MS04ZjA0LTRhZmUtOWJjNC0xMmYyYTlhMGI4NTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjksXG4gICAgICAyMzUsXG4gICAgICAxNjcsXG4gICAgICA4OCxcbiAgICAgIDI1NCxcbiAgICAgIDEyLFxuICAgICAgOTUsXG4gICAgICAxNyxcbiAgICAgIDM5LFxuICAgICAgMjQwLFxuICAgICAgMjI3LFxuICAgICAgMTg3LFxuICAgICAgNTUsXG4gICAgICAyMTMsXG4gICAgICAxODYsXG4gICAgICAyMDEsXG4gICAgICAxMSxcbiAgICAgIDY4LFxuICAgICAgMTEzLFxuICAgICAgMTc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMyxcbiAgICAgIDE0MCxcbiAgICAgIDE5NixcbiAgICAgIDE1MyxcbiAgICAgIDM4LFxuICAgICAgMjA1LFxuICAgICAgMTg4LFxuICAgICAgMTk4LFxuICAgICAgMjAxLFxuICAgICAgMjAyLFxuICAgICAgNDEsXG4gICAgICAxOTcsXG4gICAgICA3NCxcbiAgICAgIDExNCxcbiAgICAgIDU1LFxuICAgICAgMzAsXG4gICAgICAyMDQsXG4gICAgICAzLFxuICAgICAgMTE4LFxuICAgICAgMTMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1ROUEyWVk1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMjM5ODgyNTg6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY5NzAzNTk0Njc2NDM3OjMzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00vVitNZ0JFUG5ZdGJrR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ0VhQm5pNzkrVnJGdUg5LzZmQlcwTVl6bThYclg4RmdXRWVSOTZadktWMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwbEhZUzlPcERvMTdndFZNK2pTRnJqRDd0eUtqSXVOOWhacUlNYVoraUpQdW0yQ29kTkRHcFpoQVVDeklyOWFLMllSeFZhMlEyUzZFNVdVVTJJUmtCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUY0YzS2gzWitIWGpXZFlvMFN2WXZDY1BZUlVPS3Q1RkE1bjQ0RWU5cWt0RlcxTXFMWlpFMEx1T1JMS1NTQ0VJcXp3STV2eVd2a3VRcWw5MXNXRU9oZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzMjM5ODgyNTg6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMDMwMTQxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTjRzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFONHMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFc0lyOGlRSjh5RmtVblUxMk1PWEEwajJMa0JHWGx6dkQ0cm1XZW1qS05ZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQyMTQwNzQzOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwODE0MTg2Nzg0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Shadow-MD",
  ownername:process.env.OWNER_NAME|| "Shadow-MD",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "Shadow",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
