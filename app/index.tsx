import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Redirect, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { scale, verticalScale } from 'react-native-size-matters';
import { useAuth } from '@clerk/clerk-expo';

export default function SplashScreen() {
  const router = useRouter();

  const { isSignedIn, isLoaded } = useAuth();

 

useEffect(() => {
  if (!isLoaded) return; // wait until Clerk is ready

  const timer = setTimeout(() => {
    if (isSignedIn) {
      router.replace('/(tabs)');
    } else {
      router.replace('/welcome');
    }
  }, 3000);

  return () => clearTimeout(timer);
}, [isLoaded, isSignedIn]);


  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
        
        />
        <Text style={styles.title}>Craaving</Text>
        <Text style={styles.subtitle}>Discover • Sell • Deliver</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: scale(80),
    height: scale(80),
    borderRadius: scale(40),
    marginBottom: verticalScale(16),
  },
  title: {
    fontSize: scale(32),
    fontFamily: Fonts.outfit.bold,
    color: Colors.white,
    marginBottom: verticalScale(8),
  },
  subtitle: {
    fontSize: scale(16),
    fontFamily: Fonts.outfit.regular,
    color: Colors.white,
    opacity: 0.9,
  },
});