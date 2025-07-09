import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Image } from 'react-native';

export default function UserIntentScreen({ navigation }) {
  const slideAnim = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.timing(slideAnim, { toValue: 0, duration: 400, useNativeDriver: true }).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.topBtn}>Go Back</Text>
        </TouchableOpacity>
        <View style={styles.logoRow}>
          <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
          <Text style={styles.appName}>Craaving</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('NextStep')}>
          <Text style={styles.topBtn}>Continue</Text>
        </TouchableOpacity>
      </View>
      <Animated.View style={[styles.animatedBlock, { transform: [{ translateY: slideAnim }] }]}>
        <Text style={styles.title}>Let's Create Your Account</Text>
        <Text style={styles.subtitle}>Help us tailor the best experience that is right for you!</Text>
      </Animated.View>
      <View style={styles.intentButtons}>
        <TouchableOpacity style={styles.intentBtn}>
          <Text style={styles.intentBtnText}>I'd Love To Explore New Places To Eat!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.intentBtn}>
          <Text style={styles.intentBtnText}>I'd Love To Sell Exquisite & Tasty Meals!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.intentBtn}>
          <Text style={styles.intentBtnText}>I'd Love To Connect, Deliver & Earn!</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.skipBtn} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.skipBtnText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 40 },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16 },
  topBtn: { color: '#00672b', fontWeight: 'bold', fontSize: 16 },
  logoRow: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 36, height: 36, borderRadius: 18, marginRight: 8, backgroundColor: '#fff' },
  appName: { fontSize: 22, fontWeight: 'bold', color: '#00672b' },
  animatedBlock: { marginTop: 40, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#00672b', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#444', textAlign: 'center', marginBottom: 24 },
  intentButtons: { marginTop: 32, alignItems: 'center' },
  intentBtn: { backgroundColor: '#f2f2f2', borderRadius: 20, paddingVertical: 18, paddingHorizontal: 24, marginVertical: 8, width: '85%' },
  intentBtnText: { color: '#00672b', fontSize: 16, fontWeight: '600', textAlign: 'center' },
  skipBtn: { position: 'absolute', bottom: 32, right: 24, backgroundColor: '#e0e0e0', borderRadius: 20, padding: 10 },
  skipBtnText: { color: '#00672b', fontWeight: 'bold' },
}); 