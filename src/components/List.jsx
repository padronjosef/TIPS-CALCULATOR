import { ListItem } from './ListItem'
import './styles.css'

export const List = ({ food = [], deleteFood, editFood }) => {
  if (!food.length) return

  return (
    <div className='food'>
      <h2 className='form__title'>Food list</h2>
      <ul className='food__list'>
        {food.map((item, key) => < ListItem key={key + item} item={item} index={key} deleteFood={deleteFood} editFood={editFood} />)}
      </ul>
    </div>
  )
}
