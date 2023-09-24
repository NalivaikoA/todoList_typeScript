import { Todo } from "../models/TodosTypes";

interface InitialReduxState{
    todos: Todo[]
}

export const getInitState = (): InitialReduxState  => {

    return {
        todos: [],
    }
}

export const initState = getInitState();



console.log({initState});