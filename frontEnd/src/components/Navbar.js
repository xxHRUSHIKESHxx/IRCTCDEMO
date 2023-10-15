import "./Navbar.css"
import Button from "./Button";
import { useContext } from "react";
import {AuthContext} from "../context/AuthContext";
// import { Link } from 'react-router-dom';
const Navbar = () => {
  const {user} = useContext(AuthContext);

    return (
        <nav className="navbar">
        <div className="brand">
          <a href="/"><span className="linkColour">IRCTC Demo</span> </a>
        </div>
        {/* {user ? <div className="cart" >
          <button>your tickets</button>
        </div> : ""
          
        } */}

        {user ? user.username :(
           <div className="cart">
           {/* <button>booked tickets</button> */}
          <Button link="/register" >login/signup</Button>
         </div>)
        }
       
      </nav>
    );
  }
  export default  Navbar;