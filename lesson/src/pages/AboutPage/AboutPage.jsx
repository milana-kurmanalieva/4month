import React from 'react'
import Description from '../../components/ Description/ Description'
import style from './AboutPage.module.css'

const AboutPage = () => {
  return (
    <div className={style.todo}>
        <Description info={{title: 'title 2', description: 'description2'}}/>
    </div>
  )
}

export default AboutPage