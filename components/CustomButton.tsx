import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { scale, verticalScale } from 'react-native-size-matters';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  fullWidth?: boolean;
}

export default function CustomButton({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  style,
  textStyle,
  fullWidth = false,
}: CustomButtonProps) {
  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: scale(8),
      paddingHorizontal: scale(16),
    };

    // Size variations
    switch (size) {
      case 'small':
        baseStyle.paddingVertical = verticalScale(8);
        break;
      case 'large':
        baseStyle.paddingVertical = verticalScale(16);
        break;
      default:
        baseStyle.paddingVertical = verticalScale(12);
    }

    // Variant styles
    switch (variant) {
      case 'secondary':
        return {
          ...baseStyle,
          backgroundColor: Colors.surface,
          borderWidth: 1,
          borderColor: Colors.border,
        };
      case 'outline':
        return {
          ...baseStyle,
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: Colors.primary,
        };
      case 'ghost':
        return {
          ...baseStyle,
          backgroundColor: 'transparent',
        };
      default:
        return {
          ...baseStyle,
          backgroundColor: disabled ? Colors.gray300 : Colors.primary,
        };
    }
  };

  const getTextStyle = (): TextStyle => {
    const baseStyle: TextStyle = {
      fontFamily: Fonts.inter.semiBold,
      fontSize: size === 'large' ? scale(16) : scale(14),
    };

    switch (variant) {
      case 'secondary':
        return {
          ...baseStyle,
          color: Colors.text,
        };
      case 'outline':
        return {
          ...baseStyle,
          color: Colors.primary,
        };
      case 'ghost':
        return {
          ...baseStyle,
          color: Colors.primary,
        };
      default:
        return {
          ...baseStyle,
          color: disabled ? Colors.textLight : Colors.textOnPrimary,
        };
    }
  };

  return (
    <TouchableOpacity
      style={[
        getButtonStyle(),
        fullWidth && { width: '100%' },
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={[getTextStyle(), textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}