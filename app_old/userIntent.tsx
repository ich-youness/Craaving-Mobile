import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, ChefHat, Truck } from 'lucide-react-native';
import CustomButton from '@/components/CustomButton';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { scale, verticalScale } from 'react-native-size-matters';

const intentOptions = [
  {
    id: 'explore',
    title: 'Explore Food',
    subtitle: 'Discover amazing food spots',
    icon: Search,
    color: Colors.primary,
  },
  {
    id: 'sell',
    title: 'Sell Meals',
    subtitle: 'Share your culinary creations',
    icon: ChefHat,
    color: Colors.accent,
  },
  {
    id: 'deliver',
    title: 'Deliver Food',
    subtitle: 'Earn money delivering meals',
    icon: Truck,
    color: Colors.info,
  },
];

export default function UserIntentScreen() {
  const [selectedIntent, setSelectedIntent] = useState<string | null>(null);
  const [scaleAnim] = useState(new Animated.Value(0));
  const router = useRouter();

  React.useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      tension: 50,
      friction: 8,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleIntentSelect = (intentId: string) => {
    setSelectedIntent(intentId);
  };

  const handleContinue = () => {
    router.push('/login');
  };

  const handleSkip = () => {
    router.push('/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View 
        style={[
          styles.content,
          {
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View style={styles.header}>
          <Text style={styles.title}>What brings you to Craaving?</Text>
          <Text style={styles.subtitle}>
            Help us personalize your experience by telling us your main interest.
          </Text>
        </View>

        <View style={styles.optionsContainer}>
          {intentOptions.map((option) => {
            const IconComponent = option.icon;
            const isSelected = selectedIntent === option.id;

            return (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.optionCard,
                  isSelected && styles.selectedCard,
                ]}
                onPress={() => handleIntentSelect(option.id)}
                activeOpacity={0.8}
              >
                <View style={[styles.iconContainer, { backgroundColor: option.color }]}>
                  <IconComponent 
                    size={scale(24)} 
                    color={Colors.white} 
                    strokeWidth={2} 
                  />
                </View>
                <View style={styles.optionText}>
                  <Text style={styles.optionTitle}>{option.title}</Text>
                  <Text style={styles.optionSubtitle}>{option.subtitle}</Text>
                </View>
                <View style={[styles.radioButton, isSelected && styles.radioButtonSelected]}>
                  {isSelected && <View style={styles.radioButtonInner} />}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.footer}>
          <CustomButton
            title="Continue"
            onPress={handleContinue}
            disabled={!selectedIntent}
            fullWidth
            style={styles.continueButton}
          />
          <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
            <Text style={styles.skipText}>Skip for now</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
  header: {
    marginTop: verticalScale(32),
    marginBottom: verticalScale(40),
  },
  title: {
    fontSize: scale(28),
    fontFamily: Fonts.inter.bold,
    color: Colors.text,
    marginBottom: verticalScale(12),
  },
  subtitle: {
    fontSize: scale(16),
    fontFamily: Fonts.inter.regular,
    color: Colors.textSecondary,
    lineHeight: scale(24),
  },
  optionsContainer: {
    flex: 1,
    gap: verticalScale(16),
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(20),
    borderRadius: scale(12),
    borderWidth: 2,
    borderColor: Colors.border,
    backgroundColor: Colors.white,
  },
  selectedCard: {
    borderColor: Colors.primary,
    backgroundColor: Colors.surfaceVariant,
  },
  iconContainer: {
    width: scale(48),
    height: scale(48),
    borderRadius: scale(24),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: scale(16),
  },
  optionText: {
    flex: 1,
  },
  optionTitle: {
    fontSize: scale(18),
    fontFamily: Fonts.inter.semiBold,
    color: Colors.text,
    marginBottom: verticalScale(4),
  },
  optionSubtitle: {
    fontSize: scale(14),
    fontFamily: Fonts.inter.regular,
    color: Colors.textSecondary,
  },
  radioButton: {
    width: scale(20),
    height: scale(20),
    borderRadius: scale(10),
    borderWidth: 2,
    borderColor: Colors.gray300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    borderColor: Colors.primary,
  },
  radioButtonInner: {
    width: scale(10),
    height: scale(10),
    borderRadius: scale(5),
    backgroundColor: Colors.primary,
  },
  footer: {
    paddingVertical: verticalScale(32),
  },
  continueButton: {
    marginBottom: verticalScale(16),
  },
  skipButton: {
    alignItems: 'center',
    paddingVertical: verticalScale(12),
  },
  skipText: {
    fontSize: scale(16),
    fontFamily: Fonts.inter.medium,
    color: Colors.textSecondary,
  },
});