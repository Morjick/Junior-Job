import { useState } from "react";
import UiInput from "../components/ui/UiInput";
import UiButton from "../components/ui/UiButton"
import DefaultLayout from "../layouts/default";



export default function AuthLogin (props) {
  const { history } = props

  function AuthLoginComponent() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const changeEmail = (emitData) => {
      setEmail(emitData)
    }

    const changePassword = (emitData) => {
      setPassword(emitData)
    }

    const login = async () => {
      if(!email.length > 1 || !email.includes('@') || !email.includes('.')) {
        setError('Укажите корректный email')
        return
      }
      
      if(!password || password.length < 6) {
        setError('Укажите корректный пароль')
        return
      }

      setError('')

      console.log(email, password)
    }


    return (
      <div className='login-container login'>
        { error.length > 1 ? <p className="error-trigger-text">{ error }</p> : '' }

        <UiInput 
          callback={changeEmail}
          placeholder={'Введите свой email'}
        />

        <UiInput 
          callback={changePassword}
          placeholder={'Введите свой пароль'}
          type={'password'}
        />

        <UiButton 
          text={'Войти'}
          callback={ login }
        ></UiButton>
      </div>
    )
  }

  return (
    <DefaultLayout history={history} content={ AuthLoginComponent()  } />
  )
}