import { useState, useEffect } from 'react'
import { Tips, List, Form } from './components';
import './App.css'

const _FOOD = [
  { name: 'Hamburger', cost: 34.222, amount: 2 },
  { name: 'French fries', cost: 15, amount: 4 }
];

function App() {
  const [food, setFood] = useState([])

  useEffect(() => {
    const localFood = JSON.parse(localStorage.getItem('food'))
    setFood(localFood?.length ? localFood : _FOOD)
  }, [])

  const saveData = data => {
    setFood(data)
    localStorage.setItem('food', JSON.stringify(data))
  }

  const addNewFood = newFood => {
    const dataToSave = [...food, newFood]

    saveData(dataToSave)
  }

  const deleteFood = indexToDelete => {
    const removeByIndex = food.filter((_, i) => i !== indexToDelete);

    saveData(removeByIndex)
  }

  const editFood = (foodEdited, indexToDelete) => {
    const removeByIndex = food.filter((_, i) => i !== indexToDelete);

    const modifiedFood = [
      ...removeByIndex.slice(0, indexToDelete),
      foodEdited,
      ...removeByIndex.slice(indexToDelete)
    ]

    saveData(modifiedFood)
  }

  return (
    <div className="app">
      <Tips food={food} />
      <div className='app__wrapper'>
        <Form addNewFood={addNewFood} />
        <List food={food} deleteFood={deleteFood} editFood={editFood} />
      </div>
      {!food.length && <p className='app__no-food'>
        No food to show, reload to add the default food or try to add one
      </p>}
    </div>
  )
}

export default App
