// TodoList.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "./todosSlice";
import { setFilter } from "./filterSlice";
import FilterDropdown from "./FilterDropdown";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filters.filter);

  const getFilteredTodos = () => {
    if (currentFilter === "all") {
      return todos; // 모든 항목 표시
    } else if (currentFilter === "completed") {
      return todos.filter((todo) => todo.completed); // 완료된 항목만 표시
    } else if (currentFilter === "active") {
      return todos.filter((todo) => !todo.completed); // 진행 중인 항목만 표시
    }
    return todos; // 기본값은 모든 항목 표시
  };

  const filteredTodos = getFilteredTodos(); // 필터링된 할 일 목록 가져오기

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };
  const handleSetFilter = (filter) => {
    dispatch(setFilter(filter)); // 필터 변경 액션 디스패치
  };
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <FilterDropdown /> 
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
