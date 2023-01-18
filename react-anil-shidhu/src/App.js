import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './components/UserCom/User';
import User2 from './components/UserCom/User2';
import Member from './components/UserCom/SuperChildCom/Member';
// import MenuBar from './components/Header/Header';
// import JsonData from './components/json-server/Json';
// import LoginForm from './pages/form/Login';
// import UserForm from './pages/form/SimpleForm';
// import Profile from './pages/profile.jsx/Profile';
// import UpdateName from './components/Function_Component/UpdateName';
// import InputGet from './pages/Get-Input';
// import HideShowButton from './pages/HideShow';
// import User from './components/Class_Component/Class_Com';
// import NameChanging from './components/Function_Component/Function_Com';

function App() {
  function getData() {
    alert("Don't click the button tab again and again");
  }
  return (
    <div className="App">
      {/* <MenuBar/> */}
      <User data={getData}/>
      <User2 data={getData}/>
      <Member data={getData}/>
      
      {/* <UserForm/> */}
      {/* <JsonData/> */}
      {/* <LoginForm/> */}
      {/* <UpdateName/> */}
      {/* <InputGet/> */}
      {/* <HideShowButton/> */}
      {/* <User/> */}
      {/* <NameChanging/> */}

      {/* <Profile/> */}

    </div>
  );
}

export default App;
