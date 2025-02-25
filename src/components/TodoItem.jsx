import "./styles/TodoItem.css"

const TodoItem = ({title})=>{
    return(
        <div className="todoItem-wrapper">
            <div className="todoItem-title">{title}</div>
        </div>
    )
}

export default TodoItem