import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Hedaer.jsx';
import TopNotification from './Components/Notifications/Top_Notification';
import UseReducer from './Components/useReducer/useReduce';
// import LinksExample from './Components/link';
// import  CardGroup  from '../src/Components/Cards/card';
import Login from '../src/pages/login/Login';
import Other from './Other';
import { useState } from 'react';
// import UserList from './pages/userList/UserList';
// import Todolist from './pages/TodoList/Todolist';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="main">
        <Header />
        <TopNotification />
        <div className="container">
          <Login />
          {/* <UserList/> */}
          {/* <Todolist/> */}
          <UseReducer/>
        </div>
      </div>
      {/* <LinksExample/> */}
      {/* <CardGroup/> */}
      {/* <button className="btn btn-danger">what is memo in react ?</button> */}
      <div onClick={() => console.log('Clicked')}>

      <Other open={isOpen} onClose={() => setIsOpen(false)}>
        <div>
          <input type='text' placeholder='Enter text'/>
          <button className='btn btn-success'>Submit</button>
        </div>
      </Other>
      <button className='btn btn-warning' onClick={() => setIsOpen(true)}>Click It</button>
      </div>
    </>
  );
}

export default App;
