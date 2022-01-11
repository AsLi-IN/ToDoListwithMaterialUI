import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
const ListCom = (props) => {
  const [line, setline] = useState(false);
  const markasdone = () => {
    setline(true);
  };
  return (
    <div className="todo_style" onClick={markasdone}>
      <span>
        <DoneIcon className="deleteIcon" />
      </span>
      <li style={{ textDecoration: line ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
};
export default ListCom;
