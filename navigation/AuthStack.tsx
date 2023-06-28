import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login, Register } from '../app/screens'

const Stack = createNativeStackNavigator()  

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login } />
        <Stack.Screen name="Register" component={Register } />
    </Stack.Navigator>
  )
}

export default AuthStack