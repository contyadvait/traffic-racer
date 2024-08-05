/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: Traffic Racer 2D
@author: advaitconty
@tags: []
@addedOn: 2024-00-00
*/

const player = "p"
const road = "r"
const boundryT = "T"
const boundryB = "B"
const explosion = "E"
const obstacle = "o"
var playing = false
var speed = 100
let intervalId
let spawnIntervalId

setLegend(
  [explosion, bitmap`
3333333333333333
3FFFF666666FFFF3
3FFF66699666FFF3
3FF6669999666FF3
3F666992299666F3
3666992222996663
3669922222299663
3699222222229963
3699222222229963
3669922222299663
3666992222996663
3F666992299666F3
3FF6669999666FF3
3FFF66699666FFF3
3FFFF666666FFFF3
3333333333333333`],
  [player, bitmap`
................
................
................
................
4004444444400444
3444444444444446
34774LLLLL477446
44774LLLLL477444
44774LLLLL477444
34774LLLLL477446
3444444444444446
4004444444400444
................
................
................
................`],
  [obstacle, bitmap`
................
................
................
................
8008888888800888
8888888888888886
38778LLLLL877886
38778LLLLL877888
38778LLLLL877888
38778LLLLL877886
8888888888888886
8008888888800888
................
................
................
................`],
  [road, bitmap`
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
666LL666666LL666
666LL666666LL666
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL`],
  [boundryT, bitmap`
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
1DDD1DDD1DDD1DDD
1111111111111111`],
  [boundryB, bitmap`
1111111111111111
1DDD1DDD1DDD1DDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD`]
)

setSolids([boundryT, boundryB])


let level = 0
const levels = [
  map`
TTTTT
rrrrr
rrrrr
rrrrr
BBBBB`
]

setMap(levels[level])

setPushables({
  [player]: []
})
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function spawnCar() {
  var coordinateX = getRandomInt(3, 4)
  addSprite(getRandomInt(3, 4), getRandomInt(1, 3), obstacle);
}

function startGame() {
  if (playing == true) {
    // Get all obstacle sprites
    const allObstacles = getAll(obstacle)

    // Iterate over each obstacle sprite
    allObstacles.forEach(obstacle => {
      // Check if obstacle is at x-coordinate 0 and remove it
      if ((obstacle.x - 1) === -1) {
        obstacle.remove(); // Remove the obstacle sprite
      } else {
        obstacle.x -= 1;
      }

      // You can perform more actions here based on your game logic
    })
  }
}


addText("Traffic\n\nRacer2D", { x: 6, y: 4, color: color`2`, font: "Arial" })
addText("Press I\n\nto start", { x: 6, y: 8, color: color`2`, font: "Arial" })

onInput("i", () => {
  playing = true
  addSprite(1, 2, player)
  clearText()
  setInterval(startGame, getRandomInt(800, 1200))
  spawnIntervalId = setInterval(spawnCar, getRandomInt(3000, 5000))
})

onInput("w", () => {
  if (playing == true) {
    const nextTile = getTile(player.x, player.y - 1)
    if (nextTile.includes(boundryT)) {
      getFirst(player).x -= 1
    } else {
      getFirst(player).y -= 1
    }
  }
})

onInput("a", () => {
  if (playing == true) {
    speed += 100
    updateSpeed(speed)
  }
})

onInput("s", () => {
  if (playing == true) {
    getFirst(player).y += 1
  }
})

onInput("d", () => {
  if (playing == true) {
    speed -= 100
    updateSpeed(speed)
  }
})


afterInput(() => {
  if (playing == true) {
    
  }
})
