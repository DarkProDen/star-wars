import {
  SET_INTERVAL,
  CLEAR_INTERVAL,
  SET_CURRENT_PLANET,
} from '../types/slideshow';
import store from '../store';
import { loadRandomPlanet } from '../actions/slideshow';

const initialState = {
  currentPlanet: null,
  interval: null,
};

const slideshowReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PLANET:
      return { ...state, currentPlanet: action.planet };

    case SET_INTERVAL:
      return {
        ...state,
        interval: setInterval(() => {
          store.dispatch(loadRandomPlanet());
        }, action.milliseconds),
      };

    case CLEAR_INTERVAL:
      clearInterval(state.interval);
      return state;

    default:
      return state;
  }
};

export default slideshowReducer;
