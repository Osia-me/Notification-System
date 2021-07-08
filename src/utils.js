import uniqid from 'uniqid';

const notifications = [
  {
    id: uniqid(),
    type:'success',
    title: 'Lorem ipsum',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut abore et dolore magna aliqua abore et dolore magna aliqua.'
  },
  {
    id: uniqid(),
    type:'error',
    title: 'Lorem ipsum',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua abore et dolore magna aliqua.'
  },
  {
    id: uniqid(),
    type:'warning',
    title: 'Lorem ipsum',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua abore et dolore magna aliqua.'
  },
  {
    id: uniqid(),
    type:'information',
    title: 'Lorem ipsum',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua abore et dolore magna aliqua.'
  }
];

export default notifications;
