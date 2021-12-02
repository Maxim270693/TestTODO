import React, {useState} from 'react';
import s from '../../style/Todo.module.css';

const Todo = () => {
    const [click,setClick] = useState(false)

    return (
        <div className={s.wrapper}>
            <ul>
                <li>
                    <span>React</span>
                    <input type='checkbox'
                           onClick={() => setClick(!click)}
                    />
                    {click && <button>remove</button>}
                </li>
            </ul>
        </div>
    );
};

export default Todo;