import { registerSW } from 'virtual:pwa-register';
import './style.css';

// Register service worker for PWA functionality
registerSW({
  onNeedRefresh() {
    // Prompt user to update when new version is available
    if (confirm('New content available. Reload?')) {
      window.location.reload();
    }
  }
});

// Initialize the app
window.addEventListener('load', () => {
  // Redirect to Teams web app
  window.location.replace('https://teams.microsoft.com');
});
