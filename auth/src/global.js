import { Outlet,NavLink ,useNavigate, useLocation,Navigate} from "react-router-dom";
import AuthConsumers  from "./hooks/auth";
const myStyles = {
    heading: {        
        backgroundColor: '#dcdcdc',
        color: 'grey',
        fontSize: '35px',
        margin: '4px',
        textAlign: 'center',
        border: '1px solid #ccc',
        borderRadius: '25px',
        width:'400px',
        padding:'7px',
       },
       cont: {
         display:'flex',
         justifyContent: 'center',
        },
        outlet:{
            display:'flex',
            justifyContent: 'center',
   
        },
        nav:{
            display:'flex',
            justifyContent: 'center',
            backgroundColor: '#abbb99',
            padding:'25px',
            fontSize: '20px',
            textDecoration: 'none' ,


        },
        button:{
            borderRadius: '15px',
            textAlign: 'center',
            marginLeft: '100px',
            backgroundColor: '#04AA6D', 
            border: 'none',
            color: 'white',
            padding: '15px',
            justifyContent: 'center',
            display: 'flex',
            fontSize: '20px',
                  },
                  but:{
                    borderRadius: '15px',
                    textAlign: 'center',
                    marginLeft: '25px',
                    backgroundColor: '#04AA6D', 
                    border: 'none',
                    color: 'white',
                    padding: '15px',
                    justifyContent: 'center',
                    display: 'flex',
                    fontSize: '20px',
                          }
    
    };
  


export const LoginPage = () => {
    
    const [authed,dispatch]=AuthConsumers();
     let navigate=useNavigate()
    return(
    <div>
      <h1>This is the login page</h1>
      <button style={myStyles.button}
      onClick={()=>{
       dispatch({type:"login"})
        navigate('/dashbord',{replace:true})
      }}
      >Login</button>
    </div>
  )};
  
  export const HomePage = () => {
    const [authed,dispatch]=AuthConsumers();
          return(
    <>
     <main style={myStyles.cont} >
      <h1 style={myStyles.heading}>Home Components</h1>
    </main>
    <Nav>

    </Nav>
          <div style={myStyles.outlet}>

          <Outlet></Outlet>

          </div>
          
          </>
   
    )
    };
  
  export const HomeContentPage = () => (
    <div>
      <h1>Home Content Components</h1>
    </div>
  );
  
  export const Nav = () =>{ 
    const [{auth}]=AuthConsumers()
    function ActiveLink({ style, ...props }) {
        return (
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? 'black' : '',
              ...style // Merge styles
            })}
            {...props}
          />
        );
      }
    
    return (
    <nav style={myStyles.nav}>
     <ActiveLink to={'/'} style={{ margin: '0 25px' , textDecoration: 'none' }} >Home</ActiveLink>
     <ActiveLink to={'/login'} style={{ margin: '0 25px', textDecoration: 'none' }} >Login</ActiveLink>
     {
        auth ? (
          <>     <ActiveLink to={'/dashbord'} style={{ margin: '0 25px' , textDecoration: 'none'}} >Dashboard</ActiveLink>
          <ActiveLink to={'/settings'} style={{ margin: '0 25px', textDecoration: 'none' }} >Settings</ActiveLink>
     </>
        ): <>
        </>

        
     }

    </nav>
  )};
  
  export const Dashboard = () =>{ 
    const [,dispatch]=AuthConsumers();
    let navigate=useNavigate()

    return (
    <div>
      <h1>Dashboard</h1>
      <button style={myStyles.but}
      onClick={()=>{
       dispatch({type:"logout"})
       navigate('/login',{replace:true})
      }}
      >Logout</button>
    </div>
  )};
  
  export const Settings = () => {
    const [,dispatch]=AuthConsumers();
    let navigate=useNavigate()


  return(
    
    <div>
      <h1>Settings</h1>
      <button style={myStyles.but}
      onClick={()=>{
       dispatch({type:"logout"})
       navigate('/login',{replace:true})
      }}
      >Logout</button>
    </div>
  )};
  export   function RequireAuth({ children }) {
    const [authed] = AuthConsumers(); // Assuming AuthConsumer provides access to auth state
    return authed.auth ? (
      children
    ) : (
      <Navigate to="/login" replace state={{ from: window.location.pathname }} />
    );
  }
