import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>404</h1>
      <p style={styles.message}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={styles.link}>
        Go Back Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#f8f9fa",
  },
  header: {
    fontSize: "6rem",
    marginBottom: "1rem",
    color: "#343a40",
  },
  message: {
    fontSize: "1.5rem",
    marginBottom: "1.5rem",
    color: "#6c757d",
  },
  link: {
    fontSize: "1.25rem",
    textDecoration: "none",
    color: "#007bff",
    padding: "0.5rem 1rem",
    border: "1px solid #007bff",
    borderRadius: "5px",
    transition: "background-color 0.3s, color 0.3s",
  },
  linkHover: {
    backgroundColor: "#007bff",
    color: "#fff",
  },
};

export default NotFoundPage;
