import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { scale, verticalScale } from 'react-native-size-matters';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(auth)/sign-up');
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

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