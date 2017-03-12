import React from 'react';
import ReactDOM from 'react-dom';
import '../style/sidebar.css';
import '../style/style.css';
import App from'./components/App';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextRootContainer = require('./components/App').default;
        ReactDOM.render(<NextRootContainer />, document.getElementById('root'));
    })
}