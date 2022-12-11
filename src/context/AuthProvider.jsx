import { createContext, useState, useEffect, useContext } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  FacebookAuthProvider,
  updateEmail,
  reauthenticateWithCredential,
  promptForCredentials,
  sendEmailVerification,
  updatePassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../auth/firebase';

const AppContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signinGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const signinFb = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider);
  };

  const signout = () => {
    return signOut(auth);
  };

  const changeEmail = (activeUser, email) => {
    updateEmail(activeUser, email);
  };

  const changePassword = (activeUser, password) => {
    updatePassword(activeUser, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        createUser,
        user,
        signin,
        signinGoogle,
        signinFb,
        changeEmail,
        changePassword,
        signout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AppContext);
};
