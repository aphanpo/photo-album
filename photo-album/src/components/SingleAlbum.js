import React, {useState, useEffect} from "react"
import "../styles/base.css"
import axios from 'axios'
import {Link} from "react-router-dom"
import HardMode from "./HardMode"


function SingleAlbum(props) {
    const [pictures, setPictures] = useState([])
    const [albumName, setAlbumName] = useState("")
    const albumId = props.match.params.albumId
    const [albums, setAlbums] = useState([])

    useEffect ((e) => {
        axios.get(`/albums/${albumId}?_embed=pictures`).then(resp =>{
            setPictures(resp.data.pictures)
            setAlbumName(resp.data.name)
        })
    }, [albumId])

    useEffect ((e) => {
        axios.get("/albums/").then 
        (resp =>{
            setAlbums(resp.data)
        })
    }, [albumName])

  return (
  
      <div className="SingleAlbum">
          <h1>{albumName}</h1>
          <div className="sideBar">
            <p><Link to=''>All Albums</Link> </p>
            {albums.map((e) =>(
                <p>
                    <Link key={"albums" + albums.name} to={"/SingleAlbum/" + e.id}>
                        <div className="albumName">{e.name}</div> 
                    </Link>
                </p>
            ))}
          </div>

          <div className="sixPictures">
              {pictures.map((e) =>(
                  <Link key={e.id} to={"/HardMode/" + e.id}>
                    <div className="onePic">
                        <div className="picture"><img width="350px" height="350px" src={e.url}/></div>
                        <div className="pictureName">{e.name}</div>
                    </div>
                  </Link>
              ))}
          </div>
          
         
      </div>

  )
}

export default SingleAlbum
