import Button from "../components/Button"
import FormInput from "../components/FormInput"
import "./styles/page.css"

function TodoAddPage() {
  return (
    <div className="page-wrapper">
        <Button label={"back"} size={"sm"} type={"normal"} />
        <h2>Todo Add Page</h2>
        <FormInput />
        <Button label="Submit" size="lg" type="primary" />
    </div>
  )
}

export default TodoAddPage