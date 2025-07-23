import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PhotoPromptStudio from './PhotoPromptStudio';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <PhotoPromptStudio />
  </React.StrictMode>
);