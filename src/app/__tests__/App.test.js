import React from 'react'
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { App } from '../App';

configure({ adapter: new Adapter() });

describe('App', () => {
    let wrapper;

    wrapper = shallow(<App />)

    it('renders without crashing', () => {
        expect(wrapper.length).toEqual(1);
    });


});


