import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container,
      button0, button1, button2, button3, button4, button5, button7,
      buttonAdd, buttonSubtract, buttonMultiply, buttonDivide, buttonEquals,
      runningTotal;

  beforeEach(() => {
    container = mount(<Calculator/>)
    button0 = container.find('#number0');
    button1 = container.find('#number1');
    button2 = container.find('#number2');
    button3 = container.find('#number3');
    button4 = container.find('#number4');
    button5 = container.find('#number5');
    button7 = container.find('#number7');
    buttonAdd = container.find('#operator-add');
    buttonSubtract = container.find('#operator-subtract');
    buttonMultiply = container.find('#operator-multiply');
    buttonDivide = container.find('#operator-divide');
    buttonEquals = container.find('#operator-equals');
    runningTotal = container.find('#running-total');
  });

  it('should change running total on number enter', () => {
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  });

  it('should be able to accurately add two integers', () => {
    button1.simulate('click');
    buttonAdd.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  });

  it('should be able to accurately subtract one integer from another', () => {
    button7.simulate('click');
    buttonSubtract.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  });

  it('should be able to accurately multiply two integers', () => {
    button3.simulate('click');
    buttonMultiply.simulate('click');
    button5.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  });

  it('should be able to concatenate number clicks', () => {
    button1.simulate('click');
    button2.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('12');
  });

  it('should be able to accurately divide one integer by another', () => {
    button2.simulate('click');
    button1.simulate('click');
    buttonDivide.simulate('click');
    button7.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  });

  it('should be able to chain operations together', () => {
    button5.simulate('click');
    buttonMultiply.simulate('click');
    button1.simulate('click');
    button0.simulate('click');
    buttonDivide.simulate('click');
    button2.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('25');
  });

});
