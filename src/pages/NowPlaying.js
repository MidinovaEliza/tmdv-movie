
import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";

import {APIKEY} from "../helpers";
import {Link} from "react-router-dom";
import MovieCard from "../components/MovieCard"
import {useContext} from "react";
import {LanguageContext} from "../context/LanguageContext";
import Layout from "../components/Layout/Layout";
import Loader from "../components/Loader/Loader";


const NowPlaying=()=>{
    const [hover,setHover]=useState(false)
    const {language}=useContext(LanguageContext)
    const [currentPage,setCurrentPage]=useState(1)
    let pages=[]
    for(let i=1;i<16;i++){
        pages.push(i)
    }

  const [nowPlayingMovie,setNowPlayingMovie]=useState([])
    useEffect(()=>{
        axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=${language}&page=${currentPage}`)
            .then(({data})=>
                setTimeout(()=>{
                    setNowPlayingMovie(data.results)
                },1000))

        window.scroll(0,0)
    },[currentPage,language])
    if(nowPlayingMovie.length===0){
        return <Loader/>
    }
    console.log(nowPlayingMovie)
    return (
        <div className="container  justify-between items-center mx-auto ">
            <div className="flex flex-row flex-wrap">
                {

                    nowPlayingMovie.map(el=> <MovieCard key={el.id} movie={el}/>)
                }
            </div>
            <div className="d-flex justify-content-center p-6 mt-6  ">
                <div className="p-3">
                    {
                        pages.map(el=>(
                                <button
                                    onClick={()=>setCurrentPage(el)}
                                    className={`btn ${currentPage === el ? "btn-danger ml-3":"btn-success ml-3"}`}
                                >{el}</button>
                            )
                        )
                    }

                </div>

            </div>


        </div>
    )
}
export default NowPlaying