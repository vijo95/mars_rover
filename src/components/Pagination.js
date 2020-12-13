import React from 'react'
import { Icon, Label } from 'semantic-ui-react'

export default function Pagination({page, setPage, rover, fetchPhotos}) {

  function handlePageIncrease() {
    setPage(page+1)
    fetchPhotos(rover, page+1)
  }

  function handlePageDecrease(){
    if(1 < page){
      setPage(page-1)
      fetchPhotos(rover, page-1)
    }
  }

  return (
    <div style={{textAlign:'center', margin:'20px'}}>
      <Icon 
        link name="angle left" 
        size="huge"
        onClick={() => handlePageDecrease()}
      />

      <Label circular size="huge">
        {page}
      </Label>

      <Icon 
        link name="angle right"  
        size="huge"
        onClick={() => handlePageIncrease()}
      />
    </div>
  )
}
