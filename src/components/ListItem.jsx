import { useState } from 'react'
import './styles.css'

export const ListItem = ({ item = {}, index, deleteFood, editFood }) => {
  const [isDisabled, setIsDisabled] = useState(true)
  const [itemValues, setItemValues] = useState(item)

  const { name, cost, amount } = itemValues

  const handleChange = ({ target }) => {
    setItemValues(prevState => ({
      ...prevState, [target.name]: target.value
    }))
  }

  const toggleEdit = () => {
    const valuesToCheck = Object.values(itemValues)
    const formNotComplete = valuesToCheck.some(item => !item)

    if (!isDisabled) {
      !formNotComplete && editFood(itemValues, index)
    }

    setIsDisabled(!isDisabled)
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const handleDelete = () => {
    deleteFood(index)
    setIsDisabled(!isDisabled)
  }

  const costFormat = isDisabled ? formatter.format(cost) : cost

  return (
    <li className='food__item' >
      <input type='text' name='name' value={name} disabled={isDisabled} onChange={handleChange} />
      <input type='text' name='cost' value={costFormat} disabled={isDisabled} onChange={handleChange} />
      <input type='number' name='amount' value={amount} disabled={isDisabled} onChange={handleChange} />
      {isDisabled ? (
        <button className='food__edit' onClick={toggleEdit}>✎</button>
      ) :
        <>
          <button className='food__save' onClick={toggleEdit}>✓</button>
          <button className='food__delete' onClick={handleDelete}>X</button>
        </>
      }
    </li>
  )
}
