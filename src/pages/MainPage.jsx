import TabMenu from "../components/TabMenu"
import TodoItem from "../components/TodoItem"
import Button from "../components/Button"
import "./styles/page.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function MainPage() {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState([]);
  const [selectedTab, setSeletedTab] = useState('todo');
  const initRender= ()=>{
    //localStorage에 저장된 데이터를 가져온다
    const savedData = localStorage.getItem("todo-list")|| "[]";
    //해당 데이터를 string에서  배열로 변환(JSON.parse())
    const parsedData = JSON.parse(savedData);
    //todoList라는 상태로 저장
    setTodoList(parsedData);
    //그 데이터를 map

  }
  useEffect(()=>{
    
    initRender();
  },[])
  const onClickButton=()=>{
    navigate("/add");
  }

  
  const renderDoneList=()=>{
    const savedData = localStorage.getItem("todo-finish-list") || "[]";
    const parsedData = JSON.parse(savedData);
    setTodoList(parsedData);
    
  }

  const onChangeTab=(menu)=>{
    setSeletedTab(menu);
    if(menu ==='todo'){
      initRender();
    }else if(menu==='done'){
      renderDoneList();
    }
  }
  

  return (
    <div className="page-wrapper">
        <TabMenu onChekingTab={onChangeTab} />
        <div className="todoItemList-wrapper">
            {todoList.length==0 
            ? "데이터가 없습니다" 
            : (
            selectedTab==='todo'?
            todoList.map((todo, index)=>
              <div onClick={()=>navigate(`/detail/${todo.id}`)} key={`todolist-key : ${index}`}>
                <TodoItem
                  id={todo.id}
                  type={selectedTab}
                  
                  completedDate={todo.completedDate} 
                  title={todo.title} />
              </div> 
            ):
            todoList.map((todo, index)=>
              
                <TodoItem
                  id={todo.id}
                  type={selectedTab}
                  key={`todolist-key : ${index}`}
                  completedDate={todo.completedDate} 
                  title={todo.title} />
            ))
             }
        </div>
        
        <Button label={"Add"} size={"lg"} type={"primary"} onClickButton={onClickButton} />
        
    </div>
  )
}

export default MainPage