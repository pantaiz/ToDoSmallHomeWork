import React from "react";
import {TasksType} from "./App";
export type TasksProps={
    data:TasksType
}


export const Tasks = (props:TasksProps) => {
  return(
      <div><h1>{props.data.title}</h1>
          {props.data.tasks.map(a=>{
              return(<li key={a.taskId}><input type="checkbox" checked={a.isDone}/> <span>{a.title}</span></li>
              )
          })}<ol>
          {props.data.students.map(a=><li>{a}</li>)}</ol>
      </div>

  )
}