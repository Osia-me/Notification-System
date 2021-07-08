import React, { useContext } from 'react';
import './Button.css';
import NotificationSystem from '../../NotificationSystem';

function Button({notify}) {

  const dispatch = useContext(NotificationSystem);

  const HandleCreateNotification = () => {
    console.log("here")
    dispatch({
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
