import React from 'react';
import AddTodo from "./main/ui/AddTodo";
import Todo from "./main/ui/Todo";
import s from '../src/style/App.module.css';
import {TaskType} from "./types/tasksType";
import {useAppSelector} from "./types/useAppSelector";

function App() {
    const tasks = useAppSelector<Array<TaskType>>(state => state.reducer.tasks)

    return (
        <div className={s.App}>
            <h1>TodoList</h1>
            <AddTodo/>
            {tasks.length > 0
                ? <Todo/>
                : <div className={s.text}>Список задач пуст!</div>
            }
        </div>
    );
}

export default App;
