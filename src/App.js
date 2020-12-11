import React, {useState} from 'react'
import axios from 'axios'

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

  function fetchPhotos(name) {
    axios
    .get(baseAPI + name + `/photos?${dateType}=${solDate}${earthDate}${camera}&page=${page}&` + API_KEY)
    .then(res => {
      setPhotos(res.data.photos)
    })
    .catch(err => {
      console.log(err);
    })
  }


  return (
    <>
      <h1 style={{margin:'20px', textAlign:'center'}}>
        Mars Rover Photos
      </h1>
      
      <Rovers 
        fetchPhotos={fetchPhotos}
        setRover={setRover}
        rover={rover}
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
      />

      { photos ?
        <ListPhotos 
          photos={photos}
        /> : null
      }
    </>
  );
}

export default App;
