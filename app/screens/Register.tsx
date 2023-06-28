import { Alert, View, StyleSheet, KeyboardAvoidingView, Text } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { FIREBASE_AUTH } from '../../firebaseConfig'
import { CustomButton, Input } from '../../components'
import { regex } from '../../assets/dummy'

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const auth = FIREBASE_AUTH

  const signUp = async (email: string, password: string, username: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(auth.currentUser!, {displayName: username})
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
      signUp(email, password, username)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zarejestruj się</Text>
      <KeyboardAvoidingView behavior="height" style={styles.keyboardContainer}>
      <Input
          type="username"
          label="wpisz nazwę użytkownika"
          value={username}
          setValue={setUsername}
          checkIsValid={() => { return regex.usernameRegex.test(username)}}
        />

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
    </View>
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
    fontWeight: 'bold',
    marginBottom: 20
  },
  keyboardContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Register