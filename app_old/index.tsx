import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { useFonts, Outfit_400Regular, Outfit_700Bold } from '@expo-google-fonts/outfit';

// import { Leaf } from 'lucide-react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  withDelay,
  runOnJS,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen() {
  let [fontsLoaded] = useFonts({
        Outfit_400Regular,
        Outfit_700Bold,
  });
  const logoScale = useSharedValue(0);
  const logoOpacity = useSharedValue(0);
  const textOpacity = useSharedValue(0);

  useEffect(() => {
    // Animate logo appearance
    logoScale.value = withSequence(
      withTiming(1.2, { duration: 800 }),
      withTiming(1, { duration: 200 })
    );
    
    logoOpacity.value = withTiming(1, { duration: 800 });
    
    // Animate text appearance
    textOpacity.value = withDelay(400, withTiming(1, { duration: 600 }));

    // Navigate to login after animation completes
    const timer = setTimeout(() => {
      router.replace('/login');
    }, 100);//10000


    return () => clearTimeout(timer);
  }, []);

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: logoScale.value }],
    opacity: logoOpacity.value,
  }));

  const textAnimatedStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
  }));

  return (
    <LinearGradient
      colors={['#00672b', '#00672b', '#00672b']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      
      
        <View style={styles.content}>
          <Animated.View style={[styles.logoContainer, logoAnimatedStyle]}>
            <View style={styles.logoBackground }>
              {/* <Leaf size={80} color="#FFFFFF" strokeWidth={2.5} /> */}
              <Image
                source={require('../assets/images/logo.png')}
                style={{ width: scale(80), height: scale(80) }}
                resizeMode="contain"
                />
                <Text style={styles.title}>Craaving</Text>
            </View>
          </Animated.View>
          
          <Animated.View style={[styles.textContainer, textAnimatedStyle]}>
            
            {/* <Text style={styles.subtitle}>Welcome to your journey</Text> */}
          </Animated.View>
        </View>
      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    width: '100%',
  },
  logoContainer: {
    marginBottom: 40,
    backgroundColor: 'rgba(255, 255, 255, 0)',

  },
logoBackground: {
  width: 'auto',
  height: 100,
  borderRadius: 50,
  // backgroundColor: 'rgba(255, 255, 255, 0.15)', ← Remove or comment this
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 20,
  paddingVertical: 10,
  gap: 12,
}

,
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'Outfit_400Regular',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Inter-Medium',
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
  },
});