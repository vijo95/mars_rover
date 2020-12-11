import React from 'react'

export default function SinglePhoto({img}) {
  return (
    <div className="img_wrap_grid">
      <img alt=""
        className="img-post"
        width="100%"
        height="100%"
        src={img}
      />
    </div>
  )
}
