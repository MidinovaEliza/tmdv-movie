import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {APIKEY} from "../helpers";
import MovieCard from "../components/MovieCard";
import {LanguageContext} from "../context/LanguageContext";
import Loader from "../components/Loader/Loader";


const TopRated=()=>{
    const [topRated,setTopRated]=useState([])
    const [hover,setHover]=useState(false)
    const [currentPage,setCurrentPage]=useState(1)
    const [total,setTotal]=useState(null)

    const {language}=useContext(LanguageContext)
    let buttons=""
    let pages=[]
    for(let i=1;i<16;i++){
        pages.push(i)
    }
    const getTopRated=async (page)=>{
        const url=await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${language}&page=${page}`)
        const {data}=await url

        setTimeout(()=>{
            setTotal(data.total_pages)
            setTopRated(data.results)
        },1000)



    }
    useEffect(()=>{
       getTopRated()
        window.scroll(0,0)

    },[currentPage,language])
    if(topRated.length === 0){
        return <Loader/>
    }
    if(total>0 && currentPage===1){
        buttons=<>
            <button onClick={()=>setCurrentPage(currentPage+1)
            }
                    className="btn btn-primary mx-3 p-2"
            >кийинки</button>
        </>
    }else if(total>0 && currentPage>1 && currentPage !==total){
        buttons=<>
            <button onClick={()=>setCurrentPage(currentPage-1)
            }
                    className="btn btn-primary mx-3 p-2"
            >артка</button>
            <button onClick={()=>setCurrentPage(currentPage+1)}
                    className="btn btn-primary mx-3 p-2"
            >кийинки</button>
        </>
    }else if(total>0 && currentPage===total){
        buttons=<>
            <button onClick={()=>setCurrentPage(currentPage-1)

            }
                    className="btn btn-primary justify-content-center mx-3 p-2"
            >артка</button>
        </>
    }
    return (
        <div className="container  justify-between items-center mx-auto">
            <div className="flex flex-row flex-wrap">
                {

                    topRated.map(el=><MovieCard key={el.id} movie={el}/>)
                }
            </div>
            <div className="d-flex justify-content-center p-5">{
                buttons
            }</div>


        </div>
    )
}
export default TopRated