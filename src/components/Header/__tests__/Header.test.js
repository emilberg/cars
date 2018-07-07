import React from 'react'
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Header from '../Header';

describe('Header', () => {    
    let wrapper,
        mockTitle = 'Lorem',
        mockSubTitle = 'Ipsum';


    wrapper = shallow(<Header title={mockTitle} subTitle={mockSubTitle} />)


    it('renders without crashing', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('has a title', () => {
        expect(wrapper.find('.Header__title').text()).toEqual(mockTitle);
    });

    it('has a subTitle', () => {
        expect(wrapper.find('.Header__sub-title').text()).toEqual(mockSubTitle);
    });

});