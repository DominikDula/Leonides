import React from 'react'

const Map = () => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <iframe
        src="https://www.google.com/maps?q=48.9985,21.2391&hl=es;z=14&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0, filter: 'grayscale(100%)' }}
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
export default Map
