import React from 'react';
import elvenCode from 'elven-code';
import ReactDOM from 'react-dom';
import App from '../source/App';
import Go from '../source/Go';
import First from '../source/First';
import Lister from '../source/AddressLister';
import AddressForm from '../source/AddressForm';
import AddressShow from '../source/AddressShow';

describe('Components Suite', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Go />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<First />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

});
