import { combineReducers } from 'redux';

import slideshowReducer from './slideshowReducer';

const rootReducer = combineReducers({
  slideshow: slideshowReducer,
});

export default rootReducer;
