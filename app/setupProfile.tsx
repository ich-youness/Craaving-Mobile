import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'lucide-react-native';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { scale, verticalScale } from 'react-native-size-matters';

export default function SetupProfileScreen() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const updateFormField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push('/getVerified');
    }, 1500);
  };

  const isFormValid = formData.firstName && formData.lastName && formData.username && 
                     formData.password && formData.confirmPassword;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <ArrowLeft size={scale(24)} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Setup Profile</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Tell us about yourself</Text>
          <Text style={styles.subtitle}>
            Create your profile to get started with Craaving.
          </Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.nameRow}>
            <CustomInput
              label="First Name"
              value={formData.firstName}
              onChangeText={(value) => updateFormField('firstName', value)}
              placeholder="Enter first name"
              autoComplete="given-name"
              error={errors.firstName}
              required
              style={styles.nameInput}
            />
            <CustomInput
              label="Last Name"
              value={formData.lastName}
              onChangeText={(value) => updateFormField('lastName', value)}
              placeholder="Enter last name"
              autoComplete="family-name"
              error={errors.lastName}
              required
              style={styles.nameInput}
            />
          </View>

          <CustomInput
            label="Username"
            value={formData.username}
            onChangeText={(value) => updateFormField('username', value)}
            placeholder="Choose a username"
            autoComplete="username"
            autoCapitalize="none"
            error={errors.username}
            helperText="This will be your unique identifier on Craaving"
            required
          />

          <CustomInput
            label="Password"
            value={formData.password}
            onChangeText={(value) => updateFormField('password', value)}
            placeholder="Create a password"
            secureTextEntry
            autoComplete="new-password"
            error={errors.password}
            helperText="Must be at least 6 characters"
            required
          />

          <CustomInput
            label="Confirm Password"
            value={formData.confirmPassword}
            onChangeText={(value) => updateFormField('confirmPassword', value)}
            placeholder="Confirm your password"
            secureTextEntry
            autoComplete="new-password"
            error={errors.confirmPassword}
            required
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <CustomButton
          title={isLoading ? "Creating Profile..." : "Continue"}
          onPress={handleContinue}
          disabled={!isFormValid || isLoading}
          fullWidth
        />
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
    paddingBottom: verticalScale(100),
  },
  nameRow: {
    flexDirection: 'row',
    gap: scale(12),
  },
  nameInput: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(24),
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.borderLight,
  },
});