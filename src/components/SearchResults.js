import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../helpers";
import MovieCard from "./MovieCard";
const SearchResults=()=>{
    const {search}=useParams()
    const [result,setResult]=useState([])
    useEffect(()=>{
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${search}`)
            .then(({data})=>setResult(data.results))
    },[])
    return(
        <div className="container">
            <div className="flex flex-wrap">
                {
                    result.map(el=>(
                        <MovieCard movie={el} key={el.id}/>
                        )
                    )
                }
            </div>
        </div>
    )
}
export default SearchResults