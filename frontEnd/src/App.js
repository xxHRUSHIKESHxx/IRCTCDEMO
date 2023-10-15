import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/Cart";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookSeat from "./components/BookSeat";
function App() {
  return (
    <div>
      <Navbar />

      <Router>
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/bookseat" element={<BookSeat />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
