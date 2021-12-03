import React from 'react';
import s from '../../style/Todo.module.css';
import {useDispatch} from "react-redux";
import {setCheckedAC} from "../bll/reducer";
import {useAppSelector} from "../../types/useAppSelector";
import {TaskType} from "../../types/tasksType";

const Todo = () => {
    const tasks = useAppSelector<Array<TaskType>>(state => state.reducer.tasks)
    const dispatch = useDispatch()

    return (
        <div className={s.wrapper}>
            <ul>
                {
                    tasks.map(t => <li key={t.id}>
                        <span>{t.title}</span>
                        <input type='checkbox'
                               checked={t.checked}
                               onChange={() => dispatch(setCheckedAC(t.id))}
                        />
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Todo;