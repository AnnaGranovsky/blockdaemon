import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// Create root node
const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<App />, root);
