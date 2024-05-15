import React from 'react'
import style from './Description.module.css'

const  Description = ({info}) => {
  return (
    <div className={style.text}>
        <h3>Title: {info.title}</h3>
        <h3>Description: {info.description}</h3>
    </div>
  )
}

export default  Description