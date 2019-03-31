import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from './main';

import './styles/main.scss';

const mountNode = document.getElementById('app');
ReactDOM.render(<MainLayout />, mountNode);
