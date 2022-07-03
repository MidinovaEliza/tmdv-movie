import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../helpers";
import Slider from "react-slick";
const Video=()=>{
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        autoplay:true
    };
    const [trailers,setTrailers]=useState([])
    const {movieId}=useParams()
    useEffect(()=>{
        axios(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${APIKEY}&language=en-US`)
            .then(({data})=>setTrailers(data.results))
    },[])
    return (
        <div className="container">

            {/*<Slider {...settings}>*/}
            {/*    {*/}
            {/*        trailers.map(el=>(*/}
            {/*              <div>*/}
            {/*                  <iframe width="300" height="200" src={`https://www.youtube.com/embed/${el.key}`}*/}
            {/*                          title="YouTube video player" frameBorder="0"*/}
            {/*                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*                          allowFullScreen></iframe>*/}
            {/*              </div>*/}
            {/*            )*/}

            {/*        )*/}

            {/*    }*/}
            {/*</Slider>*/}
        </div>
    )
}
export default Video