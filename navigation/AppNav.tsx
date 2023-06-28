import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { User, onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from "react"
import { FIREBASE_AUTH } from '../firebaseConfig'
import AppStack from './AppStack'
import AuthStack from './AuthStack'


const AppNav = () => {
const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user)
    })
  }, [])

  return (
    <NavigationContainer>
        {
            user ? 
            <AppStack /> : 
            <AuthStack />
        }
    </NavigationContainer>
  )
}

export default AppNav