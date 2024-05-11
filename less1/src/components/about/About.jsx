import React from 'react'

const About = ({info}) => {
  return (
    <div>
        <h3>{info.title}</h3>
        <span>{info.body}</span>

    </div>
  )
}

export default About