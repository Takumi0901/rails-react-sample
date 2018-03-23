import React from 'react';
import {shallow} from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ListItem from './LinkMenuItem';

describe('domのテスト', ()=>{
  test('ListItemコンポーネントをレンダリングする', ()=>{
    const elem = shallowToJson(shallow(<ListItem path={"hoge"} name={"fuga"}/>));
    expect(elem).toMatchSnapshot();
  });
});