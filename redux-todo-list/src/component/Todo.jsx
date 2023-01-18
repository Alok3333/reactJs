import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../Action/index';

const Todo = () => {
  const [inputData, setInputData] = useState('');
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducer.list);
  return (
    <>
      <div>
        <div style={{ marginTop: '30px' }}>
          <h2>Add TodoList</h2>
          <input
            type="text"
            placeholder="Type Todo"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button
            onClick={() => dispatch(addTodo(inputData), setInputData(''))}
          >
            Add Todo
          </button>
        </div>

        {list.map((ele) => {
          return (
            <div key={ele.id}>
              <h3>{ele.data}</h3>
              <button onClick={() => dispatch(deleteTodo(ele.id))}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
