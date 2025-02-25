import Button from "../components/Button"
import FormInput from "../components/FormInput"
import TodoStatus from "../components/TodoStatus"
import "./styles/page.css"

function TodoDetailPage() {
  return (
    <div className="page-wrapper">
        <Button label="back" type="normal" size="sm" />
        <h2>
            Todo Detail<TodoStatus type="todo"  />
        </h2>
        <FormInput />
        <div className="tododetail-buttons-wrapper">
            <Button label="Update" type="primary" size="lg" /><br />
            <Button label="Delete" type="danger" size="lg" />
        </div>
        
    </div>
  )
}

export default TodoDetailPage