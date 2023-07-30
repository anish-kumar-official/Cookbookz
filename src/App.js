import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./Components/Pages/Categories";
import NewBlogs from "./Components/Pages/NewBlogs";
import Navbar from "./Components/Header/Navbar/Navbar";
import Home from "./Components/Pages/Home";
import Sidenav from "./Components/Sidenav/Sidenav";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="outerContainer">
          <div className="sidenav">
            <Sidenav />
          </div>
          <div className="body">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/new-blogs" element={<NewBlogs />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
