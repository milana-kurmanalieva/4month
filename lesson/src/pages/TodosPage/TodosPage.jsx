import React, { useState } from 'react'
import Todo from '../../components/ Todo/ Todo'
import style from './TodosPage.module.css'


const TodosPage = () => {
     

    const [array, setArray]= useState(["todo 1", "todo 2", "todo 3"])
  return (
    <div className={style.title}> 
        {array.map(todo => <Todo todoInfo={todo}/>)}
    </div>
  )
}

export default TodosPage