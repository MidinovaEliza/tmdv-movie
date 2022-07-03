import React from 'react'
import {useState} from "react";
import {Link} from "react-router-dom";

const MovieCard=({movie})=>{
    const [hover,setHover]=useState(false)
    const {title,poster_path,backdrop_path,release_date}=movie
    return(
        <div className="basis-1/4">

            <Link to={`/filmPage/${movie.id}`}>    <img  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`} alt="" className="mx-12 my-10"/></Link>

            <h1 className="item mx-12" style={{
                color: hover ? "blue" : "white"
            } }
                onMouseOver={()=>{
                    setHover(!hover)
                }}
                onMouseLeave={()=>{
                    setHover(!hover)
                }}>{title}</h1>
            <p className="item2 mx-12">{release_date}</p>


        </div>
    )

}
export default MovieCard