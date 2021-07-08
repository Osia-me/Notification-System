import React from 'react';
import { AiOutlineCheckCircle, AiOutlineClose } from "react-icons/ai";
import { GoCircleSlash, GoIssueOpened, GoInfo } from "react-icons/go";
import './Notification.css';


function Notification({notify}) {
  const generateIcon = (type) => {
    if(type === 'success') return <AiOutlineCheckCircle/>
    if(type === 'information') return <GoInfo/>
    if(type === 'error') return <GoCircleSlash/>
    if(type === 'warning') return <GoIssueOpened/>
  }

  return (
    <div className={`notification-wrap notification-item_${notify.type}`}>
      <div className='notification-item'>
        <p className={`notification-icon notification-icon_${notify.type}`}>{generateIcon(notify.type)}</p>
        <p className='notification-title'>{notify.title}</p>
        <p className='notification-icon_close'><AiOutlineClose/></p>
      </div>
      <div>
        <p className='notification-message'>{notify.message}</p>
      </div>
    </div>
  );
}

export default Notification;
