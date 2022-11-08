import React from 'react'

import UiButton from '../components/ui/UiButton'



export default function auth () {
  
  function login() {
    console.log('login')
  }

  function register() {
    console.log('register')
  }

    return (
      <div className='login-container'>
        <p className='login-title'>Junior Job</p>
        <p className='login-subtitle'>Начни зарабатывать вместе с нами!</p>

        <div className="login-button-container">
          <UiButton 
            text={'Войти'} 
            callback={login} 
            otherClass={'login-margin-button'} 
            isHref={true}
            path={'/auth-login'}
          />
          <UiButton 
            text={'Зарегистрироваться'} 
            callback={register} 
            isHref={true}
            path={'/auth-create'}
          />
        </div>
      </div>
    )
}
