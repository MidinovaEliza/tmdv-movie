import React, {useContext, useState} from "react";
import {Link,NavLink} from "react-router-dom";
import logo from "../img/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
import {useNavigate} from "react-router-dom"
import {LanguageContext} from "../context/LanguageContext";


const Header=()=>{
    const [headerMovie,setHeaderMovie]=useState(false)
const [search,setSearch]=useState("")

    const navigate=useNavigate()

    const handleChange=(e)=>{
      setSearch(e.target.value)
    }
    const handleSearch=()=>{
        navigate(`/search-results/${search}`)
    }
    const {setLanguage}=useContext(LanguageContext)

    return (
        <div id="header" >
            <nav className=" px-2 sm:px-4 rounded dark:bg-gray-800 bg-gray-800">
                <div className="container flex flex-wrap justify-between items-center mx-auto">

                       <NavLink to="/"> <img src={logo} className="" alt=""
                       style={{
                           width:"165px",
                           height:"80px"
                       }}
                       /></NavLink>

                    <div className="flex md:order-2">
                        <button type="button" data-collapse-toggle="mobile-menu-3" aria-controls="mobile-menu-3"
                                aria-expanded="false"
                                className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                      clip-rule="evenodd"></path>
                            </svg>
                        </button>






                        <button data-collapse-toggle="mobile-menu-3" type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="mobile-menu-3" aria-expanded="false">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                         id="mobile-menu-3">
                        <div className="relative mt-3 md:hidden">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </div>


                        </div>
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">

                            <li>
                                <NavLink to="/nowPlaying" style={{ textDecoration: 'none' }}
                                   className="item block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Now Playing</NavLink>
                            </li>
                            <li>
                                <NavLink to="/popular" style={{ textDecoration: 'none' }}
                                   className="item block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Popular</NavLink>
                            </li>
                            <li>
                                <NavLink to="/topRated" style={{ textDecoration: 'none' }}
                                   className="item block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Top Rated</NavLink>
                            </li>
                            <li>
                                <NavLink to="/upcoming" style={{ textDecoration: 'none' }}
                                   className="item block  py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Upcoming</NavLink>
                            </li>
                            <li>
                                <NavLink to="/latest" style={{ textDecoration: 'none' }}
                                         className="item block  py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">latest</NavLink>
                            </li>

                            <select className="item3 bg-gray-800" onChange={(e)=>setLanguage(e.target.value)}>
                                <option className="item3" value="en-US">english</option>
                                <option className="item3" value="ru-RU">russian</option>

                            </select>
                        </ul>
                        <div className="row">
                            <input type="text" className="w-50 input border-10 ml-10 bg-blend-color"
                            style={{
                                borderRadius:"10px"
                            }}
                                   onChange={handleChange}
                                   onKeyDown={handleSearch}
                            />
                            <button style={{
                                color:"white",
                                marginLeft:"10px",
                                background:"blue",
                                width:"100px",
                                borderRadius:"10px"


                            }} className="btn btn btn-success"
                                    onClick={handleSearch}>search</button>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header