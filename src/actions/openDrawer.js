import state from '../store';
function openDrawer() {
  console.log(state.isDrawerOpen);
  state.isDrawerOpen = !state.isDrawerOpen;
}
export default openDrawer;
