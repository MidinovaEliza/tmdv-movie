import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {APIKEY} from "../helpers";
import {useParams} from "react-router-dom";
import Video from "./Video";
import Actors from "./Actors";
import {LanguageContext} from "../context/LanguageContext";


const FilmPage=()=>{
    const {language}=useContext(LanguageContext)
    const [details,setDetails]=useState([])
    const {movieId}=useParams()
    useEffect(()=>{
        axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKEY}&language=${language}`)
            .then(({data})=>setDetails(data))

    },[{language}])
    console.log(details)
    return (
        <div style={{
            background:`url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${details.backdrop_path} " )no-repeat center/cover `,
            minHeight:"100vh"

        }}>
        <div className="container">

                <div className="flex flex-row flex-wrap">
                    <div className="basis-1/2 my-20">
                        <img className="py-35 px-20 " src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${details.poster_path} `} alt=""/>
                    </div>
                    <div className="basis-1/2 my-20 ">
                        <h1 style={{
                            fontSize:"30px"
                        }} className="title  " style={{
                            fontSize:"30px"
                        }}>{details.title}</h1>
                        <p className="my-2 title " style={{
                            fontSize:"20px"
                        }}>{details.tagline}</p>
                        <p  className="my-2 title" style={{
                            fontSize:"20px"
                        }}>{details.release_date}</p>
                        <p className="my-2 title" style={{
                            fontSize:"20px"
                        }}>{Math.floor(details.runtime/60)}h {details.runtime%60}min</p>
                        <p className="my-2 title" style={{
                            fontSize:"20px"
                        }}>status:{details.status}</p>
                        <p  className="my-2 title" style={{
                            fontSize:"20px"
                        }}>vote:{details.vote_average}</p>
                        <p  className="my-2 title" style={{
                            fontSize:"20px"
                        }}>{details.overview}</p>

                    </div>
                </div>
            <Actors/>
            {/*<Video/>*/}
            </div>



        </div>

//актер

    )
}
export default FilmPage