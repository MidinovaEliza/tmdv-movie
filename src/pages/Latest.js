import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {APIKEY} from "../helpers";
import MovieCard from "../components/MovieCard";
import {LanguageContext} from "../context/LanguageContext";
import Loader from "../components/Loader/Loader";


const Latest=()=>{

    const [latestMovie,setLatestMovie]=useState([])
const {language}=useContext(LanguageContext)
    useEffect(()=>{
        axios(`https://api.themoviedb.org/3/movie/latest?api_key=${APIKEY}&language=${language}`)

            .then(({data})=>{
               setTimeout(()=>{
                    if(typeof data==="object"){
                        setLatestMovie([data])
                    }
                    else{
                        setLatestMovie(data)
                    }

                },1000)
            })
    },[])
    if(latestMovie.length === 0){
        return <Loader/>
    }
    // if(typeof latestMovie==="object"){
    //     return <MovieCard movie={latestMovie}/>
    // }
    // else if(Array.isArray(latestMovie))


    return (
        <div className="container p-5">
            <div className="flex flex-row flex-wrap">
                {
                    latestMovie.map(el=><MovieCard movie={el}/>)
                }




            </div>


        </div>
    )

}
export default Latest