import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './showsummary.css'

const ShowSummary = () => {
  const url = "https://api.tvmaze.com/search/shows?q=all"
  const {id} =useParams()
  const [showDetails,setShowDetails] = useState([])

  const fetchShowDetail = () =>{
    return axios.get(url)
    .then((res)=>{
      setShowDetails(res.data)
    })
  }

  useEffect(()=>{
    fetchShowDetail()
  },[])
  return (
    <>

    <h1>Show Summary</h1>
      {
        showDetails.map((detail,index)=>{
            if(detail.show['id'] == id){
              return <div className="summary-container"> 

                    <img src={detail.show['image']['original']} alt="original-img" className='original-image' />

                  <div className='summary-detail-info'>
                    <h1>{detail.show['name']}</h1>
                    <h2>IMDB : {detail.show['rating']['average'] === null ? 0 : detail.show['rating']['average'] }/10</h2>
                    <h3>Genres: {detail.show['genres']}</h3>
                    <h3>Language : {detail.show['language']}</h3>
                    <h3>First Episode Release Date : {detail.show['started']}</h3>
                    <h3>Last Episode Date : {detail.show['ended']}</h3>

                     <p>{detail.show['summary']}</p>
                  </div>

              </div>
            }         
        })
      }
    </>
  )
}

export default ShowSummary
