
import './App.css';
import {useState} from 'react'



function App() {
const [todos,setTodos] = useState([])
const [newItem, setNewItem] = useState("")

const handleInput = (event)=>{
  setNewItem(event.target.value)
}

const handleSave = (event)=>{
  event.preventDefault()
  const newTodo = {id: Date.now(), name: newItem}
  const newTodoList = [...todos, newTodo]
  setTodos(newTodoList)
  setNewItem("")
}

const handleCompletion = (key)=>{
  const newList = todos.filter((todo)=> todo.id !== key)
  setTodos(newList)
}

const todoList = todos.map((todo)=>{
  return (
    <li key={todo.id}>
      {todo.name}
      <button onClick={()=>handleCompletion(todo.id)}>Complete</button>
    </li>
  )
})

  return (
<>    
<h1>ToDo's</h1>
<form onSubmit={handleSave}>
  <label htmlFor="addTodo">Todos to be added here: </label>
  <input id="addTodo" type="text" value={newItem} onInput={handleInput}/>
  <input type="radio" id="low" />
  <label htmlFor="low">Low</label>
  <input type="radio" id="high"/>
  <label htmlFor="high">High</label>
  <input type="submit" value="Save Item"/>
</form>

<ul>
  {todoList}
</ul>
</>
  );
}

export default App;
