import {combineReducers, createStore} from "redux";
import {reducer} from "./reducer";

const rootReducer = combineReducers({
    reducer: reducer
})

export const store = createStore(rootReducer)

export type RootStateType = ReturnType<typeof rootReducer>