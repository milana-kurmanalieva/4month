import React from 'react'
import About from '../about/About'
import Title from '../title/Title'


const MainPage = () => {
  return (
    <div>
        <About info={{title: 'Its Milana', body: 'happy hacking'}}/>
        <Title title={'Hello world'}/>
    </div>
  )
}

export default MainPage