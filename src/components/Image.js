import React from 'react'

export default function Image(
    {previewURL,largeImageURL,likes,tags, views}
) {
    
    return (
        <div className="col-md-3 mb-3">
            <div className="card ">
                <img 
                loading="lazy" 
                height="200"
                src={previewURL} 
                style={{objectFit:'cover'}}
                className="card-img-top" alt={tags}
                />
                <div className="card-body">
                    <p>{likes} me gusta</p>
                    <p>{views} vistas</p>
                    <a href={largeImageURL} target="_blank" className="btn btn-danger">ver mas </a>
                </div>
          </div>
        </div>
    )
}
