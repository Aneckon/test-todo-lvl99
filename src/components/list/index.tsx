import React from 'react';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

import { editTodo, removeTodo } from '../../store/slice/todo';

import './list.scss';

export const List = () => {
  const todoList = useAppSelector((state) => state.todoRedicer.list);
  const dispatch = useAppDispatch();

  const [valueEdit, setValueEdit] = React.useState('');
  const [editId, setEditId] = React.useState<number>();

  const editTodoValue = (id: number) => {
    setEditId(id);
  };

  const doneEdit = (id: number, name: string) => {
    if (valueEdit !== name || valueEdit.length !== name.length) {
      dispatch(editTodo({ id: id, name: valueEdit }));
    }
    setEditId(0);
  };

  return (
    <ul className="list">
      {todoList.map((item) => (
        <li key={item.id}>
          {editId === item.id ? (
            <input
              value={valueEdit || item.name}
              onChange={(e) => setValueEdit(e.target.value)}
              type="text"
            />
          ) : (
            <p>{item.name}</p>
          )}
          <div>
            {editId === item.id ? (
              <button onClick={() => doneEdit(item.id, item.name)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 -0.5 21 21"
                  version="1.1">
                  <defs></defs>
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-179.000000, -400.000000)"
                      fill="#000000">
                      <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path
                          d="M141.9,243 C141.9,242.448 141.4296,242 140.85,242 L126.15,242 C125.5704,242 125.1,242.448 125.1,243 L125.1,257 C125.1,257.552 125.5704,258 126.15,258 L140.85,258 C141.4296,258 141.9,257.552 141.9,257 L141.9,243 Z M144,242 L144,258 C144,259.105 143.06025,260 141.9,260 L125.1,260 C123.93975,260 123,259.105 123,258 L123,242 C123,240.895 123.93975,240 125.1,240 L141.9,240 C143.06025,240 144,240.895 144,242 L144,242 Z M137.72205,247.015 C138.1326,247.405 138.1326,248.039 137.72205,248.429 L133.63965,252.317 C133.0233,252.903 132.0258,252.903 131.40945,252.317 L129.5541,250.55 C129.1446,250.16 129.1446,249.527 129.5541,249.136 C129.96465,248.746 130.6293,248.746 131.0388,249.136 L131.7801,249.842 C132.19065,250.233 132.8574,250.233 133.269,249.842 L136.23735,247.015 C136.64685,246.624 137.31255,246.624 137.72205,247.015 L137.72205,247.015 Z"
                          id="done-[#1477]"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            ) : (
              <button onClick={() => editTodoValue(item.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none">
                  <path
                    d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
            <button onClick={() => dispatch(removeTodo(item.id))}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M4 7H20"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 7V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V7"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
