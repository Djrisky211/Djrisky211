//Bot by Dj Risky//


require("./all/module")
global.owner = "2349162655664" 
global.namaCreator = "Dj risky"
global.autoJoin = false 
global.antilink = false 
global.versisc = '2.𝟏' 
global.sessionName = 'session'
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "DJRISKY" 
global.author = "DJRISKY" 
global.jumlah = "5" 
global.namabot = "DJRISKY" 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
