import React from 'react';
import './Slideshow.css';
import BackendService from '../../../API/BackendService';
import Loader from '../Loader';

class Slideshow extends React.Component {
  constructor(props) {
    super(props);

    this.backendService = new BackendService();

    this.state = {
      currentPlanet: null,
      interval: null,
    };
  }

  loadRandomPlanet = () => {
    this.setState(() => ({
      currentPlanet: null,
    }));

    this.backendService.getRandomPlanet().then((result) => {
      this.setState(() => ({
        currentPlanet: result,
      }));
    });
  };

  componentDidMount() {
    this.loadRandomPlanet();

    const interval = setInterval(
      this.loadRandomPlanet,
      this.props.milliseconds,
    );

    this.setState({ interval });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    const { currentPlanet } = this.state;

    return (
      <div className="card slideshow">
        {currentPlanet ? (
          <>
            <img
              src={
                currentPlanet
                  ? this.backendService.getImagePath(currentPlanet)
                  : null
              }
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
          <Loader />
        )}
      </div>
    );
  }
}

Slideshow.defaultProps = {
  milliseconds: 2000,
};

export default Slideshow;
