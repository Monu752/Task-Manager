import { db } from "./firebase";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";

const TASKS_COLLECTION = "tasks";

/**
 * Fetch all tasks from the Firestore database.
 * @returns {Promise<Array>} A promise that resolves to an array of tasks.
 */
export const getTasks = async () => {
  const tasksCollection = collection(db, TASKS_COLLECTION);
  const snapshot = await getDocs(tasksCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

/**
 * Add a new task to the Firestore database.
 * @param {Object} task - The task object containing title and description.
 * @returns {Promise<Object>} A promise that resolves to the added task with its ID.
 */
export const addTask = async (task) => {
  const tasksCollection = collection(db, TASKS_COLLECTION);
  const docRef = await addDoc(tasksCollection, task);
  return { id: docRef.id, ...task };
};

/**
 * Update an existing task in the Firestore database.
 * @param {string} id - The ID of the task to update.
 * @param {Object} updatedTask - The updated task data.
 * @returns {Promise<void>}
 */
export const updateTask = async (id, updatedTask) => {
  const taskDoc = doc(db, TASKS_COLLECTION, id);
  await updateDoc(taskDoc, updatedTask);
};

/**
 * Delete a task from the Firestore database.
 * @param {string} id - The ID of the task to delete.
 * @returns {Promise<void>}
 */
export const deleteTask = async (id) => {
  const taskDoc = doc(db, TASKS_COLLECTION, id);
  await deleteDoc(taskDoc);
};
