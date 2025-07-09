import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { ClerkProvider } from "@clerk/clerk-expo";

import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { 
  Inter_400Regular, 
  Inter_500Medium, 
  Inter_600SemiBold, 
  Inter_700Bold 
} from '@expo-google-fonts/inter';
import { 
  EduNSWACTFoundation_400Regular,
  EduNSWACTFoundation_500Medium,
  EduNSWACTFoundation_600SemiBold,
  EduNSWACTFoundation_700Bold
} from '@expo-google-fonts/edu-nsw-act-foundation';
import * as SplashScreen from 'expo-splash-screen';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useFrameworkReady();

  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Medium': Inter_500Medium,
    'Inter-SemiBold': Inter_600SemiBold,
    'Inter-Bold': Inter_700Bold,
    'EduNSW-Regular': EduNSWACTFoundation_400Regular,
    'EduNSW-Medium': EduNSWACTFoundation_500Medium,
    'EduNSW-SemiBold': EduNSWACTFoundation_600SemiBold,
    'EduNSW-Bold': EduNSWACTFoundation_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
    <ClerkProvider tokenCache={tokenCache}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="welcome" />
        <Stack.Screen name="userIntent" />
        <Stack.Screen name="login" />
        <Stack.Screen name="getStarted" />
        <Stack.Screen name="location" />
        <Stack.Screen name="setupProfile" />
        <Stack.Screen name="getVerified" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="(auth)"/>
      </Stack>
      <StatusBar style="light" />
      </ClerkProvider>
    </>
  );
}