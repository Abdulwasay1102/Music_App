import React from 'react'

const Card = ({song}) => {
  // console.log(song);
  
  return (
<>
  <div className="container mt-5">
    <div className="row g-4">
      {song.map((music) => (
        <div className="col-12 col-md-4" key={music.trackId}>
          
          <div className="card h-100 shadow border-0 rounded-4">
            
            <img
              src={music.artworkUrl100.replace("100x100", "800x800")}
              className="card-img-top rounded-top-4 img-fluid"
              alt={music.trackName}
            />

            <div className="card-body d-flex flex-column text-center">
              
              <h6 className="fw-bold text-truncate">
                {music.trackName}
              </h6>

              <p className="text-muted small mb-3">
                {music.artistName}
              </p>

              <audio
                src={music.previewUrl}
                controls
                className="w-100 mt-auto"
              ></audio>

            </div>

          </div>

        </div>
      ))}
    </div>
  </div>
</>

  )
}

export default Card
