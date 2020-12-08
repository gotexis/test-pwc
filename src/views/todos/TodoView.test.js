import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { TodosContainer } from './index';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

configure({adapter: new Adapter()});

describe("TodoView", () => {
  let wrapper
  beforeAll(() => {

    wrapper = mount(
      <Provider store={store}>
        <TodosContainer />
      </Provider>);
  });

  it("should display proper number of tasks in list", () => {
  })

  it("should display proper number of completed / total task", () => {
  })

  it("should sort the todos accordingly to the filters", () => {
  })

})
