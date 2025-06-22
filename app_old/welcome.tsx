import React, { useState, useRef } from 'react';
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
    title: 'Discover New Food Spots',
    description: 'Explore local restaurants, food trucks, and home kitchens in your area. Find hidden gems and satisfy your cravings.',
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 2,
    title: 'Sell Your Tasty Meals',
    description: 'Turn your kitchen into a business. Share your culinary creations with hungry neighbors and earn money.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 3,
    title: 'Connect & Deliver',
    description: 'Join our delivery network and earn money while helping others get their favorite meals delivered.',
    image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function WelcomeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const router = useRouter();

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setCurrentIndex(index);
  };

  const goToNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      const nextIndex = currentIndex + 1;
      scrollViewRef.current?.scrollTo({ x: nextIndex * width, animated: true });
      setCurrentIndex(nextIndex);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      scrollViewRef.current?.scrollTo({ x: prevIndex * width, animated: true });
      setCurrentIndex(prevIndex);
    }
  };

  const handleGetStarted = () => {
    router.push('/userIntent');
  };

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Craaving</Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.loginLink}>Login</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        style={styles.scrollView}
      >
        {onboardingData.map((item) => (
          <View key={item.id} style={styles.slide}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <ProgressBar 
          current={currentIndex + 1} 
          total={onboardingData.length}
          style={styles.progressBar}
        />
        
        <View style={styles.buttonContainer}>
          {currentIndex > 0 && (
            <CustomButton
              title="Previous"
              onPress={goToPrevious}
              variant="outline"
              style={styles.previousButton}
            />
          )}
          
          {currentIndex < onboardingData.length - 1 ? (
            <CustomButton
              title="Next"
              onPress={goToNext}
              style={styles.nextButton}
            />
          ) : (
            <CustomButton
              title="Get Started"
              onPress={handleGetStarted}
              style={styles.getStartedButton}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(16),
  },
  logo: {
    fontSize: scale(24),
    fontFamily: Fonts.eduNSW.bold,
    color: Colors.primary,
  },
  loginLink: {
    fontSize: scale(16),
    fontFamily: Fonts.inter.medium,
    color: Colors.primary,
  },
  scrollView: {
    flex: 1,
  },
  slide: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(20),
  },
  image: {
    width: scale(280),
    height: scale(280),
    borderRadius: scale(20),
    marginBottom: verticalScale(32),
  },
  title: {
    fontSize: scale(28),
    fontFamily: Fonts.inter.bold,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: verticalScale(16),
  },
  description: {
    fontSize: scale(16),
    fontFamily: Fonts.inter.regular,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: scale(24),
    paddingHorizontal: scale(20),
  },
  footer: {
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(32),
  },
  progressBar: {
    marginBottom: verticalScale(32),
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: scale(12),
  },
  previousButton: {
    flex: 1,
  },
  nextButton: {
    flex: 2,
  },
  getStartedButton: {
    flex: 1,
  },
});