import { useId } from 'react'

const CustomForm = () => {
  const handleSubmit = (formData: FormData) => {
    // const username = formData.get('username') as string
    // const username2 = formData.get('username2') as string
    // const data = {
    //   username,
    //   username2,
    // }

    const data = Object.fromEntries(formData)
    console.log('data', data)
  }

  const uniqUserFormId = useId()

  const getUniqId = (name: string) => {
    return `${uniqUserFormId}-${name}`
  }

  //   const idUserName = useId()
  //   const idUserName2 = useId()

  return (
    <div>
      <form action={handleSubmit}>
        <label htmlFor={getUniqId('username')}>User Name:</label>
        <br />
        <input type='text' name='username' id={`${uniqUserFormId}-username`} />
        <br />

        <label htmlFor={`${uniqUserFormId}-username2`}>User Name2:</label>
        <br />
        <input type='text' name='username2' id={`${uniqUserFormId}-username`} />
        {/* <label>
            User Name2:
            <br />
            <input type='text' name='username2' />
          </label> */}

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default CustomForm
