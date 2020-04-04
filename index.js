//Requirements
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const { Client, MessageEmbed } = require('discord.js');
const token = process.env.token

client.login(token)

client.on('ready', () => {
    console.log("connect as " + client.user.tag +" ")
    client.user.setActivity("Carte vs Costruttore di Tende", {type: "PLAYING"});
})

let i = 0
let u = 0
let o = 0


client.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel
    let oldUserChannel = oldMember.voiceChannel

    if(oldUserChannel == undefined && newUserChannel !== undefined) {
        
        
        //Crea Canale predoni
        let name = newUserChannel.id
        if(name == config.predoni){                                       
            i= i + 1
            client.guilds.get(config.server).channels.get(config.predoni).clone({bitrate: 64000}).then(channel => {
                channel.edit({
                    parent: config.parentetenda,
                    position: newUserChannel.position, 
                    name: "🪓Covo #"+i

                })
                newMember.setVoiceChannel(channel)
            })                 
        }
        //Crea Canale Sindacati
        if(name == config.sindacati){                                    
            u= u + 1                               
            client.guilds.get(config.server).channels.get(config.sindacati).clone({bitrate: 64000}).then(channel => {
                channel.edit({
                    parent: config.parentetenda,
                    position: newUserChannel.position, 
                    name: "📚Sala #"+u

                })
                newMember.setVoiceChannel(channel)
            })                 
             
        }

        //Crea Vocale Confratelli
        if(name == config.confratelli){                                    
            o= o + 1                   
            client.guilds.get(config.server).channels.get(config.confratelli).clone({bitrate: 64000}).then(channel => {
                channel.edit({
                    parent: config.parentetenda,
                    position: newUserChannel.position, 
                    name: "✨Circolo #"+o

                })
                newMember.setVoiceChannel(channel)
            })     
        }
    }else if(newUserChannel == undefined){       
        let name = oldMember.voiceChannel.name
        let count = oldMember.voiceChannel.members.size

        //Cancella Canale Predoni
        if(name.startsWith("🪓Covo")){                   
            if(count === 0){                                
                oldMember.voiceChannel.delete("ok")
            }
            if(i == 10)
            {
                i = 0
            }                      
        }
         
        //Cancella Vocale Sindacati
        if(name.startsWith("📚Sala")){                   
            if(count == 0){                                
                oldMember.voiceChannel.delete("ok")
            }
            if(u == 10)
            {
                u = 0
            }
        }


        //Cancella Vocale Confratelli
        if(name.startsWith("✨Circolo")){                   
            if(count == 0){                                
                oldMember.voiceChannel.delete("ok")
            } 
            if(o == 10)
            {
                o = 0
            }          
        }

    }else if (oldUserChannel !== undefined){
        if(newUserChannel !== undefined){            
            let name = oldMember.voiceChannel.name
            let count = oldMember.voiceChannel.members.size

            //Script Canale Predoni
            if(name.startsWith("🪓Covo")){                                         
                if(count === 0){                                       
                    oldMember.voiceChannel.delete("ok")
                }
                if(i == 10)
                {
                    i = 0
                }                
            }
            let chanid = newMember.voiceChannelID
                if(chanid == config.predoni){                                       
                    i= i + 1                           
                    client.guilds.get(config.server).channels.get(config.predoni).clone({bitrate: 64000}).then(channel => {
                        channel.edit({
                            parent: config.parentetenda,
                            position: newUserChannel.position, 
                            name: "🪓Covo #"+i        
                        })
                        newMember.setVoiceChannel(channel)
                    })                        
            }
            
            //Scrpit Vocale Sindacati
            if(name.startsWith("📚Sala")){                                         
                if(count == 0){                                       
                    oldMember.voiceChannel.delete("ok")
                }
                if(u == 10)
                {
                    u = 0
                }
            }           
            let chanid2 = newMember.voiceChannelID
            if(chanid2 == config.sindacati){                                    
                u = u + 1                           
                client.guilds.get(config.server).channels.get(config.sindacati).clone({bitrate: 64000}).then(channel => {
                    channel.edit({
                        parent: config.parentetenda,
                        position: newUserChannel.position, 
                        name: "📚Sala #"+u
    
                    })
                    newMember.setVoiceChannel(channel)
                })       
            }

            // Script Vocale Confratelli
            if(name.startsWith("✨Circolo")){                                         
                if(count == 0){                                       
                    oldMember.voiceChannel.delete("ok")
                }
                if(o == 10)
                {
                    o = 0
                }
            }           
            let chanid3 = newMember.voiceChannelID
            if(chanid3 == config.confratelli){
                o = o + 1                                    
                client.guilds.get(config.server).channels.get(config.confratelli).clone({bitrate: 64000}).then(channel => {
                    channel.edit({
                        parent: config.parentetenda,
                        position: newUserChannel.position, 
                        name: "✨Circolo #"+o
    
                    })
                    newMember.setVoiceChannel(channel)
                })       
            } 

        }    
    }        
})

 

// IMPORTANTISSIMO







