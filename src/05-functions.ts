/**
 * - Типізація функцій
 * - Типізація аргументів
 * - Тип значення, яке повертає функція
 * - Опціональні параметри
 * - Типізація методів
 */

// function sum(a: number, b: number): number {
//   return a + b
// }

// const result = sum(1,2)
// sum(1,12)
// sum(1,98)

// /***************** 1 *****************/
// interface User {
//   username: string
//   age: number
// }
// const userCollection: User[] = [
//   { username: 'poly', age: 20 },
//   { username: 'jacob', age: 30 },
//   { username: 'mango', age: 25 },
// ]

// function getUserNames(users: User[]): string[] {
//   return users.map((user) => user.username)
// }

// const names = getUserNames(userCollection)
// console.log(names)

/***************** 2 *****************/

function greet(username: string, age?: number, extraInfo?: string) {
  if (age !== undefined) {
    console.log(username, age)
  } else {
    console.log(username)
    console.log(username, extraInfo)
  }
}

greet('poly', 15)

greet('jacob')
greet('jacob', undefined, 'Some extra info')

// greet(12, 'poly')

// greet(undefined, 'jacob')

// interface ObjParams {
//   username: string
//   age?: number
//   extraInfo?: string
// }

// function greetWithObj(objParams: ObjParams) {
//   if (objParams.age !== undefined) {
//     //  username, age
//   } else {
//     // username
//   }
// }
// greetWithObj({
//   extraInfo: 'asdasd',
//   username: 'Alex',
// })

/***************** 3 *****************/
interface User {
  username: string
  greet: (message: string) => void
}

const jacob: User = {
  username: 'Jacob',
  greet(message) {
    console.log(message)
  },
}

jacob.greet('Welcome')

/***************** 4 *****************/
interface Player {
  username: string
  isOnline: boolean
}

const allPlayers: Player[] = [
  { username: 'poly', isOnline: false },
  { username: 'jacob', isOnline: true },
  { username: 'adrian', isOnline: false },
]

interface GamePlatform {
  getOnlinePlayers: (players: Player[]) => Player[]
  getPlayerNames: (players: Player[]) => string[]
}

const platform: GamePlatform = {
  getOnlinePlayers(players) {
    return players.filter((player) => player.isOnline)
  },
  getPlayerNames(players) {
    return players.map((player) => player.username)
  },
}

const result = platform.getOnlinePlayers(allPlayers)
// result.map(player=>player.username)
const names = platform.getPlayerNames(allPlayers)

console.log(result, names)
