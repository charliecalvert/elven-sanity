import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { TheTheme } from '../TheTheme';

configure({ adapter: new Adapter() });
const debug = process.env.REACT_APP_ELF_LOGGER === 'sanity-the-theme-test' ? console.log : () => {};

describe('Sanity GetGist Layout Tests', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<TheTheme />);
    });

    afterEach(() => {
        wrapper = null;
    });

    it('proves we can run a test', () => {
        expect(true).toBe(true);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TheTheme />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('checks that getGist is a function', () => {
        expect(typeof TheTheme).toBe('function');
    });

    it('checks that we use MuiThemeProvider', () => {
        expect(wrapper.find('ThemeProvider').length).toBe(1);
    });

    it('checks that we use CssBaseLine', () => {
        debug(wrapper.debug());
        expect(wrapper.find('CssBaseline').length).toBe(1);
    });

});
