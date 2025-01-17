
import './App.css';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/Login';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.css';

function App() {
  return (
    <CartProvider>
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/createuser' element={<Signup/>}/>
          <Route exact path='/myOrder' element={<MyOrder/>}/>
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
