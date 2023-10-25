const Message = require('./message.js');
const Command = require('./command.js');

class Rover {
   // Write code here!
   constructor(position){
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
   }
   receiveMessage(message) {
      let commands = message.commands;
      let response ={};
      response["message"] = message.name;
      let results = [];
      for(let i = 0; i < commands.length ; i++){
         let command = commands[i];
         let commandType = command.commandType;
         let result ={};
         if(commandType == 'MODE_CHANGE'){
            this.mode = command.value;
            result['completed'] = true;
            let roverStatus = { 
               'mode': this.mode,
               'generatorWatts':this.generatorWatts,
               'position':this.position
            }
            result['roverStatus'] = roverStatus;
         } else if (commandType == 'MOVE') {
            if(this.mode =="NORMAL"){
            this.position = command.value;
            result['completed'] = true;
            let roverStatus = { 
               'mode': this.mode,
               'generatorWatts':this.generatorWatts,
               'position':this.position
            }
            result['roverStatus'] = roverStatus;

            } else {
               result['completed'] = false;
 
            }
         } else if(commandType = 'STATUS_CHECK'){
            result['completed'] = true;
            let roverStatus = { 
               'mode': this.mode,
               'generatorWatts':this.generatorWatts,
               'position':this.position
            }
            result['roverStatus'] = roverStatus;
         }
         results.push(result);
      }
      response["results"]=results;
      return response;
   }
}

// let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
// let message = new Message('Test message with two commands', commands);
// let rover = new Rover(98382);    // Passes 98382 as the rover's position.
// let response = rover.receiveMessage(message);
// console.log(response);
module.exports = Rover;