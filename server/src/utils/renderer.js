import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';

export default ()=>{
    const content = renderToString(<Home />);
    //by importing ${content}, the browser will have a complete html string to render, which has no javascript with it
    //but this will enhance the server side rendering
    return `
        <html>
            <head></head>
            <body>
                <div id="app">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `
}