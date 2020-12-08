import React, { FC } from 'react';
import { List } from 'antd';
import { Todo } from 'store/todo/models/todo.model';
import { TodoItem } from 'components/TodoItem';

interface TodoListProps {
  todos: Todo[];
  onTodoRemoval: (todo: Todo) => void;
  onTodoToggle: (todo: Todo) => void;
  onTodoTogglePriority: (todo: Todo) => void;
}

export const TodoList: FC<TodoListProps> = ({
                                              todos,
                                              onTodoRemoval,
                                              onTodoToggle,
                                              onTodoTogglePriority
                                            }) => {
  return (
    <List
      locale={{
        emptyText: 'There\'s nothing to do :('
      }}
      dataSource={todos}
      renderItem={todo => (
        <TodoItem
          todo={todo}
          onTodoToggle={onTodoToggle}
          onTodoTogglePriority={onTodoTogglePriority}
          onTodoRemoval={onTodoRemoval}
        />
      )}
      pagination={{
        position: 'bottom',
        pageSize: 10
      }}
    />
  );
};
