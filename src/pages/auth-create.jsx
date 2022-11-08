import React, { useState } from 'react'

import DefaultLayout from "../layouts/default";
import UiButton from '../components/ui/UiButton';
import UiInput from '../components/ui/UiInput';

export default function AuthCreate(props) {
  const [step, setStep] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLaseName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [inn, setInn] = useState('')
  const [studypoxuy, setStudyPoxuy] = useState('')
  const [service, setService] = useState('')
  const [resume, setResume] = useState('')
  const [password, setPassword] = useState('')

  const { history } = props


  function firstStep () {
    console.log('mount')
    const emitJober = () => {
      setStep('jober')
    }

    const emitMaster = () => {
      setStep('master')
    }

    return (
      <div className="page-content auth-create-block">
        <h1 className='text-center' style={{marginBottom: 40 + 'px', fontWeight: 400,}}>Выберите (что??)</h1>

        <div className="button-container">
          <UiButton 
            text={'Для соискателя'}
            callback={emitJober}
          />
          <UiButton 
            text={'Для работодателя'}
            callback={emitMaster}
          />
        </div>
      </div>
    )
  }

  function AuthForm () {

    const changeName = (emitData) => {
      setName(emitData)
    }

    const changeLastName = (emitData) => {
      setLaseName(emitData)
    }

    const changeEmail = (emitData) => {
      setEmail(emitData)
    }

    const changeDate = (emitData) => {
      setDate(emitData)
    }

    const changeInn = (emitData) => {
      setInn(emitData)
    }

    const changeStudyPoxuy = (emitData) => {
      setStudyPoxuy(emitData)
    }

    const changeService = (emitData) => {
      setService(emitData)
    }

    const changeResume = (event) => {
      setResume(event.target.value)
    }

    const changePassword = (emitData) => {
      setPassword(emitData)
    }

    const createAccount = async () => {
      const data = {
        name,
        lastName,
        email,
        date,
        inn,
        studypoxuy,
        service,
        resume,
        password
      }

      console.log(data)
    }
    

    return (
      <div className='auth-cerate-form'>
        <h1 className='text-center' style={{fontWeight: 400}}>Заполните анкету</h1>

        <UiInput 
          placeholder={'Фамилия'}
          callback={changeName}
        />
        <UiInput 
          placeholder={'Имя'}
          callback={changeLastName}
        />
        <UiInput 
          placeholder={'Emai'}
          callback={changeEmail}
        />
        <UiInput 
          placeholder={'Дата рождения'}
          type={'date'}
          callback={changeDate}
        />
        <UiInput  
          placeholder={'ИНН'}
          callback={changeInn}
        />
        <UiInput 
          placeholder={'Место учёбы'}
          callback={changeStudyPoxuy}
        />
        <UiInput 
          placeholder={'Предлагаемая услуга'}
          callback={changeService}
        />

        <div>
          <textarea
            className='auth-form-textaria'
            placeholder='Резюме'
            onChange={changeResume}
          ></textarea>
        </div>

        <UiInput 
          placeholder={'Пароль'}
          type={'password'}
          callback={changePassword}
        />

        <UiButton
          text={'Зарегистрироваться'}
          callback={createAccount}
        />
      </div>
    )
  }

  function AuthCreate () {

    if(!step || step === '') return firstStep()

    else return AuthForm()
  }

  return (
    <DefaultLayout content={ AuthCreate() } history={history} />
  )
}
