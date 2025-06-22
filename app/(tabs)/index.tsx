import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Bell, MapPin, Star, Clock, DollarSign, Pizza, ShoppingCart, UserRound, ChevronDown, Percent, Truck, Stamp, Award, CreditCard, Funnel, ChevronLeft, ChevronRight, Flame } from 'lucide-react-native';
import CustomButton from '@/components/CustomButton';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { scale, verticalScale } from 'react-native-size-matters';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';


const featuredSpots = [
  {
    id: 1,
    name: "Maria's Kitchen",
    type: 'Home Kitchen',
    rating: 4.8,
    time: '25 min',
    price: '$$',
    image: require('@/assets/images/Intro/image1.png'),
    specialty: 'Mexican Cuisine',
  },
  {
    id: 2,
    name: 'Street Tacos Plus',
    type: 'Food Truck',
    rating: 4.6,
    time: '15 min',
    price: '$',
    image: require('@/assets/images/Intro/image2.png'),
    specialty: 'Street Food',
  },
  {
    id: 3,
    name: 'Green Bowl Co',
    type: 'Restaurant',
    rating: 4.9,
    time: '30 min',
    price: '$$$',
    image: require('@/assets/images/Intro/image3.png'),
    specialty: 'Healthy Bowls',
  },
    {
    id: 4,
    name: 'Green Bowl Co',
    type: 'Restaurant',
    rating: 4.9,
    time: '30 min',
    price: '$$$',
    image: require('@/assets/images/Intro/image2.png'),
    specialty: 'Healthy Bowls',
  },
];
const FILTERS = [
  {
    key: 'Deals',
    label: 'Deals',
    icon: Award ,
    activeColor: '#a16207', // orange
    activeBg:  '#fef9c3',
  },
  {
    key: 'Free Delivery',
    label: 'Free Delivery',
    icon: Truck,
    activeColor: '#16a34a', // green
    activeBg: '#e0f7ec',
  },
  {
    key: 'StampCards',
    label: 'StampCards',
    icon: CreditCard ,
    activeColor: '#1d4ed8', // indigo
    activeBg: '#eef2ff',
  },
  {
    key: '4+ stars',
    label: '4+ stars',
    icon: Star,
    activeColor: '#facc15', // yellow
    activeBg: '#fefce8',
  },
];


const popularBrands = [
  {
    id: 1,
    name: 'Pizza Hut',
    image: require('@/assets/images/Intro/image1.png'),
  },
  {
    id: 2,
    name: 'KFC',
    image: require('@/assets/images/Intro/image2.png'),
  },
  {
    id: 3,
    name: 'Burger King',
    image: require('@/assets/images/Intro/image3.png'),
  },
  {
    id: 4,
    name: 'Domino\'s',
    image: require('@/assets/images/Intro/image1.png'),
  },
  {
    id: 5,
    name: 'Subway',
    image: require('@/assets/images/Intro/image2.png'),
  },
  
];

const dealBgColors = [
  'rgba(255, 228, 181, 0.65)', // light orange
  'rgba(144, 238, 144, 0.65)', // light green
  'rgba(173, 216, 230, 0.65)', // light blue
  'rgba(255, 182, 193, 0.65)', // light pink
  'rgba(255, 255, 224, 0.65)', // light yellow
];


export default function HomeScreen() {
const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

const toggleFilter = (key: string) => {
  setSelectedFilters((prev) =>
    prev.includes(key) ? prev.filter((f) => f !== key) : [...prev, key]
  );
};


const brandsScrollRef = useRef<ScrollView>(null);

  // Function to scroll left/right
  const scrollBrands = (direction: 'left' | 'right') => {
    if (brandsScrollRef.current) {
      brandsScrollRef.current.scrollTo({
        x: direction === 'left' ? 0 : 2000, // 2000 is a large value to scroll to end, adjust as needed
        animated: true,
      });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.logoRow}>
  
              {/* <Pizza 
                size={ */}
            <View style={styles.pizzaIconWrapper}>
              <Pizza size={scale(24)} color="white" strokeWidth={2} />
            </View>

                {/* // 16 akhir whda
                // color={'black'}
                // strokeWidth={2}
                // style={styles.pizzaIcon} */}
              {/* /> */}
              <Text style={styles.greeting}>Craaving</Text>
            </View>
           
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <ShoppingCart  size={scale(17)} color={Colors.text} strokeWidth={2} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationButton}>
            <Bell size={scale(17)} color={Colors.text} strokeWidth={2} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationButton}>
            <UserRound  size={scale(17)} color={Colors.text} strokeWidth={2} />
          </TouchableOpacity>
        </View>

        {/* Location and delivery */}
        <View style={styles.locationDeliveryRow}>
         <View style={styles.locationRow}>
          <TouchableOpacity style={styles.locationRow}>
              <MapPin size={scale(20)} color={'#16a34a'} />
             <View style={{  width: wp(40), backgroundColor: 'none',  }}>
                <Text style={styles.location}>Your location</Text>
                <Text
                  style={styles.locationText}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >CCG5+3QH, Ahmadu Bello Wy, Victor...
                </Text>
              </View>
              <ChevronDown size={scale(14)} color={Colors.text} strokeWidth={2} style={{borderRightWidth:1, borderRightColor: Colors.black}} />
            </TouchableOpacity>
          </View>
          <View style={styles.locationRow}>
            <TouchableOpacity style={styles.locationRow}>
            <Text style={styles.locationText}>Delivery</Text>
             <ChevronDown size={scale(14)} color={Colors.text} strokeWidth={2}  />
            
            </TouchableOpacity>
          </View>
        </View>

        {/* Filter Bar */}

        <View style={styles.filterBarWrapper}>
  <LinearGradient
    colors={['#ffffff9b', 'transparent']}
    style={styles.fadeLeft}
    pointerEvents="none"
  />
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.filterBar}
    snapToAlignment="start"
    decelerationRate="fast"
  >
    {FILTERS.map((filter) => {
      const isActive = selectedFilters.includes(filter.key);
      return (
        <TouchableOpacity
          key={filter.key}
          style={[
            styles.filterButton,
            isActive && {
              borderColor: filter.activeColor,
              backgroundColor: filter.activeBg,
            },
          ]}
          onPress={() => toggleFilter(filter.key)}
          activeOpacity={0.7}
        >
          <filter.icon
            size={scale(16)}
            color={isActive ? filter.activeColor : '#64748b'}
            style={{ marginRight: scale(6) }}
            fill={'none'} // isActive ? filter.activeColor : 
          />
          <Text
            style={[
              styles.filterButtonText,
              isActive && { color: filter.activeColor, fontFamily: Fonts.inter.bold },
            ]}
          >
            {filter.label}
          </Text>
        </TouchableOpacity>
      );
    })}
  </ScrollView>
  <LinearGradient
    colors={['transparent', '#fff']}
    style={styles.fadeRight}
    pointerEvents="none"
  />
</View>



        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search size={scale(20)} color={Colors.textSecondary} />
            <Text  numberOfLines={1} ellipsizeMode="tail" style={styles.searchPlaceholder}>Search restaurants, dishes, or cuisine...</Text>
            <Funnel size={scale(20)} color={Colors.textSecondary} />
            
          </View>
        </View>

        {/* popular brands */}
  <View style={styles.quickActions}>

      <View style={styles.sectionHeaderPopuBrands}>
         <Text style={styles.sectionTitle}>Popular Brands</Text>
        {/* Arrow buttons */}
        <View style={styles.brandArrows}>
         

          <TouchableOpacity
            style={styles.arrowButton}
            onPress={() => scrollBrands('left')}
            activeOpacity={0.7}
          >
            <ChevronLeft size={20} color="#64748b" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.arrowButton}
            onPress={() => scrollBrands('right')}
            activeOpacity={0.7}
          >
            <ChevronRight size={20} color="#64748b" />
          </TouchableOpacity>
        </View>

      </View>
      



      <View style={{ position: 'relative', justifyContent: 'center' }}>
        <ScrollView
          ref={brandsScrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.brandList}
        >
          {popularBrands.map((brand) => (
            <View key={brand.id} style={styles.brandItem}>
              <Image source={brand.image} style={styles.brandImage} />
              <Text style={styles.brandName}>{brand.name}</Text>
            </View>
          ))}
        </ScrollView>

      </View>
    </View>
          {/* Todays Deals   */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Today's deals <Flame  size={20} color={'#f97316'} /></Text>
            {/* <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity> */}
          </View>
          
<ScrollView 
  horizontal 
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={styles.featuredList}
>
  {featuredSpots.map((spot, idx) => (
    <TouchableOpacity key={spot.id} style={styles.spotCard1}>
      <View style={styles.dealImageWrapper}>
        <Image source={spot.image} style={styles.dealImage} />
        <View
          style={[
            styles.dealImageOverlay,
            { backgroundColor: dealBgColors[idx % dealBgColors.length] },
          ]}
        />
      </View>
      <View style={styles.spotInfo1}>
        <Text style={styles.spotName1}>{spot.name}</Text>
        <Text style={styles.spotType1}>{spot.type} • {spot.specialty}</Text>
        <View style={styles.spotMeta1}>
          <View style={styles.metaItem}>
            <Star size={scale(12)} color={Colors.warning} fill={Colors.warning} />
            <Text style={styles.metaText}>{spot.rating}</Text>
          </View>
          <View style={styles.metaItem}>
            <Clock size={scale(12)} color={Colors.textSecondary} />
            <Text style={styles.metaText}>{spot.time}</Text>
          </View>
          <View style={styles.metaItem}>
            <DollarSign size={scale(12)} color={Colors.textSecondary} />
            <Text style={styles.metaText}>{spot.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  ))}
</ScrollView>
        </View>



        {/* Featured Spots */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Near You</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.featuredList}
          >
            {featuredSpots.map((spot) => (
              <TouchableOpacity key={spot.id} style={styles.spotCard}>
                <Image source={spot.image } style={styles.spotImage} />
                <View style={styles.spotInfo}>
                  <Text style={styles.spotName}>{spot.name}</Text>
                  <Text style={styles.spotType}>{spot.type} • {spot.specialty}</Text>
                  <View style={styles.spotMeta}>
                    <View style={styles.metaItem}>
                      <Star size={scale(12)} color={Colors.warning} fill={Colors.warning} />
                      <Text style={styles.metaText}>{spot.rating}</Text>
                    </View>
                    <View style={styles.metaItem}>
                      <Clock size={scale(12)} color={Colors.textSecondary} />
                      <Text style={styles.metaText}>{spot.time}</Text>
                    </View>
                    <View style={styles.metaItem}>
                      <DollarSign size={scale(12)} color={Colors.textSecondary} />
                      <Text style={styles.metaText}>{spot.price}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityCard}>
            <Text style={styles.activityTitle}>Welcome to Craaving!</Text>
            <Text style={styles.activityText}>
              Start exploring local food spots, sell your homemade meals, or join our delivery network to earn money.
            </Text>
            <CustomButton
              title="Explore Now"
              onPress={() => console.log('Explore')}
              size="small"
              style={styles.exploreButton}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,

  },
  header: {
    // backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(10),
    borderBottomColor: Colors.borderLight,
    borderBottomWidth: 1,

  },

  headerLeft: {
    flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    // gap: scale(4),
  },
  logoRow: {
  flexDirection: 'row',
  alignItems: 'center',
  // backgroundColor: '#a7a5a3',
  
},
  pizzaIconWrapper: {
    backgroundColor: '#ea580c',
    padding: scale(10), // Adjust for desired background size
    borderRadius: scale(10), // Make it rounder
    marginRight: scale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  pizzaIcon: {
    // backgroundColor: '#ea580c',
    marginRight: 8,
    padding: 20, // Increased padding for larger background
    borderRadius: 1, // Slightly larger radius for a rounder look
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
greeting: {
  fontSize: scale(20),
  fontFamily: Fonts.inter.bold,
  fontWeight: 'bold',
  color: '#ea580c',
  marginBottom: 0, // Remove margin if present
},
  // greeting: {
  //   fontSize: scale(20),
  //   fontFamily: Fonts.inter.bold,
  //   // color: Colors.text,
  //   color: '#f97316',
  //   marginBottom: verticalScale(4),
  // },
  locationDeliveryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(16),
    borderBottomColor: Colors.borderLight,
    borderBottomWidth: 1,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(4),
  },
  location: {
    fontSize: scale(12),
    fontFamily: Fonts.inter.medium,
    color: Colors.textSecondary,
  },
  locationText: {
    fontSize: scale(12),
    fontFamily: Fonts.inter.medium,
    color: Colors.black,
    marginLeft: scale(2),
  },


  filterBarWrapper: {
  position: 'relative',
  height: scale(48),
  marginBottom: verticalScale(12),
  marginTop: scale(12),
  // backgroundColor: 'red',

  justifyContent: 'center',
},
filterBar: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: scale(20),
  gap: scale(10),
},

filterButton: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: scale(10),
  paddingHorizontal: scale(20),
  borderRadius: scale(24),
  borderWidth: 1,
  borderColor: '#e5e7eb',
  backgroundColor: '#f8fafc',
  marginRight: scale(8),
},
filterButtonActive: {
  borderColor: '#16a34a', // active green
  backgroundColor: '#e0f7ec',
},
filterButtonText: {
  color: '#64748b', // gray-500
  fontFamily: Fonts.inter.medium,
  fontSize: scale(12),
},
filterButtonTextActive: {
  color: '#16a34a', // active green
  fontFamily: Fonts.inter.bold,
},
fadeLeft: {
  position: 'absolute',
  left: 0,
  top: 0,
  bottom: 0,
  width: scale(16),
  zIndex: 1,
},
fadeRight: {
  position: 'absolute',
  right: 0,
  top: 0,
  bottom: 0,
  width: scale(16),
  zIndex: 1,
},
  notificationButton: {
    padding: scale(8),
  },
  searchContainer: {
    paddingHorizontal: scale(20),
    marginBottom: verticalScale(24),
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: scale(12),
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(12),
    gap: scale(12),
    borderWidth: 0,
    borderColor: Colors.border,
  },
  searchPlaceholder: {
    fontSize: Fonts.size.text,
    fontFamily: Fonts.inter.regular,
    color: Colors.textSecondary,
    flex: 1,
  },
  quickActions: {
    paddingHorizontal: scale(20),
    marginBottom: verticalScale(32),
  },
  actionButtons: {
    flexDirection: 'row',
    gap: scale(8),
    marginTop: verticalScale(16),
  },
  actionButton: {
    flex: 1,
  },
  section: {
    marginBottom: verticalScale(32),
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(20),
    marginBottom: verticalScale(16),
  },
    sectionHeaderPopuBrands: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: scale(20),
    marginBottom: verticalScale(16),
  },
  sectionTitle: {
    fontSize: Fonts.size.title,
    fontFamily: Fonts.inter.bold,
    color: Colors.text,
  },
  brandList: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: scale(8),
  gap: scale(16),
  paddingLeft: scale(4),
},
brandItem: {
  alignItems: 'center',
  marginRight: scale(12),
  width: scale(70),
  marginTop: scale(10),
  
},
brandImage: {
  width: scale(70),
  height: scale(70),
  borderRadius: scale(10),
  marginBottom: scale(10),
  resizeMode: 'cover',
  backgroundColor: '#f3f4f6',
},
brandName: {
  fontSize: Fonts.size.text,
  fontFamily: Fonts.inter.medium,
  color: Colors.text,
  textAlign: 'center',
},
 brandArrows: {
    position: 'absolute',
    right: 0,
    top: '50%',
    flexDirection: 'row',
    transform: [{ translateY: -20 }],
    zIndex: 2,
    gap: scale(4),
    paddingRight: scale(4),
  },
  arrowButton: {
    backgroundColor: '#fff',
    borderRadius: scale(16),
    padding: scale(6),
    marginLeft: scale(4),
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },

  seeAllText: {
    fontSize: scale(16),
    fontFamily: Fonts.inter.medium,
    color: Colors.primary,
  },
  featuredList: {
    paddingLeft: scale(20),
    gap: scale(16),
  },
  spotCard: {
    width: scale(240),
    backgroundColor: Colors.white,
    borderRadius: scale(12),
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  spotImage: {
    width: '100%',
    height: scale(120),
    resizeMode: 'cover',
  },
  spotInfo: {
    padding: scale(16),
  },
  spotName: {
    fontSize: scale(16),
    fontFamily: Fonts.inter.semiBold,
    color: Colors.text,
    marginBottom: verticalScale(4),
  },
  spotType: {
    fontSize: scale(14),
    fontFamily: Fonts.inter.regular,
    color: Colors.textSecondary,
    marginBottom: verticalScale(12),
  },
  spotMeta: {
    flexDirection: 'row',
    gap: scale(16),
  },

  ///////////////////////
dealImageWrapper: {
  width: '100%',
  height: scale(100),
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  borderTopLeftRadius: scale(12),
  borderTopRightRadius: scale(12),
  overflow: 'hidden',
},
dealImage: {
  width: '100%',
  height: '100%',
  borderTopLeftRadius: scale(12),
  borderTopRightRadius: scale(12),
  resizeMode: 'cover',
},
dealImageOverlay: {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderTopLeftRadius: scale(12),
  borderTopRightRadius: scale(12),
},
spotCard1: {
  width: wp(50),
  backgroundColor: Colors.white,
  borderRadius: scale(12),
  overflow: 'hidden',
  // borderWidth: 1,
  // borderColor: Colors.border,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.01,
  shadowRadius: 11,
  elevation: 4, // for Android
  marginVertical: scale(10)
},
  spotImage1: {
    width: '100%',
    height: scale(120),
    resizeMode: 'cover',
  },
  spotInfo1: {
    padding: scale(16),
  },
  spotName1: {
    fontSize: scale(16),
    fontFamily: Fonts.inter.semiBold,
    color: Colors.text,
    marginBottom: verticalScale(4),
  },
  spotType1: {
    fontSize: Fonts.size.text,
    fontFamily: Fonts.inter.regular,
    color: Colors.textSecondary,
    marginBottom: verticalScale(12),
  },
  spotMeta1: {
    flexDirection: 'row',
    gap: scale(16),
  },


  ///////////////////////
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(4),
  },
  metaText: {
    fontSize: scale(12),
    fontFamily: Fonts.inter.regular,
    color: Colors.textSecondary,
  },
  activityCard: {
    backgroundColor: Colors.white,
    marginHorizontal: scale(20),
    padding: scale(20),
    borderRadius: scale(12),
    borderWidth: 1,
    borderColor: Colors.border,
  },
  activityTitle: {
    fontSize: scale(18),
    fontFamily: Fonts.inter.semiBold,
    color: Colors.text,
    marginBottom: verticalScale(8),
  },
  activityText: {
    fontSize: scale(14),
    fontFamily: Fonts.inter.regular,
    color: Colors.textSecondary,
    lineHeight: scale(20),
    marginBottom: verticalScale(16),
  },
  exploreButton: {
    alignSelf: 'flex-start',
  },
});