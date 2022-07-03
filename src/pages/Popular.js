import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";
import {APIKEY} from "../helpers";
import MovieCard from "../components/MovieCard";
import {useContext} from "react";
import {LanguageContext} from "../context/LanguageContext";
import Loader from "../components/Loader/Loader";


const Popular=()=>{

    const {language}=useContext(LanguageContext)
    const [popularMovie,setPopularMovie]=useState([])
    const [currentPage,setCurrentPage]=useState(1)
    const [total,setTotal]=useState(null)
    let buttons=""
    let pages=[]
    for(let i=1;i<16;i++){
        pages.push(i)
    }


const getPopular=async (page)=>{
        const url=await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${language}&page=${page}`)
    const {data}=await url

        setTimeout(()=>{
     setTotal(data.total_pages)
       setPopularMovie(data.results)
        },1000)

}

    useEffect(()=>{
        getPopular(currentPage)
        window.scroll(0,0)

    },[currentPage, language])
    if(popularMovie.length === 0){
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
    //heroku,versal,hosting

   return  (
       <div className="container  justify-between items-center mx-auto">
           <div className="flex flex-row flex-wrap">
               {

                   popularMovie.map(el=><MovieCard key={el.id} movie={el}/>)

               }   </div>
               <div className="d-flex justify-content-center p-5 ">

                   {
                       buttons
                   }

           </div>

       </div>

   )
}



export default Popular
