import { View, Text, StyleSheet, ActivityIndicator, KeyboardAvoidingView, Alert, Image } from 'react-native'
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
      Alert.alert("błąd", `Logowanie nie powiodło się ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Image 
        source={require("../assets/img/blob.png")}
        style={{height: 320, position: "absolute", zIndex: -1}}
      />
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <CustomText style={{ fontSize: 35, marginBottom: 10 }} weight={700}>Zaloguj się</CustomText>
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
})

export default Login