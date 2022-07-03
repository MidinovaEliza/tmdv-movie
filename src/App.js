import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import {Routes,Route} from "react-router-dom";
import Popular from "./pages/Popular";
import Header from "./components/Header";
import Latest from "./pages/Latest";
import NowPlaying from "./pages/NowPlaying";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import FilmPage from "./components/FilmPage";
import Histories from "./components/Histories";
import SearchResults from "./components/SearchResults";
import SearchPeople from "./components/SearchPeople";
import Layout from "./components/Layout/Layout";


import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Picture from "./pages/Picture";
function App() {
    const [mode,setMode]=useState(JSON.parse(localStorage.getItem("mode")) || false)
    const [color,setColor]=useState(JSON.parse(localStorage.getItem("color")) ||false)
    const handleColor=()=>{
        setColor(!color)
    }
    const handleMode=()=>{
        setMode(!mode)
        localStorage.setItem("mode",JSON.stringify(!mode))
    }
  return (
  <Layout>
      <div className="App"
           style={{
               background:mode? "darkgrey":"black",
               color:color? "blue":"black"
           }}>

          <button className="m-1 btn btn-dark" onClick={handleMode}>{mode ? "light mode":"dark mode"}

          </button>
          {/*<button   className=" item3 m-3 btn btn-primary" onClick={handleColor}>{color? "color":"setColor"}</button>*/}
          <Routes>
              <Route path="/" element={<Picture/>}/>
              <Route path="/latest" element={<Latest/>}/>
              <Route path="/nowPlaying" element={<NowPlaying/>}/>
              <Route path="/popular" element={<Popular/>}/>
              <Route path="/topRated" element={<TopRated/>}/>
              <Route path="/upcoming" element={<Upcoming/>}/>
              <Route path="/filmPage/:movieId" element={<FilmPage/>}/>
              <Route path="/histories/:id" element={<Histories/>}/>
              <Route path="/search-results/:search" element={<SearchResults/>}/>
              <Route path="/search-people/:searchPeople" element={<SearchPeople/>}/>

          </Routes>
      </div>
  </Layout>
  );
}

export default App;
