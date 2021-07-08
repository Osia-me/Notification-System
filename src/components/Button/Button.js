import React from 'react';

function Button({notify}) {

  return (
    <div className="button">
      <button className={`button-item-${notify.type}`}>{notify.title}</button>
    </div>
  );
}

export default Button;
