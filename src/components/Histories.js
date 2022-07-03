import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../helpers";
import MovieFilm from "./MovieFilm";
const Histories=()=>{
    const [histories,setHistories]=useState([])
    const {id}=useParams()

    useEffect(()=>{
        axios(`https://api.themoviedb.org/3/person/${id}?api_key=${APIKEY}&language=en-US`)
            .then(({data})=>setHistories(data))
    },[])
    console.log(histories)
    return(
        <div className="container">
            <div className="flex flex-row flex-wrap">
                <div className="basis-1/2">
                    <img className="py-20 px-20" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${histories.profile_path} `} alt=""/>
                </div>
                <div className="basis-1/2 my-20">
                    <h1 style={{color:"white",fontSize:"30px"}}>{histories.name}</h1>

<h1 style={{color:"white",
fontSize:"20px"}}>biography:</h1>
                    <p className="my-3" style={{color:"white",fontSize:"13px"}}>{histories.biography}</p>
                </div>
            </div>
            <MovieFilm/>

        </div>
    )
}
export default Histories