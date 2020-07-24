import React, { useEffect } from 'react';
import './Slideshow.css';
import Loader from '../Loader';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  loadRandomPlanet,
  setInterval,
  clearInterval,
} from '../../../redux/actions/slideshow';
import BackendService from '../../../API/BackendService';

const getImagePath = BackendService.prototype.getImagePath;

function Slideshow({ milliseconds }) {
  const currentPlanet = useSelector((state) => state.slideshow.currentPlanet);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRandomPlanet());
    dispatch(setInterval(milliseconds || 2000));

    return function componentWillUnmount() {
      dispatch(clearInterval());
    };
  }, []);

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

export default Slideshow;
