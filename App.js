import { StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/telas/Cesta/Cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import * as SplashScreen from 'expo-splash-screen'

import mock from './src/mocks/cesta';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fonteCarregada] = useFonts({
    "RegularMontserrat": Montserrat_400Regular,
    "BoldMontserrat": Montserrat_700Bold,
  });

  if (!fonteCarregada){
    return null
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}

