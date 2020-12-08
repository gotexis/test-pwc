import React, { useState } from 'react';
import { Row, Card, PageHeader, Button, Dropdown, Menu } from 'antd';

import { Todo } from 'store/todo/models/todo.model';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodo,
  removeTodo,
  toggleTodoComplete,
  toggleTodoPriority,
  setSort
} from 'store/todo/actions';
import { RootState } from 'store/todo/reducers';
import { AddTodoForm } from 'components/AddTodoForm';
import { TodoList } from 'components/TodoList';
import { message } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import './styles.less';
import Col from 'components/Col';

const sortTypes = {
  name: 'Sort by name',
  priority: 'Sort by priority'
};

export const TodosContainer = () => {
  const todos: Todo[] = useSelector((state: RootState) => state.todo.todos);
  const sort: string = useSelector((state: RootState | any) => state.todo.sort);

  const todosSorted = [...todos]; // copy
  if (sort === 'name') {
    todosSorted.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  } else if (sort === 'priority') {
    todosSorted.sort((a, b) => Number(b.priority) - Number(a.priority));
  }

  const dispatch = useDispatch();

  const setSortInner = (sortType: string): void => {
    dispatch(setSort(sortType));
  };

  const handleFormSubmit = (todo: Todo): void => {
    dispatch(addTodo(todo));
    message.success('Todo added!');
  };

  const handleRemoveTodo = (todo: Todo): void => {
    dispatch(removeTodo(todo));
    message.warn('Todo removed!');
  };

  const handleTodoToggle = (todo: Todo): void => {
    dispatch(toggleTodoComplete(todo));
    message.info('Todo completeness updated!');
  };

  const handleTodoTogglePriority = (todo: Todo): void => {
    dispatch(toggleTodoPriority(todo));
    message.info('Todo priority state updated!');
  };

  return (
    <Row
      justify='center'
      align='middle'
      gutter={[0, 20]}
      className='todos-container'
    >
      <Col>
        <PageHeader
          title='ExIs PwC ReAcT ToDo ApP'
          subTitle='To add a todo, just fill the form below and click in add todo.'
        />
      </Col>

      <Col>
        <Card title='Create a new todo'>
          <AddTodoForm onFormSubmit={handleFormSubmit} />
        </Card>
      </Col>

      <Col>
        <Card
          title={`${todos.length} Todos / ${todos.filter(t => t.completed).length} Completed`}
          extra={[
            <Dropdown key='more' trigger={['click']} overlay={
              <Menu onClick={({ key }) => setSortInner(String(key))}>
                <Menu.Item key='priority'> Sort by priority </Menu.Item>
                <Menu.Item key='name'> Sort by name </Menu.Item>
              </Menu>}>
              <Button>
                {sortTypes[sort]}
                <DownOutlined />
              </Button>
            </Dropdown>
          ]}>
          <TodoList
            todos={todosSorted}
            onTodoRemoval={handleRemoveTodo}
            onTodoToggle={handleTodoToggle}
            onTodoTogglePriority={handleTodoTogglePriority}
          />
        </Card>
      </Col>
    </Row>
  );
};
