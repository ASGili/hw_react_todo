
import './App.css';
import {useState} from 'react'



function App() {
const [todoList,setTodoList] = useState([])
const [newItem, setNewItem] = useState("")

const handleForm = (event)=>{

  setNewItem(event.target.value)
}

const handleSave = (event)=>{
  event.preventDefault()

}

  return (
<>    
<h1>ToDo's</h1>
<form onSubmit={handleSave}>
  <label htmlFor="addTodo">Todos to be added here: </label>
  <input id="addTodo" type="text" value={newItem}/>
  <input type="submit" value="Save Item" onInput={handleForm}/>
</form>

<ul>
  {todoList}
</ul>
</>
  );
}

export default App;
