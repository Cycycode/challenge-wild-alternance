// == Import : npm
import React from 'react';
import { render } from 'react-dom';

// == Import : local
// Component
import App from 'src/components/App';

// == Render
const rootReactElement = <App />;
const target = document.getElementById('root');
render(rootReactElement, target);
