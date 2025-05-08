
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Remove any edit buttons that might be injected
const removeEditButtons = () => {
  const selectors = [
    '[class*="lovable-edit"]',
    '[id*="lovable-edit"]',
    '[class*="gpt-engineer"]', 
    '[id*="gpt-engineer"]',
    '[class*="pick-edit"]',
    '[id*="pick-edit"]'
  ];
  
  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.remove();
    });
  });
};

// Run on load and periodically check
window.addEventListener('DOMContentLoaded', removeEditButtons);
window.addEventListener('load', removeEditButtons);
setInterval(removeEditButtons, 1000); // Check every second

createRoot(document.getElementById("root")!).render(<App />);
