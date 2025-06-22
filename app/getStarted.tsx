import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'lucide-react-native';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import SocialButton from '@/components/SocialButton';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { scale, verticalScale } from 'react-native-size-matters';

export default function GetStartedScreen() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleContinue = async () => {
    if (!email.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push('/location');
    }, 1000);
  };

  const handleGoogleLogin = () => {
    console.log('Google login pressed');
  };

  const handleAppleLogin = () => {
    console.log('Apple login pressed');
  };

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <ArrowLeft size={scale(24)} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Get Started</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>What's your email?</Text>
          <Text style={styles.subtitle}>
            We'll use this to create your account and keep you updated.
          </Text>
        </View>

        <View style={styles.formContainer}>
          <CustomInput
            label="Email Address"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            required
          />

          <CustomButton
            title={isLoading ? "Creating Account..." : "Continue"}
            onPress={handleContinue}
            disabled={!isValidEmail(email) || isLoading}
            fullWidth
            style={styles.continueButton}
          />
        </View>

        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.socialContainer}>
          <SocialButton
            title="Continue with Google"
            onPress={handleGoogleLogin}
            variant="google"
            icon={
              <View style={styles.googleIcon}>
                <Text style={styles.googleIconText}>G</Text>
              </View>
            }
          />
          
          <SocialButton
            title="Continue with Apple"
            onPress={handleAppleLogin}
            variant="apple"
            icon={
              <View style={styles.appleIcon}>
                <Text style={styles.appleIconText}>🍎</Text>
              </View>
            }
          />
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(16),
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  backButton: {
    padding: scale(4),
  },
  headerTitle: {
    fontSize: scale(18),
    fontFamily: Fonts.inter.semiBold,
    color: Colors.text,
  },
  placeholder: {
    width: scale(32),
  },
  content: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
  titleContainer: {
    marginTop: verticalScale(32),
    marginBottom: verticalScale(32),
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
  formContainer: {
    marginBottom: verticalScale(32),
  },
  continueButton: {
    marginTop: verticalScale(8),
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(32),
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.border,
  },
  dividerText: {
    fontSize: scale(14),
    fontFamily: Fonts.inter.regular,
    color: Colors.textSecondary,
    marginHorizontal: scale(16),
  },
  socialContainer: {
    gap: verticalScale(12),
  },
  googleIcon: {
    width: scale(20),
    height: scale(20),
    borderRadius: scale(4),
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  googleIconText: {
    fontSize: scale(14),
    fontFamily: Fonts.inter.bold,
    color: '#4285f4',
  },
  appleIcon: {
    width: scale(20),
    height: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  appleIconText: {
    fontSize: scale(16),
  },
});