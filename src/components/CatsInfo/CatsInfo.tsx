// interface CatsInfoProps {
//   catName: string
//   imgSrc: string
//   email: string
// }
interface Cat {
  id: number
  name: string
  age: number
  email: string
  image: string
  available: boolean
}
interface CatsInfoProps {
  catData: Cat
  extraInfo?: string
}

// if(cat.id > 3){
//   <p>ID: {id}</p>
// }

const CatsInfo = ({ catData }: CatsInfoProps) => {
  return (
    <div>
      {/* {catData.id > 3 ? `Cat ID: ${catData.id}` : 'Low ID'} */}
      {catData.id > 3 && `Cat ID: ${catData.id}`}
      {catData.id || `Cat ID: ${catData.id}`}

      <h2>Name: {catData.name}</h2>
      <img src={catData.image} alt='' width={100} />
      <p>Email: {catData.email}</p>
    </div>
  )
}

export default CatsInfo

// const first = (second) => {
//   // return 1?0:0
//   return 2+2 > 4 || false
//  }
// const first = (second) => {
//   return switch (key) {
//     case value:

//       break;

//     default:
//       break;
//   }()
//  }
