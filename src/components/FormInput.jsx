import { useState } from "react"
import "./styles/FormInput.css"

function FormInput({onChangeTodoState , editData= {}}) {
    const [todoState, setTotoState] = useState({
        title: editData.title || "",
        content : editData.content || "",
    })
    const [input, setInput] =useState(editData.title || "");
    const [textarea, setTextarea] =useState(editData.content || "")
    const handleChangeInput =(e)=>{
        setInput(e.target.value)
        const resultTodoState = {... todoState, title: e.target.value}

        setTotoState(resultTodoState);
        onChangeTodoState(resultTodoState);
    }
    const handleChangeTextarea = (e)=>{
        setTextarea(e.target.value);
        const resultTodoState = {...todoState, content: e.target.value}
        setTotoState(resultTodoState);
        onChangeTodoState(resultTodoState);
    }
  return (
    <div className="formInput-wrapper">
        
        <label htmlFor="" className="formInput-label">제목</label>
        <div className="formInput-title-wrapper">
            <input type="text" value={input} onChange={handleChangeInput} className="formInput-title" />
        </div>
            
        <label htmlFor="" className="formInput-label">내용</label>
        <div className="formInput-text-wrapper">
            <textarea name="" id="" value={textarea} onChange={handleChangeTextarea} className="formInput-text" />
        </div>
        
        
        
    </div>
  )
}

export default FormInput