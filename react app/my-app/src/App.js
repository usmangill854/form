 import './App.css';
 import { useState } from 'react';
import Login from './pages/login';
import MediaCard from './pages/main';
import {BrowserRouter as Router, Route,Link,Routes} from 'react-router-dom'
 import PrivatePage from './pages/PrivatePage';
import ErrorPage from './pages/ErrorPage';

function App() {
  const [auth, setAuth] = useState(' ')

//   if(data.status === 'success'){
//     setAuth(true)
// }
// else if (auth === true){
//  return <Navigate to='/' />
// }
 return <>
  {/* <PrivatePage/> */}
    <Router>
      <nav>
        <Link to='/'>Home</Link><br/>
        <Link to='/login' > LOGIN</Link><br/>
        <Link to='/private' >Private Route</Link>
      </nav>
      {/* <a href='' /> */}
        <Routes>

        <Route    path='/' element ={<MediaCard/>}/> 
       
        <Route   path='/login' element={ <Login   />}/>
        
          
        <Route   path='/private' element={<PrivatePage  />}/> 
          
        
        <Route   path='*' element={<ErrorPage/>} />
        </Routes>
    </Router>

 
 
 </> 
}

export default App;
