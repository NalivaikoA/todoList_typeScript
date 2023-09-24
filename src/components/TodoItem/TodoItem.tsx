import {FC} from "react";
import { Todo } from "../../models/TodosTypes";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { changeTodoStatus, deleteTodo } from "../../redux/slices/todosSlice";
import classNames from 'classnames';


//Первый вариант синтаксиса через type.
// type TodoItemProps = Todo & {
//     index: number;
// }
 

interface TodoItemProps extends Todo {
    index: number,
    // additionalInfo?: string,  //Так можно прописать дополнительный пропс. Он будет опциональный - т.е его можно не указывать
}


export const TodoItem: FC<TodoItemProps> = ({
    id,
    title, 
    status,
    index,
}) => {

    const dispatch = useAppDispatch()

    const statusHandler = () => {
        dispatch(changeTodoStatus(id))
    }

    const deleteHandler = () => {
        dispatch(deleteTodo(id))
    }

    return (
        <li className="list-group-item d-flex align-items-center justify-content-between">
            <span className="me-5">
            {index + 1}. {title}
            </span>
            <span className="d-flex ml-auto">
                <button onClick={statusHandler} type="button" className={classNames(
                    'btn', 
                    {'btn-success': !!status, 'btn-primary': !status,}, 
                    'mx-1'
                    )}>
                    {status ? 'Undone' : 'Done'}
                </button>
                <button onClick={deleteHandler} type="button" className="btn btn-danger mx-1">
                    Delete
                </button>
            </span>
        </li>
    )
}