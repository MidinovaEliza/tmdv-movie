import React, {useState} from "react";
import Img from "../img/кино.jpg"
import {useNavigate} from "react-router-dom";

const Picture=()=>{
    const navigate= useNavigate()
    const [searchPeople,setSearchPeople]=useState("")
    const handleChangePeople=(e)=>{
        setSearchPeople(e.target.value)
    }
    const handleSearchPeople=()=>{
        navigate(`/search-people/${searchPeople}`)
    }
    return (
        <div className="picture">
            <div className="container">
                <div className="picture2">
<h5 style={{color:"white"}}>поиск актеров</h5>
                    <input onChange={handleChangePeople} className="p-2 mb-2" style={{borderRadius:"10px"}}  type="text" id="search-navbar"
                           placeholder="Search..."/>
                    <button onClick={handleSearchPeople} style={{
                        color:"white",
                        marginLeft:"10px",
                        background:"blue",
                        width:"100px",
                        borderRadius:"10px"


                    }}
                            onKeyDown={handleSearchPeople}
                            className="btn btn btn-success">search</button>
                    <img className="d-flex justify-content-center pb-5"
                         style={{
                             width:"1300px",
                             height:"500px"
                         }} src={Img} alt=""/>






                </div>

            </div>
        </div>

    )
}
export default Picture