import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from "./components/Home";

import TopMenu from "./Menu/TopMenu";
import Cart from "./ToCart/Cart";
function Users() {
  return <h2>Users</h2>;
}

export default function App() {
const [postList,setPostList] =useState([]);
useEffect(()=>{
  
    async function fetchPostList(){
      try {
      const requestUrl = 'http://localhost:3004/data';
      const reponse = await fetch(requestUrl);
      const reponseJspon= await reponse.json();
      console.log({reponseJspon});
      
      const {data}= reponseJspon;
      setPostList(data);
  } catch (error) {
    console.log(error.message);
  }
  
   }
   fetchPostList();
},[])
  return (
    <Router>
      <div>
        <TopMenu/>
        <Switch>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home posts={postList} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}