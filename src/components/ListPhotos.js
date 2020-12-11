import React from 'react'
import SinglePhoto from './SinglePhoto'

export default function ListPhotos({photos}) {
  return (
    <div style={{margin:'auto',padding:'5px', maxWidth:'800px'}}>
      <div className="grid-container">
        { photos.length === 0 ?
          <h1>Nothing..</h1> :
          photos.map((photo,index) =>
          <SinglePhoto key={index}
            img={photo.img_src}
          />)
        }
      </div>
    </div>
  )
}
