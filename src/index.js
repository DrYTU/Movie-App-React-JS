import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';

import App from './components/App.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(<App />)