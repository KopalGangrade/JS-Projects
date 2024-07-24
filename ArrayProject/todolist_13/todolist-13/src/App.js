// import './App.css';
// import TodoInput from './components/TodoInput';
// import TodoList from './components/TodoList';
// import { useState } from 'react';


// function App() {
//   const [ListTodo, setListTodo] = useState([]);
//   let addList = (inputText)=>{
//     setListTodo([...ListTodo,inputText]);
//   }

//   const deletListItem =(key)=>{
//     let newListTodo = [...ListTodo];
//     newListTodo.splice(key,1)
//     setListTodo([...ListTodo]);
//   }
//   return (
//     <div className="App">
//       <TodoInput addList={addList}/>
//       {/* <TodoList/> */}

//       <h1 className='app-handing'>TODO</h1>
//       <hr/>
//       {ListTodo.map((listItem,i)=>{
//         return(
//           <TodoList key={i} index={i} item={listItem} deleteItem={deletListItem}/>
//       )  
//     })}
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react'
import "./App.css"
import TodoInput from './components/TodoInput'
import Todolist from './components/TodoList';
function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList}/>
        <h1 className="app-heading">TODO</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return (
            <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div>
  )
}

export default App