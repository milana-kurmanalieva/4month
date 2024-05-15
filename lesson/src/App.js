import React from 'react'
import MainPage from './pages/MainPage/MainPage'
import AboutPage from './pages/AboutPage/AboutPage'
import TodosPage from './pages/TodosPage/TodosPage'

const App = () => {
  return (
    <div className='center'>
      <MainPage/>
      <AboutPage/>
      <TodosPage/>
    </div>
  )
}

export default App