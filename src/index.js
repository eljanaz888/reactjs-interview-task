import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');

const reactRoot = createRoot(root);
reactRoot.render(<App />);


