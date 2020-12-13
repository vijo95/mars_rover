import React from 'react'
import Pagination from './Pagination'
import SinglePhoto from './SinglePhoto'

export default function ListPhotos({photos, page, setPage, rover,fetchPhotos}) {
  return (
    <>
      <Pagination 
        page={page}
        setPage={setPage}
        rover={rover}
        fetchPhotos={fetchPhotos}
      />
      <div style={{margin:'auto',padding:'5px', maxWidth:'800px'}}>
        <div className="grid-container">
          { photos ? 
            photos.length === 0 ?
            <h1>Nothing to see here..</h1> :
            photos.map((photo,index) =>
            <SinglePhoto key={index}
              img={photo.img_src}
            />) : null
          }
        </div>
      </div>
    </>
  )
}
