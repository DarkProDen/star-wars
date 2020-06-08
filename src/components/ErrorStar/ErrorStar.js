import React from 'react';
import './ErrorStar.css';
import deathStarImg from '../../assets/img/DeathStar.png';

function ErrorStar(props) {
  return (
    <div className="error-star">
      <img className="error-star__img" src={deathStarImg} />
      <div>
        <h2>Error{props.errorMessage ? ':' : null}</h2>
        {props.errorMessage}
      </div>
    </div>
  );
}

export default ErrorStar;
