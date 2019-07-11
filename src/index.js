import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class Home extends React.Component {

    render() {
        return (
            <App />
        );
    }
}


ReactDOM.render(<Home />, document.getElementById("root"));



