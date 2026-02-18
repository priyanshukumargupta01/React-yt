import React from 'react'
import Card from './componenet/Card'


const App = () => {
  return (
    
    <div className="parent">
      <Card user="Priya Rani" age={12} img="https://th.bing.com/th/id/OIP.IGWfpT_wKB3AyT-TAoNCbgHaEK?w=312&h=180&c=7&r=0&o=7&cb=defcache2&dpr=1.3&pid=1.7&rm=3&defcache=1"/>
      <Card user="Priyanshu" age={22} img="https://th.bing.com/th/id/OIP.HAI6yARrc8rhYt4ezFUbqgHaEn?w=248&h=180&c=7&r=0&o=7&cb=defcache2&dpr=1.3&pid=1.7&rm=3&defcache=1"/> 
      <Card user="Priyam" age={17} img="https://th.bing.com/th/id/OIP.AlfF7Y_KVhhky55JlD30zwHaE8?w=263&h=180&c=7&r=0&o=7&cb=defcache2&dpr=1.3&pid=1.7&rm=3&defcache=1"/>
    </div>
    
  )
}

export default App