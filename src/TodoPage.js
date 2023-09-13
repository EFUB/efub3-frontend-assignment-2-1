import React from "react";
import Template from "./Template";
import TodoList from "./TodoList";

function TodoPage() {
  return (
    <div>
      <Template content={<TodoList />}></Template>
    </div>
  );
}

export default TodoPage;
