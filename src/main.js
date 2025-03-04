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

// Redirect to Teams web app
window.location.href = 'https://teams.microsoft.com';
