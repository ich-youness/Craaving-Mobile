import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  FlatList,
  Alert,
  Platform
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, MapPin, Navigation } from 'lucide-react-native';
import * as Location from 'expo-location';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { scale, verticalScale } from 'react-native-size-matters';

interface LocationSuggestion {
  place_id: string;
  display_name: string;
  city: string;
  country: string;
  lat: string;
  lon: string;
}

export default function LocationScreen() {
  const [locationInput, setLocationInput] = useState('');
  const [suggestions, setSuggestions] = useState<LocationSuggestion[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<LocationSuggestion | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDetecting, setIsDetecting] = useState(false);
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const fetchLocationSuggestions = async (query: string) => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      // Using a mock API response since Geoapify requires API key
      const mockSuggestions: LocationSuggestion[] = [
        {
          place_id: '1',
          display_name: 'New York, NY, USA',
          city: 'New York',
          country: 'United States',
          lat: '40.7128',
          lon: '-74.0060',
        },
        {
          place_id: '2',
          display_name: 'Los Angeles, CA, USA',
          city: 'Los Angeles',
          country: 'United States',
          lat: '34.0522',
          lon: '-118.2437',
        },
        {
          place_id: '3',
          display_name: 'Chicago, IL, USA',
          city: 'Chicago',
          country: 'United States',
          lat: '41.8781',
          lon: '-87.6298',
        },
      ].filter(location => 
        location.display_name.toLowerCase().includes(query.toLowerCase())
      );

      setSuggestions(mockSuggestions);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleLocationInputChange = (text: string) => {
    setLocationInput(text);
    setSelectedLocation(null);
    fetchLocationSuggestions(text);
  };

  const handleSuggestionSelect = (suggestion: LocationSuggestion) => {
    setSelectedLocation(suggestion);
    setLocationInput(suggestion.display_name);
    setSuggestions([]);
  };

  const getCurrentLocation = async () => {
    if (Platform.OS === 'web') {
      Alert.alert(
        'Location Not Available',
        'Location detection is not available in web version. Please enter your location manually.'
      );
      return;
    }

    setIsDetecting(true);
    
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permission Denied',
          'Location permission is required to detect your current location.'
        );
        setIsDetecting(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      
      // Mock reverse geocoding result
      const mockLocation: LocationSuggestion = {
        place_id: 'current',
        display_name: 'Current Location - San Francisco, CA, USA',
        city: 'San Francisco',
        country: 'United States',
        lat: location.coords.latitude.toString(),
        lon: location.coords.longitude.toString(),
      };

      setSelectedLocation(mockLocation);
      setLocationInput(mockLocation.display_name);
      setSuggestions([]);
    } catch (error) {
      Alert.alert('Error', 'Could not detect your location. Please try again.');
    } finally {
      setIsDetecting(false);
    }
  };

  const handleContinue = () => {
    if (!selectedLocation) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push('/setupProfile');
    }, 1000);
  };

  const handleSkip = () => {
    router.push('/setupProfile');
  };

  const renderSuggestion = ({ item }: { item: LocationSuggestion }) => (
    <TouchableOpacity
      style={styles.suggestionItem}
      onPress={() => handleSuggestionSelect(item)}
    >
      <MapPin size={scale(16)} color={Colors.textSecondary} />
      <Text style={styles.suggestionText}>{item.display_name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <ArrowLeft size={scale(24)} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Location</Text>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Where are you located?</Text>
          <Text style={styles.subtitle}>
            Help us show you nearby food spots and delivery opportunities.
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <CustomInput
            label="City or Address"
            value={locationInput}
            onChangeText={handleLocationInputChange}
            placeholder="Enter your city or address"
            autoComplete="street-address"
            required
          />

          <TouchableOpacity 
            style={styles.currentLocationButton}
            onPress={getCurrentLocation}
            disabled={isDetecting}
          >
            <Navigation 
              size={scale(20)} 
              color={Colors.primary} 
              style={isDetecting && { opacity: 0.5 }}
            />
            <Text style={[styles.currentLocationText, isDetecting && { opacity: 0.5 }]}>
              {isDetecting ? 'Detecting...' : 'Use Current Location'}
            </Text>
          </TouchableOpacity>
        </View>

        {suggestions.length > 0 && (
          <View style={styles.suggestionsContainer}>
            <FlatList
              data={suggestions}
              renderItem={renderSuggestion}
              keyExtractor={(item) => item.place_id}
              style={styles.suggestionsList}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}

        <View style={styles.footer}>
          <CustomButton
            title={isLoading ? "Verifying..." : "Continue"}
            onPress={handleContinue}
            disabled={!selectedLocation || isLoading}
            fullWidth
          />
        </View>
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
  skipText: {
    fontSize: scale(16),
    fontFamily: Fonts.inter.medium,
    color: Colors.primary,
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
  inputContainer: {
    marginBottom: verticalScale(16),
  },
  currentLocationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(16),
    borderRadius: scale(8),
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: Colors.surfaceVariant,
    gap: scale(8),
  },
  currentLocationText: {
    fontSize: scale(16),
    fontFamily: Fonts.inter.medium,
    color: Colors.primary,
  },
  suggestionsContainer: {
    flex: 1,
    maxHeight: verticalScale(200),
  },
  suggestionsList: {
    backgroundColor: Colors.white,
    borderRadius: scale(8),
    borderWidth: 1,
    borderColor: Colors.border,
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(16),
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
    gap: scale(12),
  },
  suggestionText: {
    fontSize: scale(16),
    fontFamily: Fonts.inter.regular,
    color: Colors.text,
    flex: 1,
  },
  footer: {
    paddingVertical: verticalScale(32),
  },
});