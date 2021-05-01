// require('file-loader?name=[name].[ext]!../public/index.html')
import React from 'react';
import ReactDom from 'react-dom';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
const appElement = document.getElementById('app');
ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,

    appElement);

