import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {APIKEY} from "../helpers";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import histories from "./Histories";

const Actors=({el})=>{
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 6,
        speed: 500,
        autoplay:true
    };
    const [actors,setActors]=useState([])
    const {movieId}=useParams()

    useEffect(()=>{
        axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${APIKEY}&language=en-US`)
            .then(({data})=>setActors(data.cast))
    },[])


    return(
        <div className="container">

            <Slider {...settings}>
                {
                    actors.map(el=>(
                        <div className="mb-20">
                          <Link to={`/histories/${el.id}`}>  <img style={{
                              borderRadius:"10px",
                              width:"138px",

                          }} src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path} `} alt=""/></Link>
                            <h1 style={{
                                color:"white",
                                fontSize:"15px"

                            }}>{el.name}</h1>
                            <h1 style={{
                                color:"white",

                                fontSize:"15px"

                            }}>{el.character}</h1>
                        </div>
                    ))
                }
          
           </Slider>

        </div>
    )
}
export default Actors