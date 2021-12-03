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
    <Routes>
      <Route path = '/' element={<Home/>} />
      <Route path = '/login' element={<Login/>} />
      <Route path = '/register' element={<Register/>} />
    </Routes>
  );
}

export default App;