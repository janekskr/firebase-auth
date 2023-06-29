import AppNav from "./navigation/AppNav"
import {useFonts} from "expo-font" 
import {useCallback} from "react" 
import * as SplashScreen from 'expo-splash-screen'
import {View} from "react-native"
import { AuthProvider } from "./context/AuthContext"

SplashScreen.preventAutoHideAsync();

const App = () => { 
  const [fontsLoaded] = useFonts({
    'Lexend-400': require('./assets/fonts/Lexend-400.ttf'),
    'Lexend-500': require('./assets/fonts/Lexend-500.ttf'),
    'Lexend-600': require('./assets/fonts/Lexend-600.ttf'),
    'Lexend-700': require('./assets/fonts/Lexend-700.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <View onLayout={onLayoutRootView} style={{flex: 1}}>
        <AppNav />
      </View>
    </AuthProvider>
  )
}

export default App
