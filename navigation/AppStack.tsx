import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens'

const Stack = createNativeStackNavigator()  

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home } />
    </Stack.Navigator>
  )
}

export default AppStack