export type TaskType = {
    id: string
    title: string
    checked : boolean
}

export type InitialStateType = {
    tasks: Array<TaskType>
    title: string
}