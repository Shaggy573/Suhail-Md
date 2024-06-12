const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94724416680";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_07_33_06_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIsXG4gICAgICAgIDI5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDkwLFxuICAgICAgICAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAzNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDczLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDczLFxuICAgICAgICA3NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA3NixcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ5LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgNzksXG4gICAgICAgIDU4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDg1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDYxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTcwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA2MyxcbiAgICAgICAgODcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDUsXG4gICAgICAgIDYxLFxuICAgICAgICAzMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDgyLFxuICAgICAgICA1MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE4LFxuICAgICAgICA4MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDc0LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0LFxuICAgICAgICAxOTksXG4gICAgICAgIDI3LFxuICAgICAgICAyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc5LFxuICAgICAgICA0MyxcbiAgICAgICAgNjksXG4gICAgICAgIDk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDU3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNmTm1WQy9tS29yc3U4YWMyRnlVTHl2MVk2b0wxT1NyMzZhSzRGYUtaeFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlplUG15SENhVEo2N1M2blM1RXNnNFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDJlMDk2ODktY2NmMy00MWI3LWFhNDItZThjNDM4ZGJhNWQyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU0LFxuICAgICAgODQsXG4gICAgICAxNzUsXG4gICAgICAyMSxcbiAgICAgIDI1MCxcbiAgICAgIDExMixcbiAgICAgIDEyNSxcbiAgICAgIDUxLFxuICAgICAgNixcbiAgICAgIDIyMCxcbiAgICAgIDI0LFxuICAgICAgNzUsXG4gICAgICA0OSxcbiAgICAgIDEwMSxcbiAgICAgIDQ5LFxuICAgICAgMTI3LFxuICAgICAgNDksXG4gICAgICAxMzgsXG4gICAgICAyNDksXG4gICAgICAxNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMyxcbiAgICAgIDY4LFxuICAgICAgMCxcbiAgICAgIDE1NixcbiAgICAgIDE4NixcbiAgICAgIDIxOCxcbiAgICAgIDIxNyxcbiAgICAgIDEwNyxcbiAgICAgIDE3MSxcbiAgICAgIDE5NyxcbiAgICAgIDIyOSxcbiAgICAgIDIzNCxcbiAgICAgIDIyOCxcbiAgICAgIDIzOSxcbiAgICAgIDM3LFxuICAgICAgMTMsXG4gICAgICAyMjMsXG4gICAgICA3MCxcbiAgICAgIDEzMSxcbiAgICAgIDE5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ppQnh2b0VFTCtlcGJNR0dBc2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwid1oxSi9OZ2paOEtadWdpWmlYcWNwTlJZa0IybVZhR0xvRHhjTmdtWGhUdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmdU5YOXNBeXF0bnRlMDRqUVJrSjVJdXE3Wi93RVpvRXozd3ZCWmVGanMxMyt5bDRmOC9uTGRVb0hkbWtjdkl6TWF4UWkyeEdNamVQR2R4VWdGY3NEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5alEwTHowbjFCa2xMOU51aUdTcVB6Y3BqV0ptaWxRTm82Zi9CRmd1djdvQTVCb1VIYTRuelRLOG1rYVRHc05mbU4yS2RaMm1Jc0dyYVhySG5QaUNCUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzI0NDE2NjgwOjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU8qc4bSAyaLJosqP44Wk44OkXCIsXG4gICAgXCJsaWRcIjogXCIxOTg2Njg0NDM1MDA1ODU6MjFAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcyNDQxNjY4MDoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MTc3NjAzXG59Igp9


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
