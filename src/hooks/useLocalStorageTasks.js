import { useState, useEffect } from "react";

/**
 * Custom hook for managing tasks (or any data)
 * in localStorage with automatic syncing.
 *
 * @param {string} key - localStorage key
 * @param {Array} initialValue - default value if no data in storage
 */
export default function useLocalStorageTasks(key, initialValue = []) {
  const [tasks, setTasks] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage:", error);
      return initialValue;
    }
  });

  // Sync updates to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(tasks));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [key, tasks]);

  // Add a new task
  const addTask = (task) => setTasks((prev) => [...prev, task]);

  // Remove a task by index
  const removeTask = (index) =>
    setTasks((prev) => prev.filter((_, i) => i !== index));

  // Clear all tasks
  const clearTasks = () => setTasks([]);

  return { tasks, addTask, removeTask, clearTasks };
}
