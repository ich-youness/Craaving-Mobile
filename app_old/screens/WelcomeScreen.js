import React, { useRef, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';

const DATA = [
  {
    image: require('../../assets/images/Intro/image1.png'),
    title: 'Find Your New Favorite Food Spot!',
    subtitle: 'From Popular Eateries To Hidden Gems',
  },
  {
    image: require('../../assets/images/Intro/image2.png'),
    title: 'Experience a new platform to sell your tasty meals',
    subtitle: 'Create & Own a market for your delicious meals',
  },
  {
    image: require('../../assets/images/Intro/image3.png'),
    title: 'Connect, Deliver & Earn!',
    subtitle: 'Become a delivery partner to our sellers by ensuring speedy delivery to buyers',
  },
];

function ProgressBar({ total, active }) {
  return (
    <View style={styles.progressBarContainer}>
      {[...Array(total)].map((_, i) => (
        <View
          key={i}
          style={[styles.progressBar, { backgroundColor: i === active ? '#00672b' : '#b2d8c5' }]}
        />
      ))}
    </View>
  );
}

export default function WelcomeScreen({ navigation }) {
  const [index, setIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      Animated.sequence([
        Animated.timing(fadeAnim, { toValue: 0, duration: 150, useNativeDriver: true }),
        Animated.timing(fadeAnim, { toValue: 1, duration: 150, useNativeDriver: true }),
      ]).start();
      setIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <View style={styles.container}>
      <ProgressBar total={3} active={index} />
      <FlatList
        data={DATA}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <Animated.View style={{ opacity: fadeAnim, width: Dimensions.get('window').width }}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </Animated.View>
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.createBtn} onPress={() => navigation.navigate('UserIntent')}>
          <Text style={styles.createBtnText}>Create an account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginBtnText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 60 },
  progressBarContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 24 },
  progressBar: { width: 32, height: 6, borderRadius: 3, marginHorizontal: 4 },
  image: { width: 300, height: 220, alignSelf: 'center', marginVertical: 24, borderRadius: 16, backgroundColor: '#e0e0e0' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginTop: 16, color: '#00672b' },
  subtitle: { fontSize: 16, textAlign: 'center', color: '#444', marginBottom: 24 },
  buttonContainer: { position: 'absolute', bottom: 40, width: '100%', alignItems: 'center' },
  createBtn: { backgroundColor: '#00672b', borderRadius: 30, paddingVertical: 14, paddingHorizontal: 60, marginBottom: 12 },
  createBtnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  loginBtn: { borderColor: '#00672b', borderWidth: 2, borderRadius: 30, paddingVertical: 14, paddingHorizontal: 60 },
  loginBtnText: { color: '#00672b', fontSize: 18, fontWeight: 'bold' },
}); 