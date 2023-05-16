
import './App.css';
import {useState} from 'react'



function App() {
const [todos,setTodos] = useState([])
const [newItem, setNewItem] = useState("")
const [newPriority, setPriority] = useState("")

const handleInput = (event)=>{
  setNewItem(event.target.value)
}

const handleSave = (event)=>{
  event.preventDefault()
  const newTodo = {id: Date.now(), name: newItem, priority: newPriority}
  const newTodoList = [...todos, newTodo]
  setTodos(newTodoList)
  setNewItem("")
}

const handleCompletion = (key)=>{
  const newList = todos.filter((todo)=> todo.id !== key)
  setTodos(newList)
}

const handlePriority = (event)=>{
  setPriority(event.target.id)
}

const todoList = todos.map((todo)=>{
  return (
    <li key={todo.id} className={todo.priority}>
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
  <input type="radio" id="low-priority" onInput={handlePriority}/>
  <label htmlFor="low">Low</label>
  <input type="radio" id="high-priority" onInput={handlePriority}/>
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
