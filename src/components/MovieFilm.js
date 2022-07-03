import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {APIKEY} from "../helpers";
import Slider from "react-slick";
const MovieFilm=({el})=>{
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 500,
        autoplay:true
    };
    const [person,setPerson]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${APIKEY}&language=en-US`)
            .then(({data})=>setPerson(data.cast))
    },[])
    return (
        <div className="container">
            <Slider {...settings}>
                {
                  person.map(el=>(
                      <div>
                         <Link to={`/filmPage/${el.id}`}> <img src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2/${el.poster_path}`} alt=""/></Link>
                     <h1 style={{color:"white",fontSize:"15px"}}>{el.title}</h1>
                      </div>
                  ))
                }

            </Slider>
        </div>
    )
}
export default MovieFilm