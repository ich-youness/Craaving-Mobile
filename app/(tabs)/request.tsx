import { View, Text } from 'react-native'
import React from 'react'

const request = () => {
  return (
    <View>
      <Text>request</Text>
    </View>
  )
}

export default request

// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Settings, Heart, Clock, CreditCard, CircleHelp as HelpCircle, LogOut, CreditCard as Edit3, Star, MapPin } from 'lucide-react-native';
// import { Colors } from '@/constants/Colors';
// import { Fonts } from '@/constants/Fonts';
// import { scale, verticalScale } from 'react-native-size-matters';

// const menuItems = [
//   {
//     icon: Heart,
//     title: 'Favorites',
//     subtitle: 'Your liked food spots',
//     onPress: () => console.log('Favorites'),
//   },
//   {
//     icon: Clock,
//     title: 'Order History',
//     subtitle: 'View past orders',
//     onPress: () => console.log('Order History'),
//   },
//   {
//     icon: CreditCard,
//     title: 'Payment Methods',
//     subtitle: 'Manage your cards',
//     onPress: () => console.log('Payment Methods'),
//   },
//   {
//     icon: Settings,
//     title: 'Settings',
//     subtitle: 'App preferences',
//     onPress: () => console.log('Settings'),
//   },
//   {
//     icon: HelpCircle,
//     title: 'Help & Support',
//     subtitle: 'Get assistance',
//     onPress: () => console.log('Help & Support'),
//   },
// ];

// export default function ProfileScreen() {
//   const user = {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     location: 'San Francisco, CA',
//     memberSince: 'Member since 2024',
//     rating: 4.8,
//     completedOrders: 12,
//     avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
//   };

//   const handleEditProfile = () => {
//     console.log('Edit profile');
//   };

//   const handleLogout = () => {
//     console.log('Logout');
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>Profile</Text>
//           <TouchableOpacity onPress={handleEditProfile} style={styles.editButton}>
//             <Edit3 size={scale(20)} color={Colors.primary} strokeWidth={2} />
//           </TouchableOpacity>
//         </View>

//         {/* User Info */}
//         <View style={styles.userSection}>
//           <View style={styles.avatarContainer}>
//             <Image source={{ uri: user.avatar }} style={styles.avatar} />
//             <View style={styles.ratingBadge}>
//               <Star size={scale(12)} color={Colors.warning} fill={Colors.warning} />
//               <Text style={styles.ratingText}>{user.rating}</Text>
//             </View>
//           </View>
          
//           <View style={styles.userInfo}>
//             <Text style={styles.userName}>{user.name}</Text>
//             <Text style={styles.userEmail}>{user.email}</Text>
//             <View style={styles.locationRow}>
//               <MapPin size={scale(14)} color={Colors.textSecondary} />
//               <Text style={styles.userLocation}>{user.location}</Text>
//             </View>
//             <Text style={styles.memberSince}>{user.memberSince}</Text>
//           </View>
//         </View>

//         {/* Stats */}
//         <View style={styles.statsContainer}>
//           <View style={styles.statItem}>
//             <Text style={styles.statNumber}>{user.completedOrders}</Text>
//             <Text style={styles.statLabel}>Orders</Text>
//           </View>
//           <View style={styles.statDivider} />
//           <View style={styles.statItem}>
//             <Text style={styles.statNumber}>{user.rating}</Text>
//             <Text style={styles.statLabel}>Rating</Text>
//           </View>
//           <View style={styles.statDivider} />
//           <View style={styles.statItem}>
//             <Text style={styles.statNumber}>3</Text>
//             <Text style={styles.statLabel}>Reviews</Text>
//           </View>
//         </View>

//         {/* Menu Items */}
//         <View style={styles.menuSection}>
//           {menuItems.map((item, index) => {
//             const IconComponent = item.icon;
//             return (
//               <TouchableOpacity 
//                 key={index} 
//                 style={styles.menuItem}
//                 onPress={item.onPress}
//                 activeOpacity={0.7}
//               >
//                 <View style={styles.menuIconContainer}>
//                   <IconComponent size={scale(20)} color={Colors.primary} strokeWidth={2} />
//                 </View>
//                 <View style={styles.menuContent}>
//                   <Text style={styles.menuTitle}>{item.title}</Text>
//                   <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
//                 </View>
//                 <View style={styles.menuChevron}>
//                   <Text style={styles.chevronText}>›</Text>
//                 </View>
//               </TouchableOpacity>
//             );
//           })}
//         </View>

//         {/* Logout */}
//         <View style={styles.logoutSection}>
//           <TouchableOpacity 
//             style={styles.logoutButton}
//             onPress={handleLogout}
//             activeOpacity={0.7}
//           >
//             <LogOut size={scale(20)} color={Colors.error} strokeWidth={2} />
//             <Text style={styles.logoutText}>Sign Out</Text>
//           </TouchableOpacity>
//         </View>

//         {/* App Version */}
//         <View style={styles.versionSection}>
//           <Text style={styles.versionText}>Craaving v1.0.0</Text>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.background,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: scale(20),
//     paddingVertical: verticalScale(16),
//   },
//   headerTitle: {
//     fontSize: scale(24),
//     fontFamily: Fonts.inter.bold,
//     color: Colors.text,
//   },
//   editButton: {
//     padding: scale(8),
//   },
//   userSection: {
//     alignItems: 'center',
//     paddingHorizontal: scale(20),
//     paddingVertical: verticalScale(24),
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginBottom: verticalScale(16),
//   },
//   avatar: {
//     width: scale(80),
//     height: scale(80),
//     borderRadius: scale(40),
//     borderWidth: 3,
//     borderColor: Colors.primary,
//   },
//   ratingBadge: {
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//     backgroundColor: Colors.white,
//     borderRadius: scale(12),
//     paddingHorizontal: scale(8),
//     paddingVertical: scale(4),
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: scale(2),
//     borderWidth: 2,
//     borderColor: Colors.warning,
//   },
//   ratingText: {
//     fontSize: scale(12),
//     fontFamily: Fonts.inter.semiBold,
//     color: Colors.text,
//   },
//   userInfo: {
//     alignItems: 'center',
//   },
//   userName: {
//     fontSize: scale(24),
//     fontFamily: Fonts.inter.bold,
//     color: Colors.text,
//     marginBottom: verticalScale(4),
//   },
//   userEmail: {
//     fontSize: scale(16),
//     fontFamily: Fonts.inter.regular,
//     color: Colors.textSecondary,
//     marginBottom: verticalScale(8),
//   },
//   locationRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: scale(4),
//     marginBottom: verticalScale(4),
//   },
//   userLocation: {
//     fontSize: scale(14),
//     fontFamily: Fonts.inter.regular,
//     color: Colors.textSecondary,
//   },
//   memberSince: {
//     fontSize: scale(14),
//     fontFamily: Fonts.inter.regular,
//     color: Colors.textLight,
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     backgroundColor: Colors.white,
//     marginHorizontal: scale(20),
//     borderRadius: scale(12),
//     paddingVertical: verticalScale(20),
//     marginBottom: verticalScale(24),
//     borderWidth: 1,
//     borderColor: Colors.border,
//   },
//   statItem: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   statNumber: {
//     fontSize: scale(24),
//     fontFamily: Fonts.inter.bold,
//     color: Colors.text,
//     marginBottom: verticalScale(4),
//   },
//   statLabel: {
//     fontSize: scale(14),
//     fontFamily: Fonts.inter.regular,
//     color: Colors.textSecondary,
//   },
//   statDivider: {
//     width: 1,
//     backgroundColor: Colors.border,
//     marginVertical: verticalScale(8),
//   },
//   menuSection: {
//     backgroundColor: Colors.white,
//     marginHorizontal: scale(20),
//     borderRadius: scale(12),
//     marginBottom: verticalScale(24),
//     borderWidth: 1,
//     borderColor: Colors.border,
//     overflow: 'hidden',
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: scale(20),
//     paddingVertical: verticalScale(16),
//     borderBottomWidth: 1,
//     borderBottomColor: Colors.borderLight,
//   },
//   menuIconContainer: {
//     width: scale(40),
//     height: scale(40),
//     borderRadius: scale(20),
//     backgroundColor: Colors.surfaceVariant,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: scale(16),
//   },
//   menuContent: {
//     flex: 1,
//   },
//   menuTitle: {
//     fontSize: scale(16),
//     fontFamily: Fonts.inter.semiBold,
//     color: Colors.text,
//     marginBottom: verticalScale(2),
//   },
//   menuSubtitle: {
//     fontSize: scale(14),
//     fontFamily: Fonts.inter.regular,
//     color: Colors.textSecondary,
//   },
//   menuChevron: {
//     justifyContent: 'center',
//   },
//   chevronText: {
//     fontSize: scale(20),
//     color: Colors.textLight,
//   },
//   logoutSection: {
//     paddingHorizontal: scale(20),
//     marginBottom: verticalScale(24),
//   },
//   logoutButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: Colors.white,
//     paddingVertical: verticalScale(16),
//     borderRadius: scale(12),
//     borderWidth: 1,
//     borderColor: Colors.error,
//     gap: scale(8),
//   },
//   logoutText: {
//     fontSize: scale(16),
//     fontFamily: Fonts.inter.semiBold,
//     color: Colors.error,
//   },
//   versionSection: {
//     alignItems: 'center',
//     paddingVertical: verticalScale(16),
//   },
//   versionText: {
//     fontSize: scale(12),
//     fontFamily: Fonts.inter.regular,
//     color: Colors.textLight,
//   },
// });