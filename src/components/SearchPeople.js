import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../helpers";
import Histories from "./Histories";
import MovieCard from "./MovieCard";



const  SearchPeople =()=>{
    const {searchPeople}=useParams()
    const [result,setResult]=useState([])
    useEffect(()=>{
        axios(`https://api.themoviedb.org/3/search/person?api_key=${APIKEY}&query=${searchPeople}`)
            .then(({data})=>setResult(data.results))
    },[])
    return(
        <div className="container">
            <div className="flex flex-wrap">
                {/*{*/}
                {/*    // result.map(el=>(*/}
                {/*    //         <Histories  key={el.id}/>*/}
                {/*    //     )*/}
                {/*    // )*/}




                {/*}*/}

                {
                    result.map(el => (
                        <div className="col-4" >
                            <Link to={`/histories/${el.id}`}>
                                <img  className="py-20 px-20" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.profile_path} `} alt=""/>

                            </Link>
                            <p style={{color:"white",
                            marginTop:"-70px"}} className="ml-20 ">{el.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default SearchPeople