import { useState } from 'react'

export const Tips = ({ food }) => {
  const [tip, setTip] = useState()

  const totalCost = food.length ? food.reduce((acum, { cost, amount }) => acum + (Number(cost) * Number(amount)), 0) : 0

  const getPercentage = (total, percentage) => (total / 100) * percentage + Number(totalCost)

  const totalWithTip = tip ? getPercentage(totalCost, tip) : totalCost


  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const handleChange = ({ target }) => {
    if (target.value >= 100) return setTip(100)
    if (target.value < 0) return setTip('')
    setTip(target.value)
  }

  const placeholderMessage = totalCost ? 'Add a tip for the great service' : 'Food needed to add some tip'

  return (
    <div className='tips'>
      <h1>Tips Calculator</h1>
      <input className='tips__input' type="number" name="tip" onChange={handleChange} value={tip} placeholder={placeholderMessage} disabled={!totalCost} />
      {totalCost ? (
        <div className='tips__info'>
          <p className='tips__no-tip'>Total: {formatter.format(totalCost)}</p>
          <p className='tips__with-tip'>With Tip: {formatter.format(totalWithTip)}</p>
        </div>
      ) : null}
    </div>
  )
}
