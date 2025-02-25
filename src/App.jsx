import TabMenu from "./components/TabMenu"
import TodoItem from "./components/TodoItem"
import Button from "./components/Button"
import DateLabel from "./components/DateLabel"
import FormInput from "./components/FormInput"
import TodoStatus from "./components/TodoStatus"

function App() {
  const onChangeTab =(menu)=>{
    console.log(menu)
  }
  const buttonCheck= ()=>{
    console.log('버튼 클릭했으요');
  }
  const date = new Date();
  return (
    <div>
      <TabMenu onChekingTab={onChangeTab} />
      <TodoItem title={"Todo1"} />
      <TodoItem title={"Todo2"} />
      <TodoItem title={"Todo3"} />
      <Button label={"Submit"} onClickButton={buttonCheck} size={"sm"} type={"danger"} />
      <DateLabel date={date} />
      <FormInput />
      <TodoStatus type={'todo'} />
      <TodoStatus type={'done'} />
    </div>
  )
}

export default App
