import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { auth } from '../Auth/firebase-config';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}


export function AuthProvider({ children }) {
  
   const [currentUser, setCurrentUser] = useState()
   
   

   function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
   }


   auth.onAuthStateChanged(user => {
    setCurrentUser(user)
   })

    const value = {
        currentUser
    }
    
  
    return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

