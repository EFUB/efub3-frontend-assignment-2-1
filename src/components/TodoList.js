import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "../redux/todosSlice";
import { setFilter } from "../redux/filterSlice";
import FilterDropdown from "./FilterDropdown";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { Typography } from "@mui/material";

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
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Arial",
          fontWeight: 700,
          textDecoration: "none",
          mb: 3,
          mt: 4,
        }}
      >
        오늘의 할 일은?
      </Typography>
      <div>
        <TextField
          sx={{ mb: 5 }}
          label="todo"
          variant="standard"
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <IconButton aria-label="delete" size="large" onClick={handleAddTodo}>
          <AddIcon fontSize="inherit" />
        </IconButton>
      </div>
      <FilterDropdown />
      <ul style={{ listStyle: "none" }}>
        <FormGroup>
          {filteredTodos.map((todo) => (
            <li key={todo.id}>
              <FormControlLabel
                control={<Checkbox />}
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
              <IconButton
                aria-label="delete"
                size="large"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
              {/* <input
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
            <IconButton
              aria-label="delete"
              size="large"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              <DeleteIcon fontSize="small" />
            </IconButton> */}
            </li>
          ))}
        </FormGroup>
      </ul>
    </div>
  );
};

export default TodoList;
