import React, {ChangeEvent, FormEvent, KeyboardEvent} from 'react';
import s from '../../style/AddTodo.module.css';
import {useDispatch} from "react-redux";
import {addTaskAC, removeTaskAC, setInitialAC, setTitleAC} from "../bll/reducer";
import {v1} from "uuid";
import {useAppSelector} from "../../types/useAppSelector";

const AddTodo = React.memo(() => {
    const dispatch = useDispatch()
    const title = useAppSelector<string>(state => state.reducer.title)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setTitleAC(e.currentTarget.value))
    }

    const addTask = (title: string) => {
        if(title.trim() === '') return
        dispatch(addTaskAC({id: v1(), title, checked: false}))
        dispatch(setTitleAC(''))
    }

    const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            addTask(title)
        }
    }

    return (
        <form onSubmit={handleSubmit} className={s.wrapper}>
            <input type="text"
                   placeholder='Add Todo'
                   value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button className={s.btn} onClick={() => {addTask(title)}}>add</button>
            <button className={s.btn} onClick={() => dispatch(removeTaskAC(''))}>remove</button>
            <button className={s.btn} onClick={() => dispatch(setInitialAC())}>return</button>
        </form>
    );
});

export default AddTodo;