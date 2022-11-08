import { useState } from "react"


export default function UiInput (props) {
  const { type = 'text', placeholder, callback} = props
  const [value, setValue] = useState('')

  const setInputValue = (event) => {
    const newValue = event.target.value
    setValue(newValue)
    callback(newValue)
  }


  return (
    <div>
      <input 
        className='ui-input'
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={setInputValue}
      />
    </div>
  )
}