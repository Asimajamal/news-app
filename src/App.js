
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React from "react";
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  const [search, setSearch]=useState('');

  const handelChange = (e) => {
    setSearch(e.target.value);
    
  };
  
  return (
    <div className="App">
      <Router>
      <Navbar  />
      <Routes>  
         <Route exact path="/" element={<News  pageSize={9}     key="general" handelChange={handelChange}   search={search}  category="general"/>}/>
         <Route  exact path="/health" element={<News  pageSize={9}    key="health"   search={search} handelChange={handelChange} category="health"/>}/>
         <Route exact path="/sports" element={<News  pageSize={9}     key="sports"   search={search} handelChange={handelChange}  category="sports"/>}/>
         <Route exact path="/general" element={<News  pageSize={9}    key="general"   search={search} handelChange={handelChange}  category="general"/>}/>
         <Route exact path="/business" element={<News  pageSize={9}    key="business"  search={search}  handelChange={handelChange} category="business"/>}/>
         <Route exact path="/technology" element={<News  pageSize={9}    key="technology"  search={search}  handelChange={handelChange}  category="technology"/>}/>
         <Route exact path="/entertainment" element={<News  pageSize={9}    key="entertainment"   search={search} handelChange={handelChange}  category="entertainment"/>}/>
         <Route exact path="/science" element={<News  pageSize={9}    key="science"  search={search}  handelChange={handelChange}  category="science"/>}/>

</Routes>
   
      </Router>
    </div>
  );
}

export default App;


