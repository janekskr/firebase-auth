import { View, Text, StyleSheet, ActivityIndicator, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { FIREBASE_AUTH } from '../../firebaseConfig'
import { CustomButton, Input } from '../../components'
import { COLORS } from '../../assets/dummy'

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
    <View style={styles.container}>
      <Text style={styles.title}>Hello 👋</Text>
      <KeyboardAvoidingView behavior='height' style={styles.keyboardContainer}>
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
            <CustomButton onPress={signIn}>Login</CustomButton>
        }
      </KeyboardAvoidingView>
      <Text style={{ color: COLORS.darkGrey, marginBottom: 10 }}>Nie posiadasz jeszcze konta?</Text>
      <Text onPress={() => navigation.navigate("Register")} style={{ color: COLORS.blue }} >Zarejestruj się tutaj</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20
  },
  keyboardContainer: {
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Login