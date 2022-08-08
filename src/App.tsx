import React, { useEffect, useState } from 'react';
import useInput from './hooks/useInput';
import useTextarea from "./hooks/useTextarea"
import { IDate, IRating, PhotoReaderType, ResponseType, useInputType, useTextareaType } from './models/models';

import { Route, Routes, useNavigate } from 'react-router-dom';
import FirstStepPage from './pages/FirstStepPage/FirstStepPage';
import SecondStepPage from './pages/SecondStepPage/SecondStepPage';
import { usePhotosReader } from './hooks/PhotoReader';
import { isLength, checkValidateAndSetErrors, clearFields } from './pages/FirstStepPage/utils/checkFields';

import './App.css';
import { Context } from './pages/Context/Context';


function App() {

  const organizer: useInputType = useInput("", (text: string) => {
    let isValid = true
    let message = ""
    if (!isLength(text, 3,100)) {
      message = "Имя организатора должно содержать от 3 до 100 символов"
      isValid = false
    } else isValid = true
    return { isValid, message }

  })

  const phone: useInputType = useInput("", (text: string) => {
    let isValid = true
    let message = ""
    if (text.includes("_") || !isLength(text,19,50)) {
      message = "Некорректный номер телефона"
      isValid = false
    } else isValid = true
    return { isValid, message }
  })

  const email: useInputType = useInput("", (text: string) => {
    let isValid = true
    let message = ""
    if (!text.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) || !isLength(text,5,50)) {
      message = "Некорректный E-mail адрес"
      isValid = false
    } else isValid = true
    return { isValid, message }
  })

  const city: useInputType = useInput("", (text: string) => {
    let isValid = true
    let message = ""
    if (!isLength(text, 2, 20)) {
      message = "Город организатора должен содержать от 2 до 50 символов"
      isValid = false
    } else isValid = true
    return { isValid, message }
  })

  const name: useInputType = useInput("", (text: string) => {
    let isValid = true
    let message = ""
    if (!isLength(text, 3, 50)) {
      message = "Название мероприятия должно содержать от 3 до 50 символов"
      isValid = false
    } else isValid = true
    return { isValid, message }
  })

  const description: useTextareaType = useTextarea("",
    (text) => {
      let isValid = true
      let message = ""
      if (!isLength(text, 50, 3999)) {
        message = "Описание должно содержать от 100 до 4000 символов"
        isValid = false
      }
      return { isValid, message }
    })

  const address: useInputType = useInput("", (text: string) => {
    let isValid = true
    let message = ""
    if (!isLength(text, 10, 100)) {
      message = "Адрес должен содержать от 10 до 100 символов"
      isValid = false
    } else isValid = true
    return { isValid, message }
  })

  const startDate: useInputType = useInput("", (text: string) => ({ isValid: !!text, message: "Введите дату начала" }))
  const startTime: useInputType = useInput("", (text: string) => ({ isValid: !!text, message: "Введите время начала" }))
  const endDate: useInputType = useInput("", (text: string) => ({ isValid: !!text, message: "Введите дату конца" }))
  const endTime: useInputType = useInput("", (text: string) => ({ isValid: !!text, message: "Введите время конца" }))

  const [isValid, setIsValid] = useState<boolean>(false)
  const [ratings, setRatings] = useState<IRating[]>([])
  const [dates, setDates] = useState<IDate[]>([])

  const selectedRating: useInputType = useInput("", (text: string) => ({ isValid: true, message: "" }))

  const photoReader: PhotoReaderType = usePhotosReader(1)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: Response = await fetch("http://testwork.rdbx24.ru/api/")
        const body: ResponseType = await response.json()
        setRatings(body.result)
      } catch (error) {
        console.log({ message: "something went wrong", error })
      }
    }
    fetchData();
  }, [])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const errors: number = checkValidateAndSetErrors([organizer, phone, email, city, name,
      description, address, startDate, selectedRating,
      startTime, endDate, endTime])

    if (errors) {
      return
    }

    if (!dates.length) {
      return
    }

    if (!photoReader.previews.length) {
      return
    }

    setIsValid(true)
    navigate("step/two")
  }

  function handleAddDate(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {

    if (!startDate.value || !endDate.value || !startTime.value || !endTime.value) {
      return
    }

    setDates(
      [...dates,
      {
        id: Date.now(),
        startDate: startDate.value,
        endDate: endDate.value,
        endTime: endTime.value,
        startTime: startTime.value
      }])
  }

  function handleClear(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    clearFields([organizer, phone, email, city, name,
      description, address, startDate, selectedRating,
      startTime, endDate, endTime])
    setDates([])
    photoReader.clear()
  }

  const contextValue = {
    organizer, address, email, endDate, endTime,
    city, dates, description, name, phone, setDates,
    setRatings, startDate, startTime, ratings, selectedRating,
    photoReader, isValid, setIsValid, handleSubmit, handleClear, handleAddDate
  }

  return (
    <Context.Provider value={contextValue} >
      <div className="App">
        <main className="main">
          {isValid ?
            <Routes>
              <Route path="step/two" element={
                <SecondStepPage />} />
              <Route path="*" element={
                <FirstStepPage />} />
            </Routes>
            :
            <Routes>
              <Route path="*" element={
                <FirstStepPage />} />
            </Routes>
          }

        </main>
      </div>
    </Context.Provider>
  );
}

export default App;
