import React from "react";
import "../styles/List.css";

const List = ({ message ,handledelete,handleUpdate}) => {
  return (
    <div className="messageBox">
      <div className="text">
        <h3>{message.message}</h3>
      </div>
      <div className="button">
        <button className="btn" onClick={()=>{handleUpdate(message,message.id)}}>Update</button>
        <button className="btn2" onClick={()=>{handledelete(message.id)}}>Delete</button>
      </div>
    </div>
  );
};

export default List;
