import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { TodosContainer } from './index';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

configure({adapter: new Adapter()});

describe("TodosList", () => {
  let wrapper
  beforeAll(() => {

    wrapper = mount(
      <Provider store={store}>
        <TodosContainer />
      </Provider>);
  });

})
