// /**
//  * Перелічення (enum) - це список іменованих констант, які можна використовувати як значення, а не тип.
//  *
//  * - Union type (наприклад: "pending" | "fulfilled") - легший і часто кращий вибір,
//  *   якщо вам потрібен тільки набір допустимих типів.
//  * - Enum створює реальний об'єкт в рантаймі (корисно для значень, які
//  *   потрібно перевіряти або передавати як значення в коді).
//  *
//  * Правило: якщо не потрібен runtime-об'єкт - візьміть union type.
//  */

// /* ---------- 1. Union type vs Enum (строкові значення) ---------- */
// // Рекомендується починати з union type:
// // type StatusUnion = 'pending' | 'fulfilled' | 'rejected'
// // let status: StatusUnion = 'fulfilled'
// // switch (status) {
// //   case 'fulfilled':
// //     break

// //   default:
// //     break
// // }

// // enum Status {
// //   Pending = 'pending',
// //   Completed = 'completed',
// //   Error = 'error',
// // }

// // let status: Status = Status.Pending
// // switch (status) {
// //   case Status.Pending:
// //     break

// //   default:
// //     break
// // }

// // type HttpResponse = 200 | 400 | 201 | 500

// // enum HttpResponse {
// //   Success = 200,
// //   ServerError = 500,
// //   NotFound = 404,
// //   ToManyRequests = 409,
// //   NotAphorized = 401,
// // }
// // let response: HttpResponse = HttpResponse.Success
// // switch (response) {
// //   case HttpResponse.Success:
// //   case HttpResponse.NotFound:
// //   case HttpResponse.ServerError:
// //     break

// //   default:
// //     break
// // }

// // Якщо потрібен runtime-об'єкт (наприклад для перебору або передачі в коді):
// // enum StatusEnum {
// //   Pending = 'pending',
// //   Fulfilled = 'fulfilled',
// //   Rejected = 'rejected',
// // }

// // Використання union type (тип лише для перевірки компілятором):
// let s1: StatusUnion = 'pending'
// // s1 = "unknown"; // помилка: невалідне значення

// // Використання enum (є значення в runtime):
// let s2: StatusEnum = StatusEnum.Pending
// // console.log(StatusEnum.Pending) // => "pending"

// /* ---------- 2. Numeric enums ---------- */
// enum HTTPCode {
//   Success = 200,
//   Created = 201,
//   BadRequest = 400,
//   ServerError = 500,
// }

// const code: HTTPCode = HTTPCode.Success

// /* ---------- 3. String enums (стабільні і зрозумілі) ---------- */
// // enum Role {
// //   Admin = 'admin',
// //   User = 'user',
// //   Guest = 'guest',
// // }
// // enum Role {
// //   ADMIN = 'ADMIN',
// //   USER = 'USER',
// //   Guest = 'guest',
// // }

// // interface User {
// //   username: string
// //   role: Role // використовуємо enum як тип і як значення
// // }

// // const user: User = {
// //   username: 'jacob',
// //   role: Role.Guest,
// // }
// // type Role = 'admin' | 'user' | 'guest'
// // enum Role {
// //   ADMIN = 'ADMIN',
// //   USER = 'USER',
// //   Guest = 'guest',
// // }
// // interface User {
// //   username: string
// //   role: Role // використовуємо enum як тип і як значення
// // }

// // const user: User = {
// //   username: 'jacob',
// //   role: 'guest',
// // }
