import React from 'react'

export default function Footer(props) {
  let toggleStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#212529' : 'white'
  }
  console.log(toggleStyle.color)

  return (
    <div>
        <div className={`text-center bg-body-tertiary bg-${props.mode} text-${props.mode === 'light'? 'dark':'light'} custome-Dborder-card pt-3`} style={toggleStyle} data-bs-theme={`${props.mode}`}>
          <div>
              Featured
          </div>
          <div>
              <h5>Special title treatment</h5>
              <p>With supporting text below as a natural lead-in to additional content.</p>
              <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
          <div className="card-footer text-body-secondary">
              2 days ago
          </div>
        </div>
    </div>
  )
}
