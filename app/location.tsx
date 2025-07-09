// import React, { useState, useEffect } from 'react';
// import { 
//   View, 
//   Text, 
//   StyleSheet, 
//   TouchableOpacity, 
//   FlatList,
//   Alert,
//   Platform
// } from 'react-native';
// import { useRouter } from 'expo-router';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { ArrowLeft, MapPin, Navigation } from 'lucide-react-native';
// import * as Location from 'expo-location';
// import CustomInput from '@/components/CustomInput';
// import CustomButton from '@/components/CustomButton';
// import { Colors } from '@/constants/Colors';
// import { Fonts } from '@/constants/Fonts';
// import { scale, verticalScale } from 'react-native-size-matters';

// interface LocationSuggestion {
//   place_id: string;
//   display_name: string;
//   city: string;
//   country: string;
//   lat: string;
//   lon: string;
// }

// export default function LocationScreen() {
//   const [locationInput, setLocationInput] = useState('');
//   const [suggestions, setSuggestions] = useState<LocationSuggestion[]>([]);
//   const [selectedLocation, setSelectedLocation] = useState<LocationSuggestion | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isDetecting, setIsDetecting] = useState(false);
//   const router = useRouter();

//   const handleBack = () => {
//     router.back();
//   };

//   const fetchLocationSuggestions = async (query: string) => {
//     if (query.length < 3) {
//       setSuggestions([]);
//       return;
//     }

//     try {
//       // Using a mock API response since Geoapify requires API key
//       const mockSuggestions: LocationSuggestion[] = [
//         {
//           place_id: '1',
//           display_name: 'New York, NY, USA',
//           city: 'New York',
//           country: 'United States',
//           lat: '40.7128',
//           lon: '-74.0060',
//         },
//         {
//           place_id: '2',
//           display_name: 'Los Angeles, CA, USA',
//           city: 'Los Angeles',
//           country: 'United States',
//           lat: '34.0522',
//           lon: '-118.2437',
//         },
//         {
//           place_id: '3',
//           display_name: 'Chicago, IL, USA',
//           city: 'Chicago',
//           country: 'United States',
//           lat: '41.8781',
//           lon: '-87.6298',
//         },
//       ].filter(location => 
//         location.display_name.toLowerCase().includes(query.toLowerCase())
//       );

//       setSuggestions(mockSuggestions);
//     } catch (error) {
//       console.error('Error fetching suggestions:', error);
//     }
//   };

//   const handleLocationInputChange = (text: string) => {
//     setLocationInput(text);
//     setSelectedLocation(null);
//     fetchLocationSuggestions(text);
//   };

//   const handleSuggestionSelect = (suggestion: LocationSuggestion) => {
//     setSelectedLocation(suggestion);
//     setLocationInput(suggestion.display_name);
//     setSuggestions([]);
//   };

//   const getCurrentLocation = async () => {
//     if (Platform.OS === 'web') {
//       Alert.alert(
//         'Location Not Available',
//         'Location detection is not available in web version. Please enter your location manually.'
//       );
//       return;
//     }

//     setIsDetecting(true);
    
//     try {
//       const { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         Alert.alert(
//           'Permission Denied',
//           'Location permission is required to detect your current location.'
//         );
//         setIsDetecting(false);
//         return;
//       }

//       const location = await Location.getCurrentPositionAsync({});
      
//       // Mock reverse geocoding result
//       const mockLocation: LocationSuggestion = {
//         place_id: 'current',
//         display_name: 'Current Location - San Francisco, CA, USA',
//         city: 'San Francisco',
//         country: 'United States',
//         lat: location.coords.latitude.toString(),
//         lon: location.coords.longitude.toString(),
//       };

//       setSelectedLocation(mockLocation);
//       setLocationInput(mockLocation.display_name);
//       setSuggestions([]);
//     } catch (error) {
//       Alert.alert('Error', 'Could not detect your location. Please try again.');
//     } finally {
//       setIsDetecting(false);
//     }
//   };

//   const handleContinue = () => {
//     if (!selectedLocation) return;
    
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       router.push('/setupProfile');
//     }, 1000);
//   };

//   const handleSkip = () => {
//     router.push('/setupProfile');
//   };

//   const renderSuggestion = ({ item }: { item: LocationSuggestion }) => (
//     <TouchableOpacity
//       style={styles.suggestionItem}
//       onPress={() => handleSuggestionSelect(item)}
//     >
//       <MapPin size={scale(16)} color={Colors.textSecondary} />
//       <Text style={styles.suggestionText}>{item.display_name}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={handleBack} style={styles.backButton}>
//           <ArrowLeft size={scale(24)} color={Colors.text} />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Location</Text>
//         <TouchableOpacity onPress={handleSkip}>
//           <Text style={styles.skipText}>Skip</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.content}>
//         <View style={styles.titleContainer}>
//           <Text style={styles.title}>Where are you located?</Text>
//           <Text style={styles.subtitle}>
//             Help us show you nearby food spots and delivery opportunities.
//           </Text>
//         </View>

//         <View style={styles.inputContainer}>
//           <CustomInput
//             label="City or Address"
//             value={locationInput}
//             onChangeText={handleLocationInputChange}
//             placeholder="Enter your city or address"
//             autoComplete="street-address"
//             required
//           />

//           <TouchableOpacity 
//             style={styles.currentLocationButton}
//             onPress={getCurrentLocation}
//             disabled={isDetecting}
//           >
//             <Navigation 
//               size={scale(20)} 
//               color={Colors.primary} 
//               style={isDetecting && { opacity: 0.5 }}
//             />
//             <Text style={[styles.currentLocationText, isDetecting && { opacity: 0.5 }]}>
//               {isDetecting ? 'Detecting...' : 'Use Current Location'}
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {suggestions.length > 0 && (
//           <View style={styles.suggestionsContainer}>
//             <FlatList
//               data={suggestions}
//               renderItem={renderSuggestion}
//               keyExtractor={(item) => item.place_id}
//               style={styles.suggestionsList}
//               showsVerticalScrollIndicator={false}
//             />
//           </View>
//         )}

//         <View style={styles.footer}>
//           <CustomButton
//             title={isLoading ? "Verifying..." : "Continue"}
//             onPress={handleContinue}
//             disabled={!selectedLocation || isLoading}
//             fullWidth
//           />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.white,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: scale(20),
//     paddingVertical: verticalScale(16),
//     borderBottomWidth: 1,
//     borderBottomColor: Colors.borderLight,
//   },
//   backButton: {
//     padding: scale(4),
//   },
//   headerTitle: {
//     fontSize: scale(18),
//     fontFamily: Fonts.inter.semiBold,
//     color: Colors.text,
//   },
//   skipText: {
//     fontSize: scale(16),
//     fontFamily: Fonts.inter.medium,
//     color: Colors.primary,
//   },
//   content: {
//     flex: 1,
//     paddingHorizontal: scale(20),
//   },
//   titleContainer: {
//     marginTop: verticalScale(32),
//     marginBottom: verticalScale(32),
//   },
//   title: {
//     fontSize: scale(28),
//     fontFamily: Fonts.inter.bold,
//     color: Colors.text,
//     marginBottom: verticalScale(12),
//   },
//   subtitle: {
//     fontSize: scale(16),
//     fontFamily: Fonts.inter.regular,
//     color: Colors.textSecondary,
//     lineHeight: scale(24),
//   },
//   inputContainer: {
//     marginBottom: verticalScale(16),
//   },
//   currentLocationButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: verticalScale(12),
//     paddingHorizontal: scale(16),
//     borderRadius: scale(8),
//     borderWidth: 1,
//     borderColor: Colors.primary,
//     backgroundColor: Colors.surfaceVariant,
//     gap: scale(8),
//   },
//   currentLocationText: {
//     fontSize: scale(16),
//     fontFamily: Fonts.inter.medium,
//     color: Colors.primary,
//   },
//   suggestionsContainer: {
//     flex: 1,
//     maxHeight: verticalScale(200),
//   },
//   suggestionsList: {
//     backgroundColor: Colors.white,
//     borderRadius: scale(8),
//     borderWidth: 1,
//     borderColor: Colors.border,
//   },
//   suggestionItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: verticalScale(12),
//     paddingHorizontal: scale(16),
//     borderBottomWidth: 1,
//     borderBottomColor: Colors.borderLight,
//     gap: scale(12),
//   },
//   suggestionText: {
//     fontSize: scale(16),
//     fontFamily: Fonts.inter.regular,
//     color: Colors.text,
//     flex: 1,
//   },
//   footer: {
//     paddingVertical: verticalScale(32),
//   },
// });

import { View, Text, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import { GOOGLE_API_KEY } from '../constants/keys';
import { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';





const { width, height } = Dimensions.get('window');
const location = () => {

  const getCurrentLocation = async () => {
  try {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Location permission not granted');
      return;
    }

    let loc = await Location.getCurrentPositionAsync({});
    let [reverseGeocode] = await Location.reverseGeocodeAsync(loc.coords);

    const city = reverseGeocode.city || reverseGeocode.subregion || '';
    const country = reverseGeocode.country || '';
    setQuery(`${city}, ${country}`);
    setSuggestions([]);
  } catch (error) {
    console.error("Location error:", error);
    alert("Couldn't detect your location");
  }
};


  const [query, setQuery] = useState('');
type Suggestion = { id: string; city: string; country: string };
const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
const [loading, setLoading] = useState(false);

const GEOAPIFY_API_KEY = '6c0c53026459435ab6ef71f7158f6af5';

const fetchSuggestions = async (text: string | any[]) => {
  if (text.length < 2) {
    setSuggestions([]);
    return;
  }

  setLoading(true);
  try {
    const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&filter=countrycode:us,ma,fr,gb&limit=5&lang=en&type=city&apiKey=${GEOAPIFY_API_KEY}`);
    const data = await response.json();

    const cities = data.features.map((feature: { properties: { place_id: any; city: any; name: any; country: any; }; }) => ({
      id: feature.properties.place_id,
      city: feature.properties.city || feature.properties.name,
      country: feature.properties.country,
    }));

    setSuggestions(cities);
  } catch (error) {
    console.error('Geoapify error:', error);
  } finally {
    setLoading(false);
  }
};

const handleSelect = (item: { city: any; country: any; }) => {
  setQuery(`${item.city}, ${item.country}`);
  setSuggestions([]);
};



  return (
    <SafeAreaView style={styles.container}>
  {/* SECTION 1 */}
  <View style={styles.topSection}>
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.replace('/getStarted')}>
        <Icon name="arrow-back-ios" size={20} color="#008A39" />
        <Text style={styles.backText}>Go Back</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.logoContainer}>
      <Image source={require('../assets/images/logo2.png')} style={styles.logo} />
      <Text style={styles.logoText}>Craaving</Text>
    </View>

    <View style={styles.textBlock}>
      <Text style={styles.title}>Let’s Find & Verify Your Location</Text>
      <Text style={styles.subtitle}>Provide a location and let us find you</Text>

      {/* Input with icon */}
      <View style={styles.inputWrapper}>
  <View style={styles.inputContainer}>
    <Icon name="location-on" size={24} color="#888" style={styles.icon} />
    <TextInput
      style={styles.input}
      placeholder="Enter your location"
      placeholderTextColor="#888"
      value={query}
      onChangeText={(text) => {
        setQuery(text);
        fetchSuggestions(text);
      }}
    />
  </View>

  {loading && <ActivityIndicator size="small" color="#008A39" style={{ marginTop: 5 }} />}

  {suggestions.length > 0 && (
    <FlatList
      data={suggestions}
      keyExtractor={(item: Suggestion) => item.id.toString()}
      renderItem={({ item }: { item: Suggestion }) => (
        <TouchableOpacity onPress={() => handleSelect(item)} style={styles.suggestionItem}>
          <Text>{item.city}, {item.country}</Text>
        </TouchableOpacity>
      )}
      style={styles.suggestionsList}
      keyboardShouldPersistTaps="handled"
    />
  )}
</View>

<TouchableOpacity onPress={getCurrentLocation} style={styles.useLocationButton}>
  <Text style={styles.lightText}>Use Current Address</Text>
</TouchableOpacity>


    </View>
  </View>

  {/* SECTION 2 */}
  <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Verify location</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.button, styles.outlined]} onPress={() => router.replace('/setupProfile')}>
      <Text style={[styles.buttonText, { color: '#00ac47' }]}>Skip and do it later!</Text>
    </TouchableOpacity>
  </View>
</SafeAreaView>

  )
}

export default location

const styles = StyleSheet.create({
    title: {
    fontSize: scale(24),
    fontWeight: '500',
    color: '#008A39',
    textAlign: 'center',
    marginBottom: scale(8),
  },
  subtitle: {
    fontSize: scale(14),
    color: '#666',
    textAlign: 'center',
    marginBottom: scale(16),
  },
  textBlock: {
  gap: scale(12), // vertical spacing between title, subtitle, input, etc.
  alignItems: 'center',
  marginTop: scale(20),
},
   logoContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: scale(30),
      marginBottom: scale(20),
    },
    logo: {
      width: scale(33),
      height: scale(33),
      marginRight: scale(8),
    },
    logoText: {
      fontSize: scale(24),
      fontWeight: '500',
      color: '#008A39',
    },
    navBar: {
    marginTop: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: '#008A39',
    fontSize: scale(16),
    fontWeight: '500',
    marginLeft: scale(5),
  },
  inputWrapper: {
  position: 'relative',
  width: scale(300),
  alignItems: 'center',
},

suggestionsList: {
  position: 'absolute',
  top: scale(45),
  width: '100%',
  backgroundColor: '#fff',
  borderRadius: 6,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
  zIndex: 999,
  maxHeight: 150,
},

  topSection: {
  flex: 1,
  paddingHorizontal: scale(10),
},
Text: {
  flexDirection: 'column',
  alignItems: 'center',
  marginHorizontal: scale(10),
  gap: scale(12), // for better vertical spacing
},
suggestionItem: {
  padding: 10,
  borderBottomWidth: 1,
  borderColor: '#ccc',
  width: scale(300),
  alignSelf: 'center',
  backgroundColor: '#f9f9f9',
},
useLocationButton: {
  backgroundColor: 'transparent',
  padding: scale(10),
  borderRadius: scale(8),
  marginTop: scale(10),
  width: scale(200),
  alignItems: 'center',
},
buttonContainer: {
  paddingHorizontal: scale(20),
  paddingBottom: scale(40),
  gap: scale(15),
},

  container: {
 
  flex: 1,
  backgroundColor: '#fff',
  // paddingHorizontal: scale(20),
  justifyContent: 'space-between', // Helps position top/bottom

    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // input: {
  //   height: scale(40),
  //   width: scale(300),
  //   borderColor: '#ccc',
  //   borderWidth: 1,
  //   borderRadius: 8,
  //   paddingHorizontal: 10,
  //   marginTop: 10,
  // },
    inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 10,
    height: scale(40),
    width: scale(300),
  },
  icon: {
    marginRight: 8,
  },
    input: {
    flex: 1,
    height: '100%',
  },
  //  buttonContainer: {
  //   flexDirection: 'column',
    
  //   paddingHorizontal: scale(20),
  //   marginTop: scale(200),
  //   marginBottom: scale(40),
  // },
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
    fontFamily: 'InterTight_400Regular',
    color: '#fff',
    
    fontSize: scale(17),
    
  },
  NavBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
    backgroundColor: 'none',
    marginTop: scale(10),
    
    
  },
  Logo:{
    flexDirection:'row',
    justifyContent: 'center',
    // alignContent: 'center',
    marginVertical: scale(40),
  },
  // Text: {
  //   flexDirection: 'column',
  //   alignItems:'center',
  //   // justifyContent:'center',
  //   // width: scale(220),
  //   marginHorizontal:scale(10)   ,  
  // },
  bigText: {
    fontSize: scale(24),
    fontWeight: '500',
    color:'#008A39',
    marginBottom: scale(10),
    textAlign: 'center',
  },
  smallText:{
    fontSize: scale(16),
    color: '#666',
    textAlign: 'center',
    marginBottom: scale(20),
  },
  lightText: {
    fontSize: scale(12),
    color: '#797979d8',
    textAlign: 'center',
    fontFamily: 'InterTight_400Regular',
    marginTop: 0,
    width: scale(300),
  },
//   suggestionItem: {
//   padding: 10,
//   borderBottomWidth: 1,
//   borderColor: '#ccc',
// },

})