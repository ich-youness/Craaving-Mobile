import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from '@expo-google-fonts/edu-nsw-act-foundation';
import {
  EduNSWACTFoundation_400Regular,
  EduNSWACTFoundation_700Bold,
} from '@expo-google-fonts/edu-nsw-act-foundation';

const { width } = Dimensions.get('window');

const images = [
  require('../assets/images/Intro/image1.png'),
  require('../assets/images/Intro/image2.png'),
  require('../assets/images/Intro/image3.png'),
];

const Login = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  let [fontsLoaded] = useFonts({
    EduNSWACTFoundation_400Regular,
    EduNSWACTFoundation_700Bold,
  });

  if (!fontsLoaded) return null;

  const onScroll = (event: import('react-native').NativeSyntheticEvent<import('react-native').NativeScrollEvent>) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(slideIndex);
  };


  return (
    <SafeAreaView style={styles.container}>
      {/* Top Progress Bars */}
      <View style={styles.progressContainer}>
        {[0, 1, 2].map((_, index) => (
          <View
            key={index}
            style={[
              styles.bar,
              { backgroundColor: index <= currentIndex ? '#00672b' : '#cceeda' },
            ]}
          />
        ))}
      </View>

      {/* Swipeable Images */}
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={images}
        onScroll={onScroll}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={item} style={styles.image} resizeMode="cover" />
        )}
      />
      <View> 
        <Text style={{ textAlign: 'center', fontFamily: 'EduNSWACTFoundation_700Bold', fontSize: 24, marginTop: 20}}>
          Find Your New <Text style={{color:"#00ac47"}}>Favorite Food</Text> Spot!
        </Text>
        <Text style={{ textAlign: 'center', fontFamily: 'EduNSWACTFoundation_400Regular', fontSize: 16, marginTop: 10, paddingHorizontal: 20, marginBottom: 20 }}>
          From Popular Eateries To Hidden Gems
        </Text>
      </View>

      {/* Bottom Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create an account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.outlined]}>
          <Text style={[styles.buttonText, { color: '#00ac47' }]}>Log into an existing account</Text>
        </TouchableOpacity>
        <Text style={{ fontFamily: 'EduNSWACTFoundation_400Regular', fontSize: 14, color: '#666' , alignItems: 'center', marginTop: 0, textAlign: 'center'}}>
          By continuing, you agree to our <Text style={{color:"#00ac47"}}>Terms and conditions</Text> of Services.
        </Text>

      </View>


      {/* Footer */}
      {/* <View style={{ alignItems: 'center', marginBottom: 0 }}>
        <Text style={{ fontFamily: 'EduNSWACTFoundation_400Regular', fontSize: 14, color: '#666' }}>
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </Text>
      </View> */}
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    gap: 10,
  },
  bar: {
    width: 50,
    height: 5,
    borderRadius: 3,
  },
  image: {
    width,
    height: 400,
    borderRadius: 5 ,
    borderColor: "#d7d7d7",
    borderWidth: 2 ,
    borderBottomWidth: 0,
    marginTop: 20,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    marginTop: 'auto',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#00ac47',
    paddingVertical: 15,
    borderRadius: 27,
    marginBottom: 15,
    alignItems: 'center',
  },
  outlined: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#00ac47',
  },
  buttonText: {
    fontFamily: 'EduNSWACTFoundation_700Bold',
    color: '#fff',
    fontSize: 18,
    
  },
});
