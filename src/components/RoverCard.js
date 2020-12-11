import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export default function RoverCard({img,name,fetchPhotos,setRover, rover}) {

  function handleRoverChange(){
    setRover(name)
    fetchPhotos(name)
  }

  return (
    <Card className={rover === name ? "rover-card rover-selected" : "rover-card"} 
      onClick={(e) => handleRoverChange()}>
      <Image src={img} wrapped ui={true} />
      <Card.Content>
        <Card.Header textAlign="center">
          {name}
        </Card.Header>
      </Card.Content>
    </Card>
  )
}
