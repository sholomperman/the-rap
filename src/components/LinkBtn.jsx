import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

function LinkBtn({ to, label }) {

  return (
    <Link to={to}><button className="btn">{label}</button></Link>
  );
}

export default LinkBtn