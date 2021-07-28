import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import { selectTodoList } from "./features/Todoslice";

import TopMenu from "./Menu/TopMenu";
import Cart from "./ToCart/Cart";



export default function App() {
const [postList, setPostList] =useState([]);
useEffect(()=>{
  
    async function fetchPostList(){
      try {
      const requestUrl = 'https://my-json-server.typicode.com/nguyenmanhtu231199/data-demo-app/data';
      const reponse = await fetch(requestUrl);
      const reponseJSON= await reponse.json();
      console.log({reponseJSON});
      
      
      setPostList(reponseJSON);
  } catch (error) {
    console.log('Failed:',error.message);
  }
  
   }
   fetchPostList();
},[]);
const todoList= useSelector(selectTodoList);
console.log({todoList});



  return (
    <Router>
      <div>
        <TopMenu/>
        <Switch>
          <Route path="/Cart">
            <Cart buyLists={todoList} />
          </Route>
          <Route path="/User">
            <Users/>
          </Route>
          <Route path="/">
            <Home posts={postList} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}