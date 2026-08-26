/**
 * Узагальнені типи (generics)
 */

/* ---------- 1. Базова generic-функція ---------- */
// function identity<T>(value: T): T {
//   console.log(value)
//   return value
// }

// interface MyUser {
//   name: string
// }

// const n = identity<number>(42)
// const s = identity<string>('hello')
// const a = identity<MyUser>({ name: 'Alex' })
// const b = identity<MyUser[]>([{ name: 'Alex' }])
// const as = identity<number[]>([1,2,3])
// console.log(n, s, a)

/* ---------- 2. Generics з масивами ---------- */
// function firstElement<T>(arr: T[]): T {
//   return arr[0]
// }
// const firstNum = firstElement<number>([1, 2, 3])
// const firstStr = firstElement<string>(['Alice', 'Bob'])
// console.log(firstNum, firstStr)
// create type with name = T > number[]
// function firstElement<T>(arr: T[]): T {
//   return arr[0]
// }
// const firstNum = firstElement<number[]>([[1],[ 2], [3]])
// const firstStr = firstElement<string>(['Alice', 'Bob'])
// console.log(firstNum, firstStr)

/* ---------- 3. Дженерик інтерфейс: узагальнений тип API відповіді ---------- */
interface ApiResponse<T> {
  data: T
  status: number
}

interface Todo {
  id: number
  title: string
}

interface User {
  id: string
  username: string
  score: number
}

const getTodosResponse: ApiResponse<Todo[]> = {
  data: [{ id: 1, title: 'Learn generics' }],
  status: 200,
}

const createUserResponse: ApiResponse<User> = {
  data: { id: 'some-id', username: 'Jacob', score: 50 },
  status: 201,
}
console.log(createUserResponse.data.username)
console.log(getTodosResponse.data[0].title)

// interface User2 {
//   name: string
// }
// interface User<T> {
//   name: string
//   age: number
//   someExtraInfo: T
// }
// const user: User<User2> = {
//   name: 'Alex',
//   age: 42,
//   someExtraInfo: { name: 'Alex' },
// }
// user.someExtraInfo.name
