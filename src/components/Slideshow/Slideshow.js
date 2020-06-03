import React from 'react';
import './Slideshow.css';
import fetchUnitsList from '../../API/fetchUnitsList';
import { planetsURL } from '../../API/URLs';
import getImagePath from '../../API/getImagePath';
import getRandomInt from '../../misc/getRandomInt';

class Slideshow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planetsList: [],
      planetsListError: false,
      currentPlanet: null,
    };
  }

  loadPlanetsList() {
    fetchUnitsList(planetsURL)
      .then((result) => {
        this.setState((state) => {
          return {
            planetsList: result,
            currentPlanet: result[0],
            planetsListError: false,
          };
        });
      })
      .catch(() => {
        this.setState({ planetsListError: true });
      });
  }

  componentDidMount() {
    this.loadPlanetsList();
    setInterval(() => {
      this.setState((state) => {
        return {
          currentPlanet:
            state.planetsList[getRandomInt(state.planetsList.length)],
        };
      });
    }, 3000);
  }

  render() {
    const currentPlanet = this.state.currentPlanet;

    return (
      <div className="card slideshow">
        {currentPlanet ? (
          <>
            <img
              src={currentPlanet ? getImagePath(currentPlanet) : null}
              alt="Image not found"
              className="slideshow__img card-img"
            />
            <div>
              <h4 className="slideshow__title">{currentPlanet.name}</h4>
              <div className="slideshow__fields-wrap">
                <div className="slideshow__field">
                  Population: {currentPlanet.population}
                </div>
                <div className="slideshow__field">
                  Rotation period: {currentPlanet.rotation_period}
                </div>
                <div className="slideshow__field">
                  Diameter: {currentPlanet.diameter}
                </div>
              </div>
            </div>
          </>
        ) : (
          'Loading...'
        )}
      </div>
    );
  }
}

export default Slideshow;
