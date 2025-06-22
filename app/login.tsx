import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  Dimensions,
  TouchableOpacity 
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressBar from '@/components/ProgressBar';
import CustomButton from '@/components/CustomButton';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { scale, verticalScale } from 'react-native-size-matters';

const { width } = Dimensions.get('window');

const onboardingData = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function LoginScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setCurrentIndex(index);
  };

  const handleCreateAccount = () => {
    router.push('/getStarted');
  };

  const handleLogin = () => {
    // Navigate to main app for demo purposes
    router.push('./(tabs)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScroll}
        >
          {onboardingData.map((item) => (
            <Image key={item.id} source={{ uri: item.image }} style={styles.image} />
          ))}
        </ScrollView>
        
        <ProgressBar 
          current={currentIndex + 1} 
          total={onboardingData.length}
          style={styles.progressBar}
        />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to Craaving</Text>
          <Text style={styles.subtitle}>
            Discover amazing food, sell your creations, or deliver meals to earn money.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton
            title="Create Account"
            onPress={handleCreateAccount}
            fullWidth
            style={styles.createButton}
          />
          
          <CustomButton
            title="Login"
            onPress={handleLogin}
            variant="outline"
            fullWidth
            style={styles.loginButton}
          />
        </View>

        <Text style={styles.termsText}>
          By continuing, you agree to our{' '}
          <Text style={styles.termsLink}>Terms of Service</Text> and{' '}
          <Text style={styles.termsLink}>Privacy Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  imageContainer: {
    flex: 0.6,
    position: 'relative',
  },
  image: {
    width: width,
    height: '100%',
    resizeMode: 'cover',
  },
  progressBar: {
    position: 'absolute',
    bottom: verticalScale(20),
    left: 0,
    right: 0,
  },
  contentContainer: {
    flex: 0.4,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(32),
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: scale(28),
    fontFamily: Fonts.inter.bold,
    color: Colors.text,
    marginBottom: verticalScale(12),
    textAlign: 'center',
  },
  subtitle: {
    fontSize: scale(16),
    fontFamily: Fonts.inter.regular,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: scale(24),
  },
  buttonContainer: {
    gap: verticalScale(12),
    marginVertical: verticalScale(24),
  },
  createButton: {
    marginBottom: verticalScale(4),
  },
  loginButton: {
    marginBottom: verticalScale(4),
  },
  termsText: {
    fontSize: scale(12),
    fontFamily: Fonts.inter.regular,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: scale(18),
  },
  termsLink: {
    color: Colors.primary,
    fontFamily: Fonts.inter.medium,
  },
});