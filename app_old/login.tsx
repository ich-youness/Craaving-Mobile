import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { useFonts } from '@expo-google-fonts/edu-nsw-act-foundation' ;
import {
  EduNSWACTFoundation_400Regular,
  EduNSWACTFoundation_700Bold,
} from '@expo-google-fonts/edu-nsw-act-foundation';
import { router } from 'expo-router';


import { InterTight_400Regular } from '@expo-google-fonts/inter-tight/400Regular';

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Link } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Outfit_400Regular, Outfit_700Bold } from '@expo-google-fonts/outfit';


// If using a stack navigator, import the correct type from your navigation setup
import type { StackNavigationProp } from '@react-navigation/stack';
 // Adjust path and type name as needed




const { width , height} = Dimensions.get('window');

const images = [
  require('../assets/images/Intro/image1.png'),
  require('../assets/images/Intro/image2.png'),
  require('../assets/images/Intro/image3.png'),
];



const Login = () => {
const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const navigation = useNavigation();

//   const goTo = (screen: string) => {
//   navigation.navigate(screen);
// };
  const goTo = (screen: string) => {
    setTimeout(() => {
      
      router.replace('/getStarted');
    }, 10);
  };

  let [fontsLoaded] = useFonts({
        Outfit_400Regular,
        Outfit_700Bold,
  });

  if (!fontsLoaded) return null;

  const onScroll = (event: import('react-native').NativeSyntheticEvent<import('react-native').NativeScrollEvent>) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(slideIndex);
  };
  const scaleFontSize = (size: number) => {
  const { width } = Dimensions.get('window');
  // Base width of 375 is iPhone 11/12/13
  const baseWidth = 375;
  return size * (width / baseWidth);
};


const descriptions = [
  (
    <Text style={styles.heading}>
      Find Your New <Text style={styles.highlight}>Favorite Food</Text> Spot!
    </Text>
  ),
  (
    <Text style={styles.heading}>
      Experience a new <Text style={styles.highlight}>platform to sell your</Text>  tasty meals
    </Text>
  ),
  (
    <Text style={styles.heading}>
      Connect, Deliver & <Text style={styles.highlight}>Earn!</Text>
    </Text>
  ),
];

const subdescriptions = [
  (
     <Text style={{ textAlign: 'center', fontFamily: 'Outfit_400Regular', fontSize: scale(16),}}>
          From Popular Eateries To Hidden Gems
      </Text>
  ),
  (
    <Text style={{ textAlign: 'center', fontFamily: 'Outfit_400Regular', fontSize: scale(16),}}>
      Create & Own a market for your delicious meals
    </Text>
  ),
  (
    <Text style={{ textAlign: 'center', fontFamily: 'Outfit_400Regular', fontSize: scale(16),}}>
      Become a delivery partner to our sellers by ensuring speedy delivery to buyers
    </Text>
  ),
];



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
<View style={{height: height * 0.7, backgroundColor:"none" }}>
      {/* Swipeable Images */}
      <View style={{ backgroundColor: "none"  , marginBottom:scale(1)}}>

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

      </View>
      

      <View style={{ height: height * scale(0.15),backgroundColor:"none" , marginTop: scale(30)}}> 
        <Text style={{ textAlign: 'center', fontFamily: 'EduNSWACTFoundation_700Bold', fontSize: scale(24)
,}}>
          {descriptions[currentIndex]}
         
          {/* Find Your New <Text style={{color:"#00ac47"}}>Favorite Food</Text> Spot! */}
        </Text>
         <Text style={{ textAlign: 'center', fontFamily: 'EduNSWACTFoundation_400Regular', fontSize: 16, marginTop: 10, paddingHorizontal: 20, marginBottom: 20 }}>
          {subdescriptions[currentIndex]}
          {/* From Popular Eateries To Hidden Gems */}
        </Text>
       
      </View>


</View>

      {/* Bottom Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}  onPress={() => goTo("signup")}>Create an account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.outlined]}>
          <Text style={[styles.buttonText, { color: '#00ac47' }]} > Log into an existing account</Text>
        </TouchableOpacity>
        <Text style={{ fontFamily: 'Outfit_400Regular', fontSize: scale(14), color: '#666' , alignItems: 'center', marginTop: 0, textAlign: 'center'}}>
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
    width: scale(80),
    height: 5,
    borderRadius: 3,
  },

  image: {
    width: width,
    height: scale(300), // or adjust based on your design
    borderRadius: scale(50),
    borderColor: "#ffffff",
    borderWidth: scale(20),
    borderBottomWidth: 0,
    marginTop: scale(20),
},


  buttonContainer: {
    paddingHorizontal: 20,
    marginTop: 'auto',
    marginBottom: scale(40),
  },
  button: {
    backgroundColor: '#00ac47',
    paddingVertical: 9,
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
    // fontFamily: 'EduNSWACTFoundation_700Bold',
    fontFamily: 'Outfit_700Bold',
    color: '#fff',
    fontSize: scale(17),
    
  },
  heading: {
    textAlign: 'center',
    // fontFamily: 'EduNSWACTFoundation_700Bold',
    fontFamily: 'Outfit_700Bold',
    fontSize: scale(24),
    marginHorizontal: 20,
    
  },
  highlight: {
    color: '#00ac47',
  },

});
