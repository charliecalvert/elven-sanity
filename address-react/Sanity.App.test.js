
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import elvenCode from 'elven-code';
import Adapter from 'enzyme-adapter-react-16';
import ElfDebugEnzyme from '../tests/ElfDebugEnzyme';
import {configure, shallow} from 'enzyme';

// Install elfUtils: npm i elven-code

const elfDebugEnzyme = new ElfDebugEnzyme(false, 'App.test.js', true);
configure({adapter: new Adapter()});

describe('App Tests', () => {

    xit('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    xit('checks if App.js exists', () => {
        const fileName = __dirname + '/../App.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    xit('checks if App.test.js exists', () => {
        const fileName = __dirname + '/../tests/App.test.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });

    xit('checks if ElfDebugEnzyme exists', () => {
        const fileName = __dirname + '/../tests/ElfDebugEnzyme.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });
});
