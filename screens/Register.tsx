import { Alert, StyleSheet, KeyboardAvoidingView, Image, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { FIREBASE_AUTH } from '../firebaseConfig'
import { CustomButton, Input, CustomText } from '../components'
import { COLORS, regex } from '../assets/dummy'
import { AuthContext } from '../context/AuthContext'

const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");

  const {setUserDisplayName} = useContext(AuthContext)

  const auth = FIREBASE_AUTH

  const signUp = async (email: string, password: string) => {
    try { 
      await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(auth.currentUser!, {displayName: username})
      setUserDisplayName(auth.currentUser?.displayName)
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
    <View style={{flex: 1}}>
      <Image 
        source={require("../assets/img/blob.png")}
        style={{height: 320, position:"absolute", zIndex: -1  }}
      />
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <CustomText style={styles.title} weight={700}>Zarejestruj się</CustomText>
      <Input
          type="username"
          label="wpisz nazwę użytkownika"
          value={username}
          setValue={setUsername}
          checkIsValid={() => { return regex.usernameRegex.test(username) }}
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
    marginTop: 250,
    padding: 30,
    borderTopLeftRadius: 60,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.white,  
  },
  title: {
    fontSize: 35,
    marginBottom: 10
  }
})

export default Register