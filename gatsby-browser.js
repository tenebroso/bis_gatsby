import './src/styles/typography.css';
import './src/styles/index.css';

export const onRouteUpdate = ({ location, prevLocation }) => {
  const el = document.querySelector('.page-content.dark-bg');
  if(location.hash) {
    if (el) {
      el.classList.add('add-space');
    }
  } else {
    if (el) {
      el.classList.remove('add-space');
    }
  }
}