import React from 'react';
import Button from '../Button/Button';
import notifications from '../../utils';

function Buttons() {

  return (
    <div className="buttons">
      {notifications.map(notify => <Button notify={notify} key={notify.id}/>)}
    </div>
  );
}

export default Buttons;
