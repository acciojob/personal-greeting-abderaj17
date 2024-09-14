
import { set } from "cypress/types/lodash";
import React,{useState} from "react";

const App = () => {
  const[Text, setText]=useState(0);
  console.log(Text);
  return (
    <div>
        <label htmlFor="ip">Enter your name:</label> <br/>
        <input id="ip" type="text" onChange={(e)=>{
          setText(e.target.value)
        }}/>

        <p>{Text && `Hello {Text}!`}</p>
    </div>
  )
}

export default App
