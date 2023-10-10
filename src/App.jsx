import './App.css';
import { useState } from 'react';

function App() {

  const[quote,setQuote]=useState({quotes :'We become what we think about'})

  const quotegenerate=()=>{
    fetch('https://dummyjson.com/quotes')
    .then(res=>res.json())
    .then(data=>{console.log(data)
                var num=Math.floor(Math.random()*30);
                var test=data.quotes[num].quote;
                var auth=data.quotes[num].author
                console.log(num)
                const randquote={
                  quotes:test,
                  author:auth
                }
                setQuote(randquote)
    }
    );
  }
  return (
    <div className="App">
      <div className="container">
        <h1>Quote Generator</h1>
        <p>{quote.quotes}</p>
        <button onClick={quotegenerate}>Next &gt;&gt;</button>
      </div>
    </div>
  );
}

export default App;
