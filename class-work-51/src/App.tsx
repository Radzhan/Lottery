import React, {useState} from 'react';
import './App.css';
import Lotery from "./lotery/lotery";

function App() {
  const [lotary, setLotary] = useState([
    {number: Math.floor(Math.random() * (36 - 5 + 1) + 5)},
    {number: Math.floor(Math.random() * (36 - 5 + 1) + 5)},
    {number: Math.floor(Math.random() * (36 - 5 + 1) + 5)},
    {number: Math.floor(Math.random() * (36 - 5 + 1) + 5)},
    {number: Math.floor(Math.random() * (36 - 5 + 1) + 5)},
  ])

  let btn = () => {
    setLotary([
      {number: Math.floor(Math.random() * (36 - 5 + 1) + 5)},
      {number: Math.floor(Math.random() * (36 - 5 + 1) + 5)},
      {number: Math.floor(Math.random() * (36 - 5 + 1) + 5)},
      {number: Math.floor(Math.random() * (36 - 5 + 1) + 5)},
      {number: Math.floor(Math.random() * (36 - 5 + 1) + 5)},
    ])
  }

  const array = [lotary[0].number, lotary[1].number, lotary[2].number, lotary[3].number, lotary[4].number]


  function unique(arr: number[]) {
    let result: number[] = [];

    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
    while (result.length !== 5) {
      const first = Math.floor(Math.random() * (36 - 5 + 1) + 5);
      if (!result.includes(first)) {
        result.push(first);
      }
    }
    result.sort(function (a, b) {
      return a - b;
    });

    return result;
  }

  const aaray: number[] = unique(array)


  return (
    <div className="App">
      <div className="btnDiv">
        <button onClick={btn}>Get random value</button>
      </div>
      <Lotery number={aaray[0]}/>
      <Lotery number={aaray[1]}/>
      <Lotery number={aaray[2]}/>
      <Lotery number={aaray[3]}/>
      <Lotery number={aaray[4]}/>
    </div>
  );
}

export default App;
