// import { useState } from 'react'

// interface TotalValueProps {
//   obj: object
// }

// const TotalValue = ({ obj }: TotalValueProps) => {
//   const [total, setTotal] = useState(0)

//   const generateTotal = () => {
//     for (const key in obj) {
//       if (!Object.hasOwn(obj, key)) continue
//       //   const v = obj[key]
//       setTotal((prev) => prev + obj[key])
//     }
//   }

//   return (
//     <>
//       <button onClick={generateTotal}>generate total</button>
//       <h2>{total}</h2>
//     </>
//   )
// }

// export default TotalValue
