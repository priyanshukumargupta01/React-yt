import React from "react";

const Card = (props) => {

  return (
    <div>
      <div className="card">
        <div className="top">
          <img src={props.brandLogo} alt="" />
          <button>Save </button>
        </div>
        <div className="center">
          <h3>
            {props.company} <span>{props.date}</span>
          </h3>
          <h2>{props.post}</h2>
          <div className="tag">
            <h5>{props.tag1}</h5>
            <h5>{props.tag2}</h5>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
