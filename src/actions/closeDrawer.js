import state from '../store';

function closeDrawer() {
  state.isDrawerOpen = false;
}
export default closeDrawer;
