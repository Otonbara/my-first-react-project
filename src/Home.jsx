import React from 'react'
import { useState } from 'react'
import './home.css'

function Home() {
  // const title = "i am olodo"
  // const pro = 50
  // const link = 'www.google.com'
  // const handleClick = () => {
  //   console.log("90210");
  //   // document.write("90210");
  // }
  const handleClickAgain = (name) => {
    console.log("3500" + name);
    // document.write(3500 + name)
  }

  // let name = 'juliet';
  const [age, setAge] = useState(23);
  const handleClick3 = () => {
    setAge(24);
    console.log(age);
  }
  return (
    <div className='content'>
          {/* <h2>{ title }</h2>  
          <p>i am { pro } year old</p>
          <a href={ link }> click me for more </a>
          <br /><button onClick={handleClick}>Click</button> */}
          <br /><button onClick={() => handleClickAgain(' otonbara')}>Yikes</button>
          <p>I'm otonbara and, I'm { age }</p>
          <br /><button onClick={handleClick3}>Age</button>
    </div>
  )
}
export default Home