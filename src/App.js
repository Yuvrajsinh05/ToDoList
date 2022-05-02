import './App.css';
import Header from "./myComponents/Header"
import {Todo} from "./myComponents/Todo"
import {Todos} from "./myComponents/Todos"
import Footer from "./myComponents/Footer"
import React , {useState} from 'react';


function App() {
  const onDelete = (todo)=>{
    console.log("I'm of Delete" ,todo)
    setTodos(todos.filter((e)=>{
      return e!== todo;
    }));
  }
  const [todos,setTodos ]=useState ([
    {
      sno:1,
      title:"go to the collage",
      desc : "Don't go if your work is not completed"
    },
    {
      sno:2,
      title:"go to the gym",
      desc : "Minimum you sholud go 4days/week"
    },
    {
      sno:3,
      title:"go to the practice guitar",
      desc : "Don't go if your work is not completed"
    },
  ]);
  return (
    <>
    <Header title = "My Todos List " searchBar={false}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
