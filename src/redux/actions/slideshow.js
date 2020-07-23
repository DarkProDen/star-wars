import {
  SET_CURRENT_PLANET,
  SET_INTERVAL,
  CLEAR_INTERVAL,
} from '../types/slideshow';
import BackendService from '../../API/BackendService';

const backendService = new BackendService();

export function setInterval(milliseconds = 2000) {
  return { type: SET_INTERVAL, milliseconds };
}

export function clearInterval() {
  return { type: CLEAR_INTERVAL };
}

export function loadRandomPlanet() {
  return async (dispatch) => {
    dispatch(setCurrentPlanet(null));

    const result = await backendService.getRandomPlanet();

    dispatch(setCurrentPlanet(result));
  };
}

export function setCurrentPlanet(planet) {
  return { type: SET_CURRENT_PLANET, planet };
}
