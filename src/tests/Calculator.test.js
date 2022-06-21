import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container, button1, button4, buttonAdd, buttonEquals, runningTotal;
  beforeEach(() => {
    container = mount(<Calculator/>)
    button1 = container.find('#number1');
    button4 = container.find('#number4');
    buttonAdd = container.find('#operator-add');
    buttonEquals = container.find('#operator-equals');
    runningTotal = container.find('#running-total');
  })

  it('should change running total on number enter', () => {
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should be able to accurately add two integers', () => {
    button1.simulate('click');
    buttonAdd.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })
})
