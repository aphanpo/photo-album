import React, {useState, useEffect} from "react"
import "../styles/base.css"
import axios from 'axios'
import {Link} from "react-router-dom"
import SingleAlbum from './SingleAlbum'


function HardMode(props) {
    const [pictures, setPictures] = useState([])
    const [picturesName, setPicturesName] = useState("")
    const [albumName, setAlbumName] = useState("")
    const pictureId = props.match.params.picturesId
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

    useEffect ((e) => {
        axios.get(`/pictures/${pictureId}?_embed=pictures`).then(resp =>{
            setPictures(resp.data.pictures)
            setPicturesName(resp.data.name)
        })
    }, [picturesName])

  return (
  
      <div className="SingleAlbum">
          <h1>{picturesName}</h1>
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

          <div className="singlePic">
              
                  <Link key={pictures.id} to={"/HardMode/" + pictures.id}>
                    <div className="one">
                        <div className="pic"><img width="500px" height="500px" src={pictures.url}/></div>
                        <div className="pName">{pictures.name}</div>
                    </div>
                  </Link>
              
          </div>
          
         
      </div>

  )
}

export default HardMode
