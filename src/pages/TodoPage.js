import React from "react";
import Template from "../components/Template";
import TodoList from "../components/TodoList";

function TodoPage() {
  return (
    <div>
      <Template content={<TodoList />}></Template>
    </div>
  );
}

export default TodoPage;
