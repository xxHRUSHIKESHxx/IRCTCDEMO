import React from "react";
import { Link } from 'react-router-dom';
const Button = ({ link , id , children }) => {
  return (
    <button className="Button">
      <a href={link} id={id}  >{children}</a>
    </button>
  
  );
};

export default Button;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Button.css'; // Import your CSS file

// function Button({link , id, children }) {


//   return (
//     <Link to={link}>
//       <button className="Button">{children}</button>
//     </Link>
//   );
// }

// export default Button;
