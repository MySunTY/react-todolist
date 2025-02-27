import { useState } from "react"
import Button from "../components/Button"
import FormInput from "../components/FormInput"
import "./styles/page.css"
import { useNavigate } from "react-router-dom"

function TodoAddPage() {
  const navigate = useNavigate();
  const [todo, setTodo] = useState({
    title: "",
    content: "",
  })
  const onChangeTodoState= (data)=>{
    //data = {title : "", content: ""}
    setTodo(data);
    
  }
  const onClickSubmit= ()=>{
    //localStorage에 저장 배열형태를 JSON.stringify를 이용해서 string으로 저장
    //기존데이터를 가져와서 배열로 번환, (JSON.parse())
    //기존데이터에 새로운 todo데이터를 추가

    //기존 키값이 todo-list인 데이터를 가져와서 배열로 변환
    const savedData = localStorage.getItem("todo-list") || "[]";
    const parsedData = JSON.parse(savedData);

    //새로운 데이터를 제일앞에추가
    parsedData.unshift({...todo, id: new Date().getTime()});

    const saveTodoListData = JSON.stringify(parsedData);
    localStorage.setItem("todo-list",saveTodoListData);
    //localStorage에 저장후 메인페이지로 이동
    navigate("/");
  }
  const onClickBack=()=>{
    navigate("/");
  }
  return (
    <div className="page-wrapper">
        <Button label={"back"} size={"sm"} type={"normal"} onClickButton={onClickBack} />
        <h2>Todo Add Page</h2>
        <FormInput onChangeTodoState={onChangeTodoState} />
        <div className="todoAdd-btn-wrapper">
          <Button label="Submit" size="lg" type="primary" onClickButton={onClickSubmit} />
        </div>
        
    </div>
  )
}

export default TodoAddPage