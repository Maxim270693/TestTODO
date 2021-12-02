import React, {ChangeEvent, useState} from 'react';
import s from '../../style/AddTodo.module.css';

const AddTodo = () => {
    const [title, setTitle] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    return (
        <div className={s.wrapper}>
            <input type="text"
                   value={title}
                   onChange={onChangeHandler}
            />
            <button onClick={() => {}}>add</button>
        </div>
    );
};

export default AddTodo;