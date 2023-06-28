import { Alert, StyleSheet, KeyboardAvoidingView, } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { FIREBASE_AUTH } from '../firebaseConfig'
import { CustomButton, Input, CustomText } from '../components'
import { regex } from '../assets/dummy'

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");

  const auth = FIREBASE_AUTH

  const signUp = async (email: string, password: string) => {
    try { 
      await createUserWithEmailAndPassword(auth, email, password)
      alert('Zarejestrowano pomyślnie')
    }
    catch (error: any) {
      alert(`Sign up failed ${error.message}`)
    }
  }

  const handleSignUp = () => {
    if (
      !regex.emailRegex.test(email) || !regex.passwordRegex.test(password) || repeatPassword !== password
    ) {
      Alert.alert('Błąd', 'Proszę poprawnie wypełnić formularz')
    } else {
      signUp(email, password)
    }
  }
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <CustomText style={styles.title} weight={700}>Zarejestruj się</CustomText>

        <Input
          type="email"
          label="wpisz adres email"
          value={email}
          setValue={setEmail}
          checkIsValid={() => { return regex.emailRegex.test(email) }}
        />

        <Input
          type="password"
          label="wpisz hasło"
          value={password}
          setValue={setPassword}
          checkIsValid={() => { return regex.passwordRegex.test(password) }}
        />

        <Input
          type="password"
          label="powtórz hasło"
          value={repeatPassword}
          setValue={setRepeatPassword}
          checkIsValid={() => { return (repeatPassword === password) }}
        />

        <CustomButton onPress={handleSignUp}>Zarejestruj się</CustomButton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 30,
    marginBottom: 20
  }
})

export default Register