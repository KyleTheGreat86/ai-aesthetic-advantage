
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// More aggressive removal of any edit buttons
const removeEditButtons = () => {
  // Target all possible selectors
  const selectors = [
    '[class*="lovable"]',
    '[id*="lovable"]',
    '[class*="gpt-engineer"]', 
    '[id*="gpt-engineer"]',
    '[class*="pick-edit"]',
    '[id*="pick-edit"]',
    '[class*="edit"]',
    '[id*="edit"]',
    '.chat-button',
    '.fab',
    '.floating-action-button',
    '.edit-button',
    '[style*="position: fixed"]',
    '[style*="bottom: 0"]',
    '[style*="right: 0"]'
  ];
  
  // Remove matching elements
  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      // Check if element is likely to be an edit button (positioned in corner, has certain attributes)
      const computedStyle = window.getComputedStyle(el);
      const isFixed = computedStyle.position === 'fixed';
      const isBottomRight = 
        (computedStyle.bottom === '0px' || parseInt(computedStyle.bottom) < 100) && 
        (computedStyle.right === '0px' || parseInt(computedStyle.right) < 100);
      
      if (
        el.classList.toString().includes('edit') || 
        el.id.includes('edit') || 
        el.classList.toString().includes('lovable') ||
        el.classList.toString().includes('gpt') ||
        (isFixed && isBottomRight) ||
        el.tagName === 'BUTTON' && isFixed
      ) {
        console.log('Removing element:', el);
        el.remove();
      }
    });
  });
  
  // Block any iframes that might be injecting content
  document.querySelectorAll('iframe').forEach(iframe => {
    if (
      iframe.src.includes('lovable') || 
      iframe.src.includes('gpt') || 
      iframe.src.includes('edit')
    ) {
      iframe.remove();
    }
  });
  
  // Monitor for mutations to catch dynamically added elements
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        removeEditButtons();
      }
    });
  });
  
  // Start observing the document
  observer.observe(document.body, { 
    childList: true,
    subtree: true
  });
};

// Run on load and periodically check
window.addEventListener('DOMContentLoaded', removeEditButtons);
window.addEventListener('load', removeEditButtons);
setInterval(removeEditButtons, 500); // Check every half second

// Add event listeners to catch any script loading
document.addEventListener('DOMNodeInserted', function(e) {
  if (e.target instanceof HTMLElement && e.target.tagName === 'SCRIPT') {
    const script = e.target as HTMLScriptElement;
    if (
      script.src.includes('lovable') || 
      script.src.includes('gpt') || 
      script.src.includes('engineer') ||
      script.src.includes('edit')
    ) {
      e.preventDefault();
      script.remove();
    }
  }
}, true);

// Override any functions that might be adding the edit button
window.addEventListener('load', () => {
  if (window.addEventListener) {
    const originalAddEventListener = window.addEventListener;
    window.addEventListener = function(type, listener, options) {
      if (typeof listener === 'function' && type === 'load') {
        const wrappedListener = function() {
          listener.apply(this, arguments);
          removeEditButtons();
        };
        return originalAddEventListener.call(this, type, wrappedListener, options);
      }
      return originalAddEventListener.call(this, type, listener, options);
    };
  }
});

createRoot(document.getElementById("root")!).render(<App />);
