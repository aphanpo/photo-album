import React, {useState, useEffect} from "react"
import "../styles/base.css"
import axios from 'axios'
import {Link} from "react-router-dom"


function MyAlbums(props) {
    const [data, setData] = useState([])
    const [albumId, setAlbumId] = useState("")

    useEffect (() => {
        axios("http://localhost:3001/albums").then(resp =>{
            setData(resp.data)
        })
    }, [])

  return (
      <div className="container">
        <h1>Amy's Photo Albums</h1>
        
        <div className="sixAlbums"> 
            {data.map((e) =>(
                <Link key={e.id} to={"/SingleAlbum/" + e.id}>
                <div className="covers">
                    <div className="albumCover"><img width="350px" height="300px" src={e.coverPic}/></div>
                    <div className="albumName">{e.name}</div>
                </div>
                </Link>
            ))}
        </div>
      </div>
  )
}

export default MyAlbums
