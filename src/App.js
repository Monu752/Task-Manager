import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import app from './services/firebase'; // Importing Firebase app
import { getAnalytics } from "firebase/analytics";
import HomePage from "./pages/HomePage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import TasksPage from "./pages/TasksPage";
import PrivateRoute from "./components/Auth/PrivateRoute";
import NotFoundPage from "./pages/NotFoundPage";

// Initialize Analytics
getAnalytics(app);

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Private Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/tasks" element={<TasksPage />} />
          </Route>

          {/* Catch-all Route for 404 - Not Found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
