import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export default function RoverCard({img,name,fetchPhotos,setRover, rover, page}) {

  function handleRoverChange(){
    setRover(name)
    fetchPhotos(name, page)
  }

  return (
    <Card className={rover === name ? "rover-card rover-selected" : "rover-card"} 
      onClick={(e) => handleRoverChange()}>
      <Image src={img} wrapped ui={true} />
      <Card.Content>
        <Card.Header textAlign="center">
          {name ? name.charAt(0).toUpperCase() + name.slice(1) : ''}
        </Card.Header>
      </Card.Content>
    </Card>
  )
}
