import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './app_components/form_component';

describe('<Form />', () =>{
    it('it renders a form', () => {
        const form = shallow(<Form />);
        expect(form.find('form').length).toEqual(1);      
    });
})
