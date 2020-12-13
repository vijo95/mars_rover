import React, {useState} from 'react'
import axios from 'axios'
import { Loader } from 'semantic-ui-react'

import Rovers from './components/Rovers'
import FilterBar from './components/FilterBar'
import ListPhotos from './components/ListPhotos';
import { baseAPI, API_KEY } from './utils'
import './App.css';

function App() {

  const [photos, setPhotos] = useState(null)
  const [page, setPage] = useState(1)
  const [solDate, setSolDate] = useState(2000)
  const [earthDate, setEarthDate] = useState('')
  const [dateType, setDateType] = useState("sol")
  const [camera, setCamera] = useState('')
  const [rover, setRover] = useState('curiosity')
  const [loading, setLoading] = useState(false)

  function fetchPhotos(roverName, pageNumber) {
    setLoading(true)
    axios
    .get(baseAPI + roverName + `/photos?${dateType}=${solDate}${earthDate}${camera}&page=${pageNumber}&` + API_KEY)
    .then(res => {
      setPhotos(res.data.photos)
      setLoading(false)
    })
    .catch(err => {
      console.log(err);
    })
  }


  return (
    <>
      <h1 style={{margin:'20px', textAlign:'center', color:'whitesmoke'}}>
        Mars Rover Photos
      </h1>
      
      <Rovers 
        fetchPhotos={fetchPhotos}
        setRover={setRover}
        rover={rover}
        page={page}
      />

      <FilterBar 
        setDateType={setDateType}
        setSolDate={setSolDate}
        setEarthDate={setEarthDate}
        setCamera={setCamera}

        solDate={solDate}
        earthDate={earthDate}
        camera={camera}

        fetchPhotos={fetchPhotos}
        rover={rover}
        page={page}
      />

      { !loading && photos ?
        <ListPhotos 
          photos={photos}
          setPage={setPage}

          fetchPhotos={fetchPhotos}
          rover={rover}
          page={page}
        /> : 
        loading ? <Loader active inline='centered' /> :
        null
      }
    </>
  );
}

export default App;
