import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, SetUser] = useState(null);
    const [loading, SetLoading] = useState(true);

    const createUser = (email,password) =>{
        SetLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email,password) =>{
        SetLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = ()=>{
        SetLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser =() =>{
        SetLoading(true);
        return signOut(auth);
    }
    

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log('Current user', currentUser);
            SetUser(currentUser);
            SetLoading(false);
        })

        return () =>{
            unSubscribe();
        }

    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;