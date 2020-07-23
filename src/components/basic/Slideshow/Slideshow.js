import React from 'react';
import './Slideshow.css';
import Loader from '../Loader';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  loadRandomPlanet,
  setInterval,
  clearInterval,
} from '../../../redux/actions/slideshow';
import BackendService from '../../../API/BackendService';

const getImagePath = BackendService.prototype.getImagePath;

class Slideshow extends React.Component {
  componentDidMount() {
    const { loadRandomPlanet, setInterval, milliseconds } = this.props;

    loadRandomPlanet();
    setInterval(milliseconds);
  }

  componentWillUnmount() {
    this.props.clearInterval();
  }

  render() {
    const currentPlanet = this.props.currentPlanet;

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
          <Loader />
        )}
      </div>
    );
  }
}

Slideshow.defaultProps = {
  milliseconds: 2000,
};

Slideshow.propTypes = {
  milliseconds: PropTypes.number,
};

const mapStateToProps = (state) => {
  return {
    currentPlanet: state.slideshow.currentPlanet,
  };
};

const mapDispatchToProps = {
  loadRandomPlanet,
  setInterval,
  clearInterval,
};

export default connect(mapStateToProps, mapDispatchToProps)(Slideshow);
