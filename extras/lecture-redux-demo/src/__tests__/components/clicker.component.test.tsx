import React from 'react';
import { ClickerComponentProps, ClickerComponent } from '../../components/pages/clicker.component'
import { mount } from 'enzyme';

/**Test entire component */
describe('clicker.component', ()=>{
    test('Test number of Clicks', ()=>{
        const props: ClickerComponentProps ={ //testing this test-function to show 30
            clicks: 30,
            addClicks: ()=> {} //not be used in test
        };
        const wrapper = mount(<ClickerComponent {...props}/> );//Mount: test component file
        expect(wrapper).toBeDefined();
    });

    test('Render clicks in h2 display', ()=>{
        const props: ClickerComponentProps ={ //add 30 clicks
            clicks: 30,
            addClicks: ()=> {}
        };
        const wrapper = mount(<ClickerComponent {...props}/> ); 
        //console.log(wrapper.debug()); //debug: prints browser console output
        const header = wrapper.find('h2'); //find h2 text
        expect(header.text()).toContain(''+ props.clicks); //test 'cast clicks as string'+{clicks text} tp be 30 result
    });

    test('Calls addClicks() on button clicked', ()=>{
        const props: ClickerComponentProps ={
            clicks: 30,
            addClicks: jest.fn() //jest mock functionality
        };
        const wrapper = mount(<ClickerComponent {...props}/> ); 
        const button =wrapper.find('button'); //find button container
        button.simulate('click'); //simulate button click
        expect(props.addClicks).toBeCalled();
    })
});