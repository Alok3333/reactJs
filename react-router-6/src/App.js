import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Filter from './components/Filter';
import Home from './components/Home';
import NavBar from './components/NavBar';
import PageNotFound from './components/Page404';
import UserParams from './components/User';
import UserDesign from './components/Blogcomponent/UserInterface';
import BlogList from './components/Blogcomponent/BlogList';
import Contact from './components/Blogcomponent/Contact';
import BlogListImg from './components/Blogcomponent/BlogListImg';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<ProtectedRoute Component={Home}/>}/>
          <Route path='about' element={<ProtectedRoute Component={About}/>}/>
          <Route path='/blog/' element={<ProtectedRoute Component={Blog}/>}>
            <Route path='ui' element={<UserDesign/>} />
            <Route path='bloglist' element={<BlogList/>}>
              <Route path='image' element={<BlogListImg/>}/>
            </Route>
            <Route path='contact' element={<Contact/>} />
          </Route>
          <Route path='/user/:name' element={<UserParams/>} />
          <Route path='filter' element={<Filter/>}/>
          <Route path='login' element={<Login/>} />
          <Route path='/*' element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
