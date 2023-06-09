import React from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext } from "react";
import app from "../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export const UserContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const setUserNameImage = (username, imageUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: imageUrl,
    });
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const signUpWithGoogle = (navigate, from) => {
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        toast.success(`Welcome Back ${loggedInUser.displayName}`);
        setUser(loggedInUser);
        navigate(from);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const signUpWithGithub = (navigate, from) => {
    return signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedInUser = result.user;
        toast.success(`Welcome Back ${loggedInUser.displayName}`);
        setUser(loggedInUser);
        navigate(from);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("auth state change", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signInUser,
    logout,
    loading,
    setUserNameImage,
    signUpWithGoogle,
    signUpWithGithub,
  };

  return (
    <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
  );
};

export default AuthProvider;
