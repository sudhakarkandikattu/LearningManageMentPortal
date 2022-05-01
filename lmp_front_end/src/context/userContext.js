import React, { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../base";

export const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

//   useEffect(() => {
//     setLoading(true);
//     // const unsubscribe = onAuthStateChanged(auth, (res) => {
//     //   if (res) {
//     //     setUser(res);
//     //   } else {
//     //     setUser(null);
//     //   }
//     //   setError("");
//     //   setLoading(false);
//     // });
//     // return unsubscribe;
    
//   }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (res) => { // detaching the listener
        if (user) {
            // ...your code to handle authenticated users. 
            setUser(res);
        } else {
            // No user is signed in...code to handle unauthenticated users. 
            setUser(null);
        }
        setError("");
        setLoading(false);
    });
    return () => unsubscribe(); // unsubscribing from the listener when the component is unmounting. 
}, []);

  const registerUser = (email, password, name) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() =>
        updateProfile(auth.currentUser, {
          displayName: name,
        })
      )
      .then((res) => console.log(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const signInUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };

  const signInWithGithub = () => {
    signInWithPopup(auth, new GithubAuthProvider())
        .then((res) => setUser(res))
        .catch((err) => setError(err.code))
        .finally(() => setLoading(false));
  }

  const signInWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
        .then((res) => console.log(res))
        .catch((err) => setError(err.code))
        .finally(() => setLoading(false));
  }

  const logoutUser = () => {
    signOut(auth);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const contextValue = {
    user,
    loading,
    error,
    signInUser,
    registerUser,
    logoutUser,
    forgotPassword,
    signInWithGithub,
    signInWithGoogle,
    userType,
    setUserType,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};