import state from '../store';

function toggleDrawer() {
  state.isDrawerOpen = !state.isDrawerOpen;
}
export default toggleDrawer;
