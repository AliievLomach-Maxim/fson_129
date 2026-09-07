import { useId } from 'react'
import css from './OrderForm.module.css'

export default function OrderForm() {
  const uniqId = useId()

  const handleSubmit = (formData: FormData) => {
    const data = Object.fromEntries(formData)
    console.log('data', data)
  }

  return (
    <form className={css.form} action={handleSubmit}>
      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Client info:</legend>
        <label className={css.label} htmlFor={`${uniqId}-name`}>
          Name
        </label>
        <input id={`${uniqId}-name`} className={css.input} type='text' name='username' />

        <label className={css.label} htmlFor={`${uniqId}-email`}>
          Email
        </label>
        <input id={`${uniqId}-email`} className={css.input} type='email' name='email' />
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Delivery method:</legend>
        <label className={css.option}>
          <input type='radio' name='delivery' value='pickup' />
          Pickup
        </label>
        <label className={css.option}>
          <input type='radio' name='delivery' value='courier' />
          Courier
        </label>
        <label className={css.option}>
          <input type='radio' name='delivery' value='drone' defaultChecked />
          Drone delivery
        </label>
      </fieldset>

      <button type='submit' className={css.button}>
        Place order
      </button>
    </form>
  )
}
