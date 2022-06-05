import React, { useEffect } from 'react';
import {auth} from "./firebase";
import {useDispatch} from "react-redux"
import { useSelector } from "react-redux";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login"
import Widgets from "./Widgets"
import { selectUser, logout,login } from "./features/counter/userSlice"


function App() {
  const user = useSelector(selectUser);
  const dispatch=useDispatch();

  useEffect(()=> {
    auth.onAuthStateChanged(userAuth=>{
      if (userAuth){
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      }else{
          dispatch(logout());
      }
    })
  },[])
  return (
    <div className="app">
      <Header />
      {/*App Body*/}
      {!user ? (<Login />) :(
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets/>
            {/**/}
          </div>
        )}
    </div>
  );
}

export default App;
