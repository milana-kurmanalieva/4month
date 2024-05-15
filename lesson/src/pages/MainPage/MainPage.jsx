import React from 'react'
import style from './MainPage.module.css'
import Description from '../../components/ Description/ Description'


const MainPage = () => {
  return (
    <div className={style.test}>
      <Description info={{title: 'Title', description: 'description'}}/>
    </div>
  )
}

export default MainPage