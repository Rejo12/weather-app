import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NotFound from './components/NotFound';
import Weather from './components/Weather';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import PublicRoutes from './routes/PublicRoutes';
import ProtectedRoute from './routes/ProtectedRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PublicRoutes><SignIn/></PublicRoutes>} />
      {/* <Route path="/" element={<SignIn/>} /> */}
      <Route path="/signup" element={<SignUp/>} />
      <Route element={<ProtectedRoute/>}>
      <Route path="/dashboard" element={<Weather/>}/>
      </Route>
      <Route path="*" element={<NotFound/>} />
    {/* <AppRoutes />
    <NotFound /> */}
    {/* <BibleVerse /> */}
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
