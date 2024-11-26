import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "../services/firebase";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";


const TaskContext = createContext();


export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "tasks"), (snapshot) => {
      const fetchedTasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(fetchedTasks);
      setLoading(false);
    });
    return unsubscribe; 
  }, []);

  
  const addTask = async (task) => {
    try {
      await addDoc(collection(db, "tasks"), task);
    } catch (error) {
      console.error("Error adding task: ", error.message);
    }
  };

  
  const updateTask = async (id, updatedTask) => {
    try {
      const taskDoc = doc(db, "tasks", id);
      await updateDoc(taskDoc, updatedTask);
    } catch (error) {
      console.error("Error updating task: ", error.message);
    }
  };

  
  const deleteTask = async (id) => {
    try {
      const taskDoc = doc(db, "tasks", id);
      await deleteDoc(taskDoc);
    } catch (error) {
      console.error("Error deleting task: ", error.message);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        addTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};


export const useTaskContext = () => useContext(TaskContext);
