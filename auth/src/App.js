import './App.css';
import {
  LoginPage,
  HomePage,
  HomeContentPage,
  Dashboard,
  Settings,RequireAuth

} 
from './global'
import { useRoutes ,Outlet, Form} from 'react-router-dom';
function App() {
const routes=useRoutes([
  {
    path:"/",
  element :<HomePage></HomePage>,
  children:[
    {
      index:true,
    element :<HomeContentPage></HomeContentPage>,
    },
    {
      path:"/login",
    element :<LoginPage></LoginPage>
    },
    {
      path:"/dashbord",
    element :<RequireAuth> <Dashboard></Dashboard> </RequireAuth>
  
    },
    {
      path:"/settings",
    element :   <RequireAuth><Settings></Settings></RequireAuth>      
    }
  ]
  }
  

])
  return routes;

  
}

export default App;
