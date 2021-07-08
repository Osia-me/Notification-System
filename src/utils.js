import uniqid from 'uniqid';

const notifications = [
  {
    id: uniqid(),
    type:'success',
    title: 'SUCCESS',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: uniqid(),
    type:'error',
    title: 'ERROR',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: uniqid(),
    type:'warning',
    title: 'WARNING',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: uniqid(),
    type:'information',
    title: 'INFORMATION',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

export default notifications;
