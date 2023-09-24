import { FC, useState, ChangeEvent, FormEvent } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { addNewTodo } from "../../redux/slices/todosSlice";

export const AddNewTodo: FC = () => {
  const [title, setTitle] = useState("");

  const dispatch = useAppDispatch();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todoTitle = title.trim();

    if (todoTitle) {
      dispatch(addNewTodo(todoTitle));
      setTitle("");
    }
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return (
    <form onSubmit={submitHandler} className="mb-4">
      <div className="mb-3 d-flex justify-content-center">
        <input
          type="text"
          className="form-control"
          onChange={changeHandler}
          value={title}
          placeholder="Todo title ..."
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add new todo
      </button>
    </form>
  );
};
