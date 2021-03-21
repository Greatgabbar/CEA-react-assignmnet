import React, { useEffect , createContext,useReducer,useContext} from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom';
import Home from './components/screens/Home';
import User from './components/screens/Users';
import CreatePost from './components/screens/CreatePost';
import Update from './components/screens/Update';
import Liked from './components/screens/Liked';
import Disliked from './components/screens/Disliked';
// import Login from './components/screens/Login';
// import Signup from './components/screens/Signup';
// import Profile from './components/screens/Profile';
// import CreatePost from './components/screens/CreatePost';
// import Userprofile from './components/screens/Userprofile';
// import SubscribedPosts from './components/screens/SubscribedPosts';
// import {reducer,initialState} from './reducers/userReducer'
// import Reset from './components/screens/reset';
// import NewPassword from './components/screens/Newpassword';
// import M from  'materialize-css/dist/js/materialize.min.js';
// export const UserContext= createContext()

const Routing = () => {
  const history = useHistory()
 // const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
     // dispatch({type:"USER",payload:user})
     
    }
    else{
      if(!history.location.pathname.startsWith('/reset')){
      //history.push('/signin')
      }
    }
  },[])
  return (
    <Switch>
    <Route exact path='/'> <Home /> </Route>
    <Route  path='/user'> <User /> </Route>
    <Route  path='/create'> <CreatePost /> </Route>
    <Route  path='/update'> <Update /> </Route>
    <Route  path='/liked'> <Liked /> </Route>
    <Route  path='/disliked'> <Disliked /> </Route>
     
     </Switch>
     )
}

function App() {
 // const [state,dispatch] = useReducer(reducer,initialState)
  
  return (
   // <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <Navbar />
     <Routing />
    </BrowserRouter>
   // </UserContext.Provider>
  );
}

export default App;