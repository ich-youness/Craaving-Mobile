import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Mail } from 'lucide-react-native';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { scale, verticalScale } from 'react-native-size-matters';

export default function GetVerifiedScreen() {
  const [email, setEmail] = useState('user@example.com'); // Mock email
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleBack = () => {
    router.back();
  };

  const handleVerify = async () => {
    if (!verificationCode.trim()) return;

    setIsLoading(true);
    // Simulate verification process
    setTimeout(() => {
      setIsLoading(false);
      router.push('/(tabs)');
    }, 2000);
  };

  const handleResend = () => {
    if (!canResend) return;

    setCanResend(false);
    setResendTimer(60);
    console.log('Resending verification email');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <ArrowLeft size={scale(24)} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Verify Email</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <View style={styles.mailIcon}>
            <Mail size={scale(32)} color={Colors.primary} />
          </View>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Check your email</Text>
          <Text style={styles.subtitle}>
            We've sent a verification code to{'\n'}
            <Text style={styles.emailText}>{email}</Text>
          </Text>
        </View>

        <View style={styles.formContainer}>
          <CustomInput
            label="Verification Code"
            value={verificationCode}
            onChangeText={setVerificationCode}
            placeholder="Enter 6-digit code"
            keyboardType="numeric"
            maxLength={6}
            autoComplete="one-time-code"
            required
          />

          <CustomButton
            title={isLoading ? "Verifying..." : "Verify & Continue"}
            onPress={handleVerify}
            disabled={verificationCode.length !== 6 || isLoading}
            fullWidth
            style={styles.verifyButton}
          />
        </View>

        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>
            Didn't receive the code?{' '}
          </Text>
          {canResend ? (
            <TouchableOpacity onPress={handleResend}>
              <Text style={styles.resendLink}>Resend</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.timerText}>
              Resend in {formatTime(resendTimer)}
            </Text>
          )}
        </View>

        <TouchableOpacity style={styles.changeEmailButton}>
          <Text style={styles.changeEmailText}>Change email address</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
  },
  iconContainer: {
    marginTop: verticalScale(48),
    marginBottom: verticalScale(32),
  },
  mailIcon: {
    width: scale(80),
    height: scale(80),
    borderRadius: scale(40),
    backgroundColor: Colors.surfaceVariant,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
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
    textAlign: 'center',
    lineHeight: scale(24),
  },
  emailText: {
    fontFamily: Fonts.inter.semiBold,
    color: Colors.text,
  },
  formContainer: {
    width: '100%',
    marginBottom: verticalScale(32),
  },
  verifyButton: {
    marginTop: verticalScale(8),
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(24),
  },
  resendText: {
    fontSize: scale(14),
    fontFamily: Fonts.inter.regular,
    color: Colors.textSecondary,
  },
  resendLink: {
    fontSize: scale(14),
    fontFamily: Fonts.inter.semiBold,
    color: Colors.primary,
  },
  timerText: {
    fontSize: scale(14),
    fontFamily: Fonts.inter.regular,
    color: Colors.textLight,
  },
  changeEmailButton: {
    paddingVertical: verticalScale(12),
  },
  changeEmailText: {
    fontSize: scale(14),
    fontFamily: Fonts.inter.medium,
    color: Colors.primary,
  },
});