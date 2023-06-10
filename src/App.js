import { useState } from "react";
import './style.css'
function App() {
  const [cnt,setcnt]=useState(0);
  function counter(){
    // if(this.value!==undefined)
    setcnt(document.getElementById('counter').value.split(" ").filter((val)=> val.length>0).length);
  }
  return (
    <>
    <div id="container">
      <div>Resposive Paragraph <br /> Word Counter</div>
      <textarea  onKeyUp={()=>{counter()}} name="counter" id="counter" cols="50" rows="10"></textarea>
      <div>Word counter: {cnt}</div>
    </div>
    </>
  );
}

export default App;
