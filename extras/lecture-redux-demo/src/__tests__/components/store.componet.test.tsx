import React from 'react';
import { StoreComponent, StoreComponentProps } from '../../components/pages/store.component';
import { mount } from 'enzyme';

//Pass into <StoreComponent> as props
const commonProps: StoreComponentProps = {
    clicks:0,
    pokemon: undefined,
    removeClicks: jest.fn(),
    buyPokemon: jest.fn()
}

describe('<StoreComponent/>', ()=>{
    test('Test <StoreComponent> wrapper', ()=> {
        const wrapper = mount(<StoreComponent {...commonProps}/> );
        expect(wrapper).toBeDefined();
    });

    test('Buy button disabled at < 25 clicks', ()=>{
        const props = {...commonProps, clicks: 24};
        const wrapper = mount(<StoreComponent {...commonProps}/> );
        const button = wrapper.find('button');
        expect(button.prop('disabled')).toBeTruthy();
    })
});