import React from 'react';
import './Slideshow.css';

function Slideshow() {
  return (
    <div className="card slideshow">
      <img
        src="https://starwars-visualguide.com/assets/img/planets/3.jpg"
        className="slideshow__img card-img"
      />
      <div>
        <h4 className="slideshow__title">Planet name</h4>
        <div className="slideshow__fields-wrap">
          <div className="slideshow__field">Population</div>
          <div className="slideshow__field">Rotation period</div>
          <div className="slideshow__field">Diameter</div>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
