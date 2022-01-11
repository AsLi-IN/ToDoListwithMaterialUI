import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ListCom from "./ListCom";
const ToDoList = () => {
  const [item, setitem] = useState();
  const [newitem, setnewitem] = useState([]);
  const itemevent = (event) => {
    setitem(event.target.value);
  };
  const storedata = () => {
    setnewitem((olditem) => {
      return [...olditem, item];
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> TODO LIST</h1>
          <br />
          <input type="text" placeholder="Add an item" onChange={itemevent} />
          <Button className="newBtn" onClick={storedata}>
            <AddIcon />
          </Button>
          <br />
          <ol>
            {newitem.map((currval, index) => {
              return <ListCom text={currval} key={index} indx={index} />;
            })}
          </ol>
          <br />
        </div>
      </div>
    </>
  );
};
export default ToDoList;
