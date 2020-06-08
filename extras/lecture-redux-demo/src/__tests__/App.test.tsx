import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
/**Test All */


describe('App.tsx', ()=>{
  test('shoud render', () => { //Changed from test linksElemnts to test all
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
  });  
});
