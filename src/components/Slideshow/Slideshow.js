import React from 'react';
import './Slideshow.css';
import { render } from 'react-dom';

class Slideshow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planetsList: props.planetsList,
      currentPlanet: props.planetsList[0],
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ currentPlanet: this.state.planetsList[4] });
    }, 1000);
  }

  render() {
    const currentPlanet = this.state.currentPlanet;

    return (
      <div className="card slideshow">
        <img
          src="https://starwars-visualguide.com/assets/img/planets/3.jpg"
          alt="Image not found"
          className="slideshow__img card-img"
        />
        <div>
          <h4 className="slideshow__title">currentPlanet.name</h4>
          <div className="slideshow__fields-wrap">
            <div className="slideshow__field">Population</div>
            <div className="slideshow__field">Rotation period</div>
            <div className="slideshow__field">Diameter</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slideshow;
