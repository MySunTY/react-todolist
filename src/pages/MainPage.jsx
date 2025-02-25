import TabMenu from "../components/TabMenu"
import TodoItem from "../components/TodoItem"
import Button from "../components/Button"
import "./styles/page.css"

function MainPage() {
  return (
    <div className="page-wrapper">
        <TabMenu />
        <TodoItem title={"할일 6"} />
        <TodoItem title={"할일 5"} />
        <TodoItem title={"할일 4"} />
        <TodoItem title={"할일 3"} />
        <Button label={"Add"} size={"lg"} type={"primary"} />
    </div>
  )
}

export default MainPage