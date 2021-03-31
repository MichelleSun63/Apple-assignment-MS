import React from "react";
export default function List(props) {
  return (
    <div>
      <h4>{props.title}</h4>
      {props.data.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt="movie image" />
          {item.title}
          <button onClick={() => props.method(item)}>{props.button}</button>
        </div>
      ))}
    </div>
  );
}
