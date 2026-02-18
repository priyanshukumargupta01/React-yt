import React from "react";
import Card from "./component/Card";
import User from "./component/User";

const App = () => {
  const arr = [
    { user: "hello" ,age:"9"},
    { user: "llo" ,age:"9" },
    { user: "hel" ,age:"9"},
    { user: "helloo" ,age:"9"},
  ];

  return (
    <div className="parent">
      {arr.map(function (a) {
        return (a.age);
      })}
    </div>
  );
};

export default App;
{
  /* <Card />
    <Card /> */
}
