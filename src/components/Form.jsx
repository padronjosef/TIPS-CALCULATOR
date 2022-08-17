import { useState } from 'react'
import { Input } from './Input'

export const Form = ({ addNewFood }) => {
  const emptyValues = { name: '', cost: '', amount: '' }

  const [itemValues, setItemValues] = useState(emptyValues)
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  const { name, cost, amount } = itemValues

  const handleChange = ({ target }) => {
    setShowErrorMessage(false)
    setItemValues(prevState => ({
      ...prevState, [target.name]: target.value
    }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    setShowErrorMessage(false)

    const valuesToCheck = Object.entries(itemValues)
    const formNotComplete = valuesToCheck.some(item => !item[1].trim())

    if (formNotComplete) {
      setShowErrorMessage(true)
      return
    }

    setItemValues(emptyValues)
    addNewFood(itemValues)
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2 className='form__title'>Add a food</h2>
      <Input name='name' onChange={handleChange} value={name} />
      <Input name='cost' onChange={handleChange} value={cost} type="number" />
      <Input name='amount' onChange={handleChange} value={amount} type="number" />
      {showErrorMessage && <p className='form__error'>All the field are required</p>}
      <div></div>
      <button className='form__bottom'>Add Food</button>
    </form>
  )
}
