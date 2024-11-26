import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const HomePage = () => {
  const currentUser = useAuth();

  // Redirect authenticated users to the tasks page.
  if (currentUser) {
    return <Navigate to="/tasks" />;
  }

  return (
    <div style={styles.container}>
      <h1>Welcome to the Task Manager App</h1>
      <p>Organize your tasks efficiently with our easy-to-use app!</p>
      <div style={styles.links}>
        <Link to="/login" style={styles.link}>
          Login
        </Link>
        <Link to="/register" style={styles.link}>
          Register
        </Link>
      </div>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  links: {
    marginTop: "20px",
  },
  link: {
    margin: "0 10px",
    padding: "10px 20px",
    textDecoration: "none",
    color: "white",
    backgroundColor: "#007BFF",
    borderRadius: "5px",
  },
};

export default HomePage;
