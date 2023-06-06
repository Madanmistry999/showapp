import React, { useState , useEffect } from 'react'
import axios from 'axios'
import './showlist.css'
import { useNavigate } from 'react-router-dom'

const ShowList = () => {
    const url = "https://api.tvmaze.com/search/shows?q=all"

    const [showData,setShowData] = useState([])
    const navigate = useNavigate()
    //fetch show details using axios 
    const fetchShowLists = () =>{
        return axios.get(url).then((res)=>setShowData(res.data))
    }

    useEffect(()=>{
        fetchShowLists();
    },[])
    
    
  return (
        <>
            <h1 className='header'>Show Lists</h1>

            <div className='showlist-container'>

                {
                    showData.map((data,index)=>{
                        return <div className='show-info'>

                            <img src={data.show['image']['medium']} alt="show-img" className='show-midium-img'/>
                            <h2>{data.show['name']}</h2>
                            <h3>Genres:{data.show['genres']}</h3>
                            <h3>IMDB : {data.show['rating']['average'] === null ? 0 : data.show['rating']['average']  }/10</h3>
                            <button className='summary-btn' onClick={()=> navigate(`/show-summary/${data.show['id']}`)}>Show Summary</button>
                        </div>
                    })
                }

            </div>
        </>
  )
}

export default ShowList
