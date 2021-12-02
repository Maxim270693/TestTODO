import React, {useState} from 'react';
import AddTodo from "./main/ui/AddTodo";
import Todo from "./main/ui/Todo";
import s from '../src/style/App.module.css';

function App() {
    const [tasks,setTasks] = useState(true)

    return (
        <div className={s.App}>
            <AddTodo/>
            { tasks
                ? <Todo/>
                : <div className={s.text}>Тасок нету!</div>
            }
        </div>
    );
}

export default App;
