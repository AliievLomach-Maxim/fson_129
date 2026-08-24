/**
 * - Union
 * - Літеральні типи
 */

/***************** 1 *****************/

type OrderStatus = 'pending' | 'shipped' | 'delivered' | 'canceled'
// "pending", "shipped", "delivered", "canceled"
let status: OrderStatus = 'pending'

status = 'delivered'
status = 'shipped'

/***************** 2 *****************/
// delivery: "drone", "courier", "pickup"
// deliveryTime: "morning", "afternoon", "evening"
// type OrderDelivery = 'drone' | 'courier' | 'pickup'
// type OrderDeliveryTime = 'morning' | 'afternoon' | 'evening'

interface Order {
  username: string
  email: string
  total: number
  delivery: 'drone' | 'courier' | 'pickup'
  deliveryTime: 'morning' | 'afternoon' | 'evening'
  status: OrderStatus
}

const order: Order = {
  username: 'Jacob',
  email: 'j.mercer@mail.com',
  total: 120,
  delivery: 'courier',
  deliveryTime: 'afternoon',
  status: 'shipped',
}

console.log(status, order)

// interface User {}
// let user:User | null = null
// user = await fetch ('/getUserFromApi')
// user = null
