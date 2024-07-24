// import React from 'react'

// const TodoList = (props) => {
//   return (
//     <div style={{margin:"40px" , border:"10px" , borderColor:'red'}}>
//         <li className="">
//         {props.item}
//         <span style={{marginLeft:"30px"}} onClick={(e)=>
//             {
//                 props.deleteItem(props.index);
//             }
//         }><i className="fa-solid fa-trash-can icon-delete"></i></span>

//         </li>
        
//     </div>
//   )
// }

// export default TodoList



import React from 'react'

function Todolist(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete" 
        onClick={e=>{
            props.deleteItem(props.index)
        }}></i>
        </span>
    </li>
  )
}

export default Todolist

