import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

//use hydrate when we imported the HTML string in the renderer.js ${content}
ReactDOM.hydrate(<Home />,document.getElementById("app"))