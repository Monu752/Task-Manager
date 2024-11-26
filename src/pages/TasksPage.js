import React from "react";
import TaskForm from "../components/Tasks/TaskForm";
import TaskList from "../components/Tasks/TaskList";

const TasksPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager</h1>
      {/* Task Form for adding new tasks */}
      <TaskForm />
      
      <hr style={{ margin: "20px 0" }} />
      
      {/* Task List for displaying and managing tasks */}
      <TaskList />
    </div>
  );
};

export default TasksPage;
