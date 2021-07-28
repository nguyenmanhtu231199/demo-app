import React from 'react';
import {
  Link
} from "react-router-dom";
import InputSearch from '../components/InputSearch';
import './style.css';
import {selectTodoList} from "../features/Todoslice";

function TopMenu() {
function handleSearchTerm(newFilters){
console.log(newFilters);
}
  return (
    <div className="App">
     <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/" title="ManhTu là chuỗi nhà thuốc bán lẻ hàng đầu thế giới">Manh Tu</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
       <Link to="/Cart">Cart </Link>
        </li>
        <li className="nav-item">
        <Link to="/User">Users</Link>
        </li>
        
      </ul>
      <InputSearch onSubmit={handleSearchTerm}/>
    </div>
  </div>
</nav>
    </div>
  );
}

export default TopMenu;