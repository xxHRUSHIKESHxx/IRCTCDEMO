import logo from "./logo.svg";
import "./App.css";

// import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
// import Register from "./components/Register";
import Login from "./components/Login";
// import Cart from "./components/Cart";

import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import {userContext} from "react";
// import BookSeat from "./components/BookSeat";
function App() {

  const ProtectedRoute = ({children}) =>{
    const { user } = userContext(AuthContext)
    if(!user){
      return <Navigate to="/login"  /> ; 
    }
  
  }


  return (
    <div>
      {/* <Navbar /> */}

      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/Feed" element={<Feed/>} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          {/* <Route path="/bookseat" element={<BookSeat />} /> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
