import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

interface TodoProps {
  list: { id: number; name: string }[];
}

const initialState: TodoProps = {
  list: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (state.list.length <= 13) {
        state.list.push(action.payload);
        localStorage.setItem('todo', JSON.stringify(state.list));
        toast.success('success add todo');
      } else {
        toast.error('more than 13 is not possible');
      }
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
      localStorage.setItem('todo', JSON.stringify(state.list));
      toast.success('success remove todo');
    },
    editTodo: (state, action) => {
      state.list = state.list.map((item) =>
        item.id === action.payload.id ? action.payload : item,
      );
      toast.success('success edit todo');
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
