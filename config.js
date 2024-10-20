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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_53_10_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkwLFxuICAgICAgICA4OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDc2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDMyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyLFxuICAgICAgICA2MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwLFxuICAgICAgICA0MixcbiAgICAgICAgMjIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQwLFxuICAgICAgICA4MSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MCxcbiAgICAgICAgODQsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU0LFxuICAgICAgICA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDczLFxuICAgICAgICA0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE5LFxuICAgICAgICAzOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDUyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDkzLFxuICAgICAgICA3NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg5LFxuICAgICAgICA0MCxcbiAgICAgICAgNDksXG4gICAgICAgIDkxLFxuICAgICAgICA4NixcbiAgICAgICAgMTA2LFxuICAgICAgICA0NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMsXG4gICAgICAgIDQyLFxuICAgICAgICA4LFxuICAgICAgICAyOSxcbiAgICAgICAgODQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU0LFxuICAgICAgICA0NixcbiAgICAgICAgMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDczLFxuICAgICAgICAxNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzksXG4gICAgICAgIDkxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNixcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDU2LFxuICAgICAgICA0NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiL1N2QmJGYW1UK2FCSlBieUpsWEVyUjZxMEkrYTFQOVlmVk1RaThDMmNpRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiT0pOdjlHMUZRaTZ0MGVCZkR4ZjBQQVwiLFxuICBcInBob25lSWRcIjogXCJlZmE4NGRjOS1mNDlkLTQ2NjEtOGQ2YS0xMjg4NGZlMmQ2ZmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAyLFxuICAgICAgMjAzLFxuICAgICAgMixcbiAgICAgIDI0MyxcbiAgICAgIDcxLFxuICAgICAgMzQsXG4gICAgICAyOCxcbiAgICAgIDE4MixcbiAgICAgIDIwOCxcbiAgICAgIDM2LFxuICAgICAgOTYsXG4gICAgICAzNyxcbiAgICAgIDE5NSxcbiAgICAgIDYxLFxuICAgICAgMjI3LFxuICAgICAgMTk5LFxuICAgICAgMTc5LFxuICAgICAgMzYsXG4gICAgICAyNDYsXG4gICAgICAxOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzksXG4gICAgICA5MCxcbiAgICAgIDE5OSxcbiAgICAgIDk5LFxuICAgICAgMjM5LFxuICAgICAgNjgsXG4gICAgICAyMzYsXG4gICAgICAxODUsXG4gICAgICAxNzIsXG4gICAgICAxOTAsXG4gICAgICAxNTUsXG4gICAgICA5MyxcbiAgICAgIDE0NyxcbiAgICAgIDc4LFxuICAgICAgMTksXG4gICAgICAxNjksXG4gICAgICAxODcsXG4gICAgICAyMDksXG4gICAgICAzNixcbiAgICAgIDE5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWTjVITUFES1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzI5ODI0MTEyOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTc5MDQ2NDA0Mzg0MjU6MTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFdIOUtZSEVJYjkwYmdHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzdVAyb3c3WDlUeXZ3NHdKS3VYZWVoZkwrS1ZBZFE1bVhvWGMvVGNLTW5JPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9oRFNtK1d3NXVKSk5QZ25UTHdDbWVUdGxQTFdJdXNRa2tyQVhHNjlwSWFaMHlDelpxdWZ5RVNzOXpiSGZPVktkSHVLVWNxV0YzaFBvVHVuU0I0ekJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIldTTGxZWGMvM0ErRWRZa1J5WVFyellSRzhsTjV2SXo1aXdRRFUwM3krTC93L2dvKytsbUwvVVQ1cFlxaDcwUTRpR1J0ZVRTekFtWWtPQzR5S0V6K2lBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMyOTgyNDExMjoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTM5NjM3NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFDb1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQUNvLmpzb24iOiAie1wia2V5RGF0YVwiOlwia29VVUk3UXRVOXAxTHpQUXVrVXN1NXZzc1ozdTBsYmdWeDFwdTlVeDVPND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTYwNjQxNDYxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjkxMzE4NjY1MzVcIn0iCn0="  // PUT your SESSION_ID 


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
