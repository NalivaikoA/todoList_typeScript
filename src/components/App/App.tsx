import { AddNewTodo } from '../AddNewTodo/AddNewTodo'
import { TodoList } from '../TodoList/TodoList'
import './App.css'

export function App() {


  return (
    <div className='App container'>
      <AddNewTodo/>
      <TodoList/>
    </div>
  )
}


