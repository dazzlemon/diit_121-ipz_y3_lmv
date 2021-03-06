import {
    Route,
    Link,
    Routes
} from 'react-router-dom'

import Home from './webpages/Home';
import Register from './webpages/Register';
import Login from './webpages/Login';
import Chat from './webpages/Chat'
import Settings from './webpages/Settings';

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
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path = '/'         element={<Home    />} />
        <Route path = '/login'    element={<Login   />} />
        <Route path = '/register' element={<Register/>} />
        <Route path = '/chat'     element={<Chat    />} />
        <Route path = '/settings' element={<Settings/>} />
      </Routes>
    </>
  );
}

export default App;