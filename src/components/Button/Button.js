import React, { useContext } from 'react';
import './Button.css';
import { NotificationContext } from '../../NotificationSystem';

function Button({notify}) {
  const dispatch = useContext(NotificationContext);

  const HandleCreateNotification = () => {
    dispatch({
      id: notify.id,
      type: 'ADD_NOTIFICATION',
      payload: {
        type: notify.type,
        message: notify.message,
        title: notify.title
      }
    })
  }

  return (
    <div className="button">
      <button className={`button-${notify.type} button-item`} onClick={HandleCreateNotification}>{notify.type}</button>
    </div>
  );
}

export default Button;
