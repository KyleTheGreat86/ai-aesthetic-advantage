
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Ensure we have basic meta tags that can be updated by the pages
document.head.innerHTML += `
  <meta name="description" content="Agency Eagle Eye - Florida's CRE AI specialists">
  <meta name="keywords" content="CRE, AI, Florida, Real Estate">
`;

createRoot(document.getElementById("root")!).render(<App />);
