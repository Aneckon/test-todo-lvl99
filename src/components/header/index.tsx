import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addTodo } from '../../store/slice/todo';

import './header.scss';

export const Header = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = React.useState('');

  const handleAddUser = (value: string) => {
    if (value.length && value.indexOf(' ')) {
      dispatch(addTodo({ id: uuidv4(), name: value }));

      setValue('');
    }
  };

  return (
    <header className="header">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Username"
      />
      <button onClick={() => handleAddUser(value)}>Add users</button>
    </header>
  );
};
