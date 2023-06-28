import { View, StyleSheet, Text } from 'react-native'
import { FIREBASE_AUTH } from '../../firebaseConfig'
import { CustomButton } from '../../components'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>{FIREBASE_AUTH.currentUser?.displayName}</Text>
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
  }
})

export default Home