import {
    Route,
    Link,
    Routes
} from 'react-router-dom'

import Home from './webpages/Home';
import Register from './webpages/Register';
import Login from './webpages/Login';

const App = () => {
  return (
    <>
      <div>
        <nav>
          <ul id="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path = '/'         element={<Home    />} />
        <Route path = '/login'    element={<Login   />} />
        <Route path = '/register' element={<Register/>} />
      </Routes>
    </>
  );
}

export default App;