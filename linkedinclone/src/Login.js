import React, { useEffect, useState } from 'react';
import {login} from "./features/counter/userSlice";
import {useDispatch} from "react-redux"
import { auth } from "./firebase";
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();
    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth=>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName:userAuth.user.displayName,
                photoUrl:userAuth.user.photoUrl,
            }))
        }).catch(error=> alert(error))
    };

    const register = () => {
        if (!name) {
            return alert("Please enter Full Name");
        }
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoUrl: profilePic,
                })
                        .then(() => {
                            dispatch(
                                login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoUrl: profilePic
                            })
                            );
                });
            }).catch((error)=> alert(error));
        };

        

        return (
            <div className="login">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt=""></img>
                <form>
                    <input type="text" placeholder="Full name (required if registering)" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="Profile Picture URL (optional)" value={profilePic} onChange={(e) => setProfilePic(e.target.value)} />
                    <input type="Email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="Password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" onClick={loginToApp}>Sign In</button>
                </form>
                <p>Not a member?
                    <span className="login_register" onClick={register}> Register Now</span>
                </p>
            </div>
        )
    }

    export default Login