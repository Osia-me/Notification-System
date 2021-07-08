import React from 'react';
import './Button.css';

function Button({notify}) {

  return (
    <div className="button">
      <button className={`button-${notify.type} button-item`}>{notify.title}</button>
    </div>
  );
}

export default Button;
