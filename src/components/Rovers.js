import React from 'react'
import { Card } from 'semantic-ui-react'
import RoverCard from './RoverCard'

export default function Rovers({fetchPhotos,setRover,rover}) {
  return (
    <Card.Group centered>
      <RoverCard
        img={"https://mars.nasa.gov/system/feature_items/images/6037_msl_banner.jpg"}
        name={"Curiosity"}
        fetchPhotos={fetchPhotos}
        setRover={setRover}
        rover={rover}
      />
      <RoverCard 
        img={"https://s1.eestatic.com/2019/02/13/actualidad/Actualidad_375974696_114650383_1024x576.jpg"}
        name={"Opportunity"}
        fetchPhotos={fetchPhotos}
        setRover={setRover}
        rover={rover}
      />
      <RoverCard 
        img={"https://jplopez.net/wp-content/uploads/2019/09/rover-spirit.jpg"}
        name={"Spirit"}
        fetchPhotos={fetchPhotos}
        setRover={setRover}
        rover={rover}
      />
    </Card.Group>
  )
}
