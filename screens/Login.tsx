import { View, Text, StyleSheet, ActivityIndicator, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { FIREBASE_AUTH } from '../firebaseConfig'
import { CustomButton, Input, CustomText } from '../components'
import { COLORS } from '../assets/dummy'

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const auth = FIREBASE_AUTH

  const signIn = async () => {
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error: any) {
      console.error(error)
      alert(`Sign in failed ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
        <CustomText style={{fontSize: 30, marginBottom: 20 }} weight={500}>Zaloguj się</CustomText>
        <Input
          type="email"
          label="wpisz adres email"
          value={email}
          setValue={setEmail}
          checkIsValid={() => { return undefined }}
        />

        <Input
          type="password"
          label="wpisz hasło"
          value={password}
          setValue={setPassword}
          checkIsValid={() => { return undefined }}
        />

        {
          loading ?
            <ActivityIndicator size="large" color={COLORS.blue} /> :
            <CustomButton onPress={signIn}>Zaloguj się</CustomButton>
        }
      <CustomText style={{ color: COLORS.darkGrey, marginBottom: 5 }}>Nie posiadasz jeszcze konta?</CustomText>
      <CustomText onPress={() => navigation.navigate("Register")} style={{ color: COLORS.blue }} >Zarejestruj się</CustomText>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
})

export default Login