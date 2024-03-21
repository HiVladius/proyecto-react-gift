import React from 'react'

function GifItem({ id, title, url}) {

    

  return (
    <div className='card'>
        <img id={id} src={url} alt={title} />
        <p id={id}>{title}</p>
    </div>
  )
}

export default GifItem