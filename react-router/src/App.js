import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './Router-pages/Layout/MainLayout';
import NotFound from './Router-pages/Pages/404';
import Home from './Router-pages/Pages/MainHome/Home';
import Service from './Router-pages/Pages/Service';
import ContactUs from './Router-pages/Pages/ContactUs';
import About from './Router-pages/Pages/Abouts/About';
import AuthContextProvider from './Router-pages/context/AuthContextProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="service" element={<Service />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
