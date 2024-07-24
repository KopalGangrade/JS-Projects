import React from 'react'
import { useState } from 'react'

// const TodoInput = (props) => {
//     const [inputText, setInputText] = useState("");
//   return (
//     <div className='container'>
//         <input type='text' className='input' placeholder='Enter your TODO' value={inputText} onChange={e=>{setInputText(e.target.value)}}/>
//         <button className='add-btn' onClick={()=>{props.addList(inputText).setInputText("")}}>+</button>
//     </div>
//   )
// }
// export default TodoInput

// import React,{useState} from "react";

function TodoInput(props) {
    const [inputText,setInputText] = useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }
  return (
    <div className="input-container">                                                                                               
      <input type="text" className="input-box-todo" placeholder="Enter your todo" value={inputText} onChange={e=>{
            setInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress}
      />
      <button className="add-btn" 
      onClick={()=>{
        props.addList(inputText)
        setInputText("")
      }}>+</button>      
    </div>
  );
}

export default TodoInput;