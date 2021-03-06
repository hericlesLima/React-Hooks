import React, { useState, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseState = (props) => {
  //useState

  const [count, setCount] = useState(0);
  const [name, setName] = useState(" ");
  
  //useEffect

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, 
  [count]
  );

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />
      <SectionTitle title="Exercicio #01">
        <div className="center">
          <span className="text">{count}</span>
          <div>
            <button className="btn" onClick={() => setCount(count - 1)}>
              -1
            </button>
            <button className="btn" onClick={() => setCount(count + 1)}>
              +1
            </button>
            <input
              type="number"
              className="input"
              onChange={(e) => setCount(e.target.value)}
            />
            <button className="btn" onClick={() => setCount(parseInt(count) + 1)}>
              +1
            </button>
          </div>
        </div>
      </SectionTitle>

      {/*Important*/}

      <SectionTitle title="Exercicio #02">
        <input
          type="text"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h1>{name}</h1>
      </SectionTitle>
    </div>
  );
};

export default UseState;
