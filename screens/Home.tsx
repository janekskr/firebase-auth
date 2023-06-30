import { View, StyleSheet } from 'react-native'
import { FIREBASE_AUTH } from '../firebaseConfig'
import { CustomButton, CustomText } from '../components'
import { AuthContext } from '../context/AuthContext'
import { useContext } from "react"

const Home = () => {
  const { user } = useContext(AuthContext)
  return (
      <View style={styles.container}>
        <CustomText style={styles.title}>Witaj {user?.displayName} 👋</CustomText>
        <CustomButton onPress={() => FIREBASE_AUTH.signOut()}>Wyloguj sie</CustomButton>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20
  },
})

export default Home