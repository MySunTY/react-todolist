import { useNavigate } from "react-router-dom"
import Button from "./Button"
import "./styles/TodoItem.css"

const TodoItem = ({title,id,type,completedDate})=>{
    const onClickComplete=()=>{
        
        const savedData = localStorage.getItem("todo-list") || "[]";
        const parsedData = JSON.parse(savedData);
        //완료시킬 타겟데이터
        const targetData = parsedData.find((todo)=> todo.id===id);
        console.log(targetData);

        //완료시킬 타겟데이터를 기존 투두리스트에서 제거
        const removedTodolistData = parsedData.filter((todo)=>todo.id !==id);
        //완료된 데이터를 제외한 나머지 데이터 저장
        
        localStorage.setItem("todo-list",JSON.stringify(removedTodolistData));
        
        const completedData = {... targetData , completedDate : new Date().getTime()};

        const savedFinishList =  localStorage.getItem("todo-finish-list") || "[]";
        const parsedFinishList = JSON.parse(savedFinishList);
        parsedFinishList.unshift(completedData); //완료된 목록을 배열에 추가
        localStorage.setItem("todo-finish-list",JSON.stringify(parsedFinishList));
        
        //화면 새로고침
        window.location.reload();
        
        
    }

    return(
        <div className="todoItem-wrapper">
            <div className="todoItem-title">{title}</div>
            <div className="todoItem-subtitle">
                {type==='todo' 
                ? <Button label={"완료"} size="xs" onClickButton={onClickComplete} /> 
                : new Date(completedDate).toISOString().split("T")[0] }
            </div>
            
            
        </div>
    )
}

export default TodoItem