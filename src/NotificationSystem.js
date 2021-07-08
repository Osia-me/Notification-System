import React, { createContext, useReducer } from 'react';
import Notification from './components/Notification/Notification';
import './NotificationSystem.css';

import notifications from './utils';

const NotificationContext = createContext();

function NotificationSystem({children}) {

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_NOTIFICATION":
        return [...state, {...action.payload}];
      case "REMOVE_NOTIFICATION":
        return state.filter(el => el.id !== action.id);
      default:
        return state
    }
  }, [notifications]);


  return (
    <NotificationContext.Provider value={dispatch}>
      <div className="notification-system">
        <div className="notification-container">
          {state.map((notify, index) =>
            <Notification
              key={notify.id}
              notify={notify}
              dispatch={dispatch}
            />
          )}
        </div>
        {children}
      </div>
    </NotificationContext.Provider>
  );
}

export default NotificationSystem;
