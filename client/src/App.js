// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import LandingPage from './components/LandingPage';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';


import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './styles/LandingPage.css';
import './styles/Auth.css'; // Common CSS for Login and Signup
import './styles/Dashboard.css';

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
};

export default App;

// const App = () => {
//     return (
//         <Provider store={store}>
//             <Router>
//                 <Routes>
//                     <Route exact path="/" element={<LandingPage />} />
//                     <Route path="/signup" element={<Signup />} />
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/dashboard" element={<Dashboard />} />
//                 </Routes>
//             </Router>
//         </Provider>
//     );
// };

// export default App;
