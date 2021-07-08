import React from 'react';
import Button from '../Button/Button';
import notifications from '../../utils';
import './Buttons.css';

function Buttons() {

  return (
    <div className="buttons">
      {notifications.map(notify => <Button notify={notify} key={notify.id}/>)}
    </div>
  );
}

export default Buttons;
