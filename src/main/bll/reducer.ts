import {v1} from "uuid";
import {InitialStateType, TaskType} from "../../types/tasksType";

const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const SET_TITLE = "SET-TITLE";
const SET_CHECKED = 'SET_CHECKED';
const SET_INITIAL = 'SET_INITIAL';


const initialState: InitialStateType = {
    tasks: [
        {id: v1(), title: 'Buy milk', checked: false},
        {id: v1(), title: 'Buy bread', checked: false}
    ],
    title: '',
}

export const reducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_TASK:
            return {...state, tasks: [action.payload, ...state.tasks]}
        case REMOVE_TASK:
            return {...state, tasks: state.tasks.filter(t => !t.checked)}
        case SET_TITLE:
            return {...state, title: action.title}
        case SET_CHECKED:
            return {...state,
                tasks: state.tasks.map(task => action.id === task.id ? {
                    ...task,
                    checked: !task.checked
                } : task)
            }
        case SET_INITIAL:
            return {...initialState}
        default:
            return state
    }
}

// ActionCreators
export const addTaskAC = (payload: TaskType) => ({type: ADD_TASK, payload} as const)
export const removeTaskAC = (id: string) => ({type: REMOVE_TASK, id} as const)
export const setTitleAC = (title: string) => ({type: SET_TITLE, title} as const)
export const setCheckedAC = (id: string) => ({type: SET_CHECKED, id} as const)
export const setInitialAC = () => ({type: SET_INITIAL} as const)


type AddTaskActionType = ReturnType<typeof addTaskAC>
type RemoveTaskActionType = ReturnType<typeof removeTaskAC>
type SetTitleActionType = ReturnType<typeof setTitleAC>
type SetCheckedActionType = ReturnType<typeof setCheckedAC>
type SetInitialActionType = ReturnType<typeof setInitialAC>

type ActionType = AddTaskActionType | RemoveTaskActionType
    | SetTitleActionType | SetCheckedActionType
    | SetInitialActionType