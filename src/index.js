import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClickButton from './clickButton';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ClickButton />, document.getElementById('root'));
registerServiceWorker();
