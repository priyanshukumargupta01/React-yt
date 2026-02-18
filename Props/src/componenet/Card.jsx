import React from 'react' 

const Card = (props) => { 
  return (
      
        <div className="card">
              <img src={props.img} alt="" />
              <h1>{props.user}</h1>
              <p>Lorem ipsum dolor sit amet, consectetur  8adipisicing elit. Ut minus alias nobis.</p>
              <button>View Profile</button>
             
      </div>
   )
}

export default Card
