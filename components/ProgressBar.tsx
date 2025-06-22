import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { scale, verticalScale } from 'react-native-size-matters';

interface ProgressBarProps {
  current: number;
  total: number;
  style?: any;
}

export default function ProgressBar({ current, total, style }: ProgressBarProps) {
  return (
    <View style={[styles.container, style]}>
      {Array.from({ length: total }, (_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index < current ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(8),
  },
  dot: {
    width: scale(90),
    height: scale(5),
    borderRadius: scale(4),
  },
  activeDot: {
    backgroundColor: Colors.primary,
  },
  inactiveDot: {
    backgroundColor: Colors.gray300,
  },
});