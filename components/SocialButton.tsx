import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { scale, verticalScale } from 'react-native-size-matters';

interface SocialButtonProps {
  title: string;
  onPress: () => void;
  icon: React.ReactNode;
  variant?: 'google' | 'apple';
}

export default function SocialButton({ title, onPress, icon, variant }: SocialButtonProps) {
  const getButtonStyle = () => {
    switch (variant) {
      case 'apple':
        return {
          backgroundColor: Colors.black,
        };
      default:
        return {
          backgroundColor: Colors.white,
          borderWidth: 1,
          borderColor: Colors.border,
        };
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case 'apple':
        return Colors.white;
      default:
        return Colors.text;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyle()]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <Text style={[styles.text, { color: getTextColor() }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(16),
    borderRadius: scale(8),
    marginBottom: verticalScale(12),
  },
  iconContainer: {
    marginRight: scale(8),
  },
  text: {
    fontSize: scale(14),
    fontFamily: Fonts.inter.medium,
  },
});