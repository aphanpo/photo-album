import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import MyAlbums from "./MyAlbums"
import SingleAlbum from "./SingleAlbum"
import HardMode from "./HardMode"

function App(props) {
  return (
    <Router>
      <div>
        <Route exact path="/" component={MyAlbums} />
        <Route path="/SingleAlbum/:albumId" component={SingleAlbum} />
        <Route path="/HardMode/:pictureId" component={HardMode} />
      </div>
    </Router>
  )
  
}

export default App
