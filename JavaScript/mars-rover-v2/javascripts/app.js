// Rover Object Goes Here
// ====================================
let rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: []
};

function turnLeft(rover){
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
      case 'W':
        rover.direction = 'S';
        break;
        case 'E':
        rover.direction = 'N';
        break;
        case 'S':
          rover.direction = 'E'
          break;
  }
  console.log("rover is currently facing: " + rover.direction);
}

function turnRight(rover){
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
      case 'W':
        rover.direction = 'N';
        break;
        case 'E':
        rover.direction = 'S';
        break;
        case 'S':
          rover.direction = 'W'
          break;
  }
  console.log("rover is currently facing: " + rover.direction);
}

function moveForward(rover){
  switch (rover.direction) {
    case 'N':
      rover.y--;
      break;
      case 'W':
        rover.x--;
        break;
        case 'E':
        rover.x++;
        break;
        case 'S':
          rover.y++;
          break;
  }
  console.log("rover's current location is: " +  [rover.x,rover.y]);
}

function commands(commands){
  for (let i = 0; i <= commands.length; i++){
    if(commands[i] === 'f'){
      moveForward(rover);
      rover["travelLog"].push([rover.x,rover.y]);
    } else if (commands[i] === 'r'){
      turnRight(rover);
    } else if (commands[i] === 'l'){
      turnLeft(rover);
    }
  }
  console.log("rover has travaeled over: " + rover.travelLog);
}