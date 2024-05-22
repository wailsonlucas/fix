import{createContext, useContext,useReducer} from 'react'

const initialState={auth:false};

const authContext=createContext(initialState);

export function AuthProvider({children}){
    const[authed,dispatch]= useReducer(reducer,initialState)
    return <authContext.Provider value={[authed,dispatch]}>{children}</authContext.Provider>
}
export function reducer(state,action){
    switch (action.type){
      case 'login':  
      return{auth:true};
      case 'logout':
        return {auth:false};
        default:
            throw new Error();
    }
}

export default function AuthConsumers(){
      return useContext(authContext)

}