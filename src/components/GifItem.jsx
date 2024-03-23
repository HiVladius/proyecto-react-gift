import React from 'react'
import PropTypes from 'prop-types'

function GifItem({ id, title, url}) {

    

  return (
    <div className='card'>
        <img id={id} src={url} alt={title} />
        <p id={id}>{title}</p>
    </div>
  )
}

export default GifItem


GifItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
    
}

