import React from 'react';
import { shallow } from 'enzyme';
import Form from './form_component';

describe('<Form />', () =>{
    it('it renders a form', () => {
        const form = shallow(<Form />);
        expect(form.find('form').length).toEqual(1);      
    });
})
