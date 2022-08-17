export const Input = ({ name = '', value = '', onChange, type = 'text' }) => {
  return (
    <>
      <label className='label'>{name}</label>
      <input placeholder={name} name={name} className='input' type={type} value={value} onChange={onChange} min='1' />
    </>
  )
}
