import { store } from '@risingstack/react-easy-state';

const state = store({
  isDrawerOpen: false,
  links: [
    { key: 0, name: 'Dashboard', url: '/dashboard' },
    { key: 1, name: 'Profile', url: '/profile' },
    { key: 2, name: 'Settings', url: '/settings' },
  ],
});
export default state;
