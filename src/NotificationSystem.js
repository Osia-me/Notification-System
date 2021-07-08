import React from 'react';
import Notification from './components/Notification/Notification';
import './NotificationSystem.css';

import notifications from './utils';

function NotificationSystem({children}) {

  return (
    <div className="notification-system">
      <div className="notification-container">
        {notifications.map(notify =>
          <Notification
            key={notify.id}
            notify={notify}
          />
        )}
      </div>
      {children}
    </div>
  );
}

export default NotificationSystem;
