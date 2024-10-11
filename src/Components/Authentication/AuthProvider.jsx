import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
const auth = getAuth(app);
import PropTypes from 'prop-types';


// context api 
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    // create user with firebase
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in user with firebase
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign in with google by firebase
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // signOut from firebase
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
        // return signOut();
    }


    // Setting an authentication state Observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser);
                setLoading(false);
                // console.log('Observing current user inside the useEffect of the AuthProvider', currentUser);
            }
        })
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        setUser,
        signInWithGoogle,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}