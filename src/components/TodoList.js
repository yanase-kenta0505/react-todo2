import React, { useState } from "react";

const TodoList = () => {
  const initialState = [
    {
      task: "learn vue.js",
      isComplete: false,
    },
    {
      task: "learn react hook",
      isComplete: false,
    },
    {
      task: "learn gatsby.js",
      isComplete: false,
    },
  ];

  const [todos, setTodos] = useState(initialState);
  const [task, setTask] = useState("");

  const handleNewTask = (event) => {
    setTask(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (task === "") {
      return;
    } else {
      setTodos((todos) => [...todos, { task, isComplete: false }]);
    }
  };

  const handleUpdateTask = (index) => {
    let newTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        Add Task :
        <input
          value={task}
          onChange={handleNewTask}
          placeholder="Add New Task"
        />
        <ul>
          {todos.map((todo, index) => {
            return (
              <li
                key={index}
                style={
                  todo.isComplete === true
                    ? { textDecorationLine: "line-through" }
                    : {}
                }
              >
                {todo.task}
                <span
                  onClick={() => {
                    handleUpdateTask(index);
                  }}
                >
                  X
                </span>
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
};

export default TodoList;
