import React from "react";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase";

const TaskItem = ({ task }) => {
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "tasks", task.id));
      alert("Task deleted successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleUpdate = async () => {
    const updatedTitle = prompt("Enter new title:", task.title);
    const updatedDescription = prompt("Enter new description:", task.description);
    if (updatedTitle && updatedDescription) {
      try {
        await updateDoc(doc(db, "tasks", task.id), {
          title: updatedTitle,
          description: updatedDescription,
        });
        alert("Task updated successfully!");
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleUpdate}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
