import React, { useState } from 'react'
import '../styles/Todo.css'
import List from './List'

const Todo = () => {
    const[editMode,setEditMode]=useState(false);
    const[todo,setTodo]=useState("");
    const[updateTodo,setUpdateTodo]=useState({message:'',id:null});
    const[list,setList]=useState([]);
    
    const handleClick=()=>{
        const newTodo={
          message:todo,
          id:new Date().getTime(),
        }
        setList([...list,newTodo])
    };  

    const handleUpdate=(item,id)=>{
      setEditMode(true);
      setUpdateTodo({
        message:item.message,
        id:id
      })   

    }

      const update=()=>{
        let updateText1;
        list.forEach(element => {
          if(element.id===updateTodo.id)
          {
            console.log(element.message)
            updateText1={
              message:document.getElementById('#updateText').value,
              id:updateTodo.id
            }
            
            setList([updateText1]);
          }
        });
        setEditMode(false);
        setUpdateTodo({message:'',id:null})
      }
      
    const handleDelete=(id)=>{
        let arr=list.filter((item)=>{return item.id!==id});
        setList(arr);
    }

    console.log(list);
    console.log(updateTodo.message);
  return (
    <div className='todoContainer'>
      <div className="header">
        <h1>TODO LIST</h1>
      </div>
      <div className="todoBox">
        <input type="text" id="inputBox" onChange={(e)=>{setTodo(e.target.value)}}/>
        <button className='addBtn' onClick={handleClick}>Add</button>
      </div>
      {
        editMode?
          <div>
            <input type="text" id="updateText" onChange={(e)=>{setUpdateTodo({message:e.target.value})}} value={updateTodo.message}/>
            <button  className='addBtn' onClick={update}>Update</button>
          </div>:null
        
      }
      {list?.map((item)=>{
          return <List key={item.id} handleUpdate={handleUpdate} handledelete={handleDelete} message={item}/>
      })}
    </div>
  )
}

export default Todo
