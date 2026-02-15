import React from 'react'
import Card from "./component/card"
const name ="Priyanshu"

const App = () => {
  return (
    <div>
      <div className='card'>
        <h1>Priyanshu Gupta</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, consequatur atque illum veritatis debitis maxime laudantium,cccadipisci dicta aut, sint nihil dolores optio!</p>
        <h1>hiiiiiiiiiiiii</h1>
      </div>
      <h1>Hi, my name is {name}</h1>
      <Card />

    </div>
  )
}

export default App
