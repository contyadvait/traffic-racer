/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: Traffic Avoider
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

setLegend(
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
DDDDDDDDDDDDDDDD`],
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
  [obstacle, bitmap`
................
................
................
................
.00........008..
3888888888888886
38778LLLLL877886
88778LLLLL877888
88778LLLLL877888
38778LLLLL877886
3888888888888886
.00........008..
................
................
................
................`]
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
  [ player ]: []
})

onInput("i", () => {
  playing = true
  addSprite(2, 2, player)
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
  getFirst(player).x -= 1
  }
})

onInput("s", () => {
  if (playing == true) {
  getFirst(player).y += 1
  }
})

onInput("d", () => {
  if (playing == true) { 
  getFirst(player).x += 1
  }
})


afterInput(() => {
  
})
