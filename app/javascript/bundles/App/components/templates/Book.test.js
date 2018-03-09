import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {mountToJson, shallowToJson} from 'enzyme-to-json';
import Books from './Books';

describe('domのテスト', ()=>{
  test('Bookコンポーネントをレンダリングする', ()=>{
    const elem = shallow(<Books books={{list: [1, 2, 3]}}/>);
    expect(elem).toMatchSnapshot();
  });
});