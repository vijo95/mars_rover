import React from 'react'
import { Icon, Label } from 'semantic-ui-react'

export default function Pagination({page, setPage, rover, fetchPhotos}) {

  function handlePageChange(n) {
    if(1 <= page+n){
      setPage(page+n)
      fetchPhotos(rover, page+n)
    }
  }



  return (
    <div style={{textAlign:'center', margin:'20px'}}>
      <Icon 
        link name="angle double left" 
        size="big"
        onClick={() => handlePageChange(-10)}
      />

      <Icon 
        link name="angle left" 
        size="big"
        onClick={() => handlePageChange(-1)}
      />

      <Label circular size="huge">
        {page}
      </Label>

      <Icon 
        link name="angle right"  
        size="big"
        onClick={() => handlePageChange(1)}
      />

      <Icon 
        link name="angle double right"  
        size="big"
        onClick={() => handlePageChange(10)}
      />
    </div>
  )
}
