import React from "react";
export default function List(props) {
  return (
    <div>
      <h4>{props.title}</h4>
      {props.data.map((it) => (
        <div key={it.id}>
          <img src={it.img} alt="movie image" />
          {it.title}
          <button onClick={() => props.method(it)}>{props.button}</button>
        </div>
      ))}
    </div>
  );
}
