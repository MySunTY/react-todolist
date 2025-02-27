import { useNavigate, useParams } from "react-router-dom"
import Button from "../components/Button"
import FormInput from "../components/FormInput"
import TodoStatus from "../components/TodoStatus"
import "./styles/page.css"
import { useState } from "react"

const setInitData= (id) =>{
  const savedTodoList = localStorage.getItem("todo-list") ||  "[]";
  const parsedTodoList = JSON.parse(savedTodoList);

  const todoData = parsedTodoList.find((todo)=> todo.id === id);
  return todoData;
}

function TodoDetailPage() {
  const navigate = useNavigate();
  const params = useParams();
  const todoId = Number(params.id);
  const [editData, setEditData] = useState(()=> setInitData(todoId))
  
  
  const onChangeTodoState=(todo)=>{
    setEditData(todo);
  }
  const onClickUpdate=()=>{
    const savedTodoList = localStorage.getItem("todo-list") || "[]";
    const parsedTodoList = JSON.parse(savedTodoList);
    const updatedTodoList = parsedTodoList.map((savedTodo)=>{
      if(savedTodo.id === todoId){
        return{
          ...savedTodo,
          ...editData,
        }
      }
      return savedTodo;
    });
    localStorage.setItem("todo-list",JSON.stringify(updatedTodoList));
    navigate("/");
  }
  const onClickDelete= ()=>{
    const savedTodoList = localStorage.getItem("todo-list") || "[]";
    const parsedTodoList = JSON.parse(savedTodoList);
    const changedTodoList = parsedTodoList.filter((savedTodo)=> savedTodo.id !== todoId);
    localStorage.setItem("todo-list",JSON.stringify(changedTodoList));
    navigate("/");
  }
  const onClickBack=()=>{
    navigate("/");
  }

  return (
    <div className="page-wrapper">
        <Button onClickButton={onClickBack} label="back" type="normal" size="sm" />
        <h2>
            Todo Detail<TodoStatus type="todo"  />
        </h2>
        <FormInput onChangeTodoState={onChangeTodoState} editData={editData} />
        <div className="tododetail-buttons-wrapper">
            <Button onClickButton={onClickUpdate} label="Update" type="primary" size="lg" /><br />
            <Button onClickButton={onClickDelete} label="Delete" type="danger" size="lg" />
        </div>
        
    </div>
  )
}

export default TodoDetailPage