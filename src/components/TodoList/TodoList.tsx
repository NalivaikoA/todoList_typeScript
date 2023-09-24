import { FC } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { clearTodos, getAllTodosSelector } from "../../redux/slices/todosSlice";
import { TodoItem } from "../TodoItem/TodoItem";
import { useAppDispatch } from "../../hooks/useAppDispatch";

export const TodoList: FC = () => {
  const todos = useAppSelector(getAllTodosSelector);

  const dispatch = useAppDispatch();

  const clearHandler = () => {
    dispatch(clearTodos());
  };

  return (
    <>
      <ul className="list-group mb-4">
        {todos.map((todo, index) => (
          <TodoItem key={todo.id} {...todo} index={index} />
        ))}
      </ul>
      <div className="d-flex justify-content-center">
        <button onClick={clearHandler} type="button" className="btn btn-danger">
          Clear all
        </button>
      </div>
    </>
  );
};
