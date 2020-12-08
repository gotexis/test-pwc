import React, { FC } from 'react';
import { Tooltip, Tag, List, Button, Popconfirm, Switch } from 'antd';
import { CloseOutlined, CheckOutlined, ExclamationOutlined } from '@ant-design/icons';

import './styles.less';
import { Todo } from 'store/todo/models/todo.model';

interface TodoItemProps {
  todo: Todo;
  onTodoRemoval: (todo: Todo) => void;
  onTodoToggle: (todo: Todo) => void;
  onTodoTogglePriority: (todo: Todo) => void;
}

export const TodoItem: FC<TodoItemProps> = ({
  todo,
  onTodoRemoval,
  onTodoToggle,
  onTodoTogglePriority,
}) => {
  return (
    <List.Item
      actions={[
        // PRIORITY
        <Tooltip
          title={todo.completed ? 'Mark as priority' : 'Unmark as priority'}
        >
          <Switch
            className='purple'
            checkedChildren={<ExclamationOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={() => onTodoTogglePriority(todo)}
            defaultChecked={todo.priority}
          />
        </Tooltip>,
        // COMPLETE
        <Tooltip
          title={todo.completed ? 'Mark as uncompleted' : 'Mark as completed'}
        >
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={() => onTodoToggle(todo)}
            defaultChecked={todo.completed}
          />
        </Tooltip>,
        // DELETE
        <Popconfirm
          title="Are you sure you want to delete?"
          onConfirm={() => {
            onTodoRemoval(todo);
          }}
        >
          <Button className="remove-todo-button" type="primary" danger>
            X
          </Button>
        </Popconfirm>,
      ]}
      className="list-item"
      key={todo.id}
    >
      <div className="todo-item">
        <Tag color={todo.priority ? 'purple' : (todo.completed ? 'cyan' : 'red')} className="todo-tag">
          {todo.name}
        </Tag>
      </div>
    </List.Item>
  );
};
