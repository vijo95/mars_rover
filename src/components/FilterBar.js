import React from 'react'
import { Button, Dropdown, Menu, Input } from 'semantic-ui-react'
import DatePicker from './DatePicker'

export default function FilterBar({setDateType,setSolDate,setEarthDate,setCamera,
  solDate,earthDate,camera,fetchPhotos,rover}) {

    function handleSolChange(event) {
      event.preventDefault()
      setSolDate(parseInt(event.target.value))
      setDateType("sol")
      setEarthDate('')
      setCamera('')
    }

    function handleCameraChange(name){
      if(name !== ''){
        setCamera(`&camera=${name}`)
      }else{
        setCamera(``)
      }
    }

    return (
      <Menu size='large' style={{maxWidth:'800px', margin:'20px auto'}}>

        <Menu.Item>
          <Input 
            value={solDate}
            onChange={(event) => handleSolChange(event)}
            placeholder='Sol date' 
          />
        </Menu.Item>

        <Menu.Item>
          <DatePicker 
            setDateType={setDateType}
            setEarthDate={setEarthDate}
            setSolDate={setSolDate}
            earthDate={earthDate}
          />
        </Menu.Item>

        <Menu.Menu>
          <Dropdown item text={camera ? camera.split("=")[1].toUpperCase() : "Camera"}>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleCameraChange('')}>Default</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCameraChange('fhaz')}>Front Hazard Avoidance Camera</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCameraChange('rhaz')}>Rear Hazard Avoidance Camera</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCameraChange('mast')}>Mast Camera</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCameraChange('chemcam')}>Chemistry and Camera Complex</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCameraChange('mahli')}>Mars Hand Lens Imager</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCameraChange('mardi')}>Mars Descent Imager</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCameraChange('navcam')}>Navigation Camera</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCameraChange('pancam')}>Panoramic Camera</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCameraChange('minites')}>Miniature Thermal Emission Spectrometer (Mini-TES)</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>

        <Menu.Item position="right">
          <Button primary
            onClick={() => fetchPhotos(rover)}
          >
            Filtrar
          </Button>
        </Menu.Item>

      </Menu>
    )
}