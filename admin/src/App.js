import logo from "./logo.svg";
import "./App.css";

// import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
// import Register from "./components/Register";
import Login from "./components/Login";
// import Cart from "./components/Cart";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
// import BookSeat from "./components/BookSeat";
function App() {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route  path="login" element={<Login />} />
            <Route 
              index
              element={
                <ProtectedRoute>
                  <Feed />
                 </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
