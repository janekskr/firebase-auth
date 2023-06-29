import { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from "react"
import { FIREBASE_AUTH } from '../firebaseConfig'
import AppStack from './AppStack'
import AuthStack from './AuthStack'
import { AuthContext } from '../context/AuthContext'


const AppNav = () => {
  const {user, setUser} = useContext(AuthContext)

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user)
    })
  }, [user])

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