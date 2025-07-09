// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { useRouter } from 'expo-router';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { ArrowLeft } from 'lucide-react-native';
// import CustomInput from '@/components/CustomInput';
// import CustomButton from '@/components/CustomButton';
// import SocialButton from '@/components/SocialButton';
// import { Colors } from '@/constants/Colors';
// import { Fonts } from '@/constants/Fonts';
// import { scale, verticalScale } from 'react-native-size-matters';

// export default function GetStartedScreen() {
//   const [email, setEmail] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();

//   const handleBack = () => {
//     router.back();
//   };

//   const handleContinue = async () => {
//     if (!email.trim()) return;
    
//     setIsLoading(true);
//     // Simulate API call
//     setTimeout(() => {
//       setIsLoading(false);
//       router.push('/location');
//     }, 1000);
//   };

//   const handleGoogleLogin = () => {
//     console.log('Google login pressed');
//   };

//   const handleAppleLogin = () => {
//     console.log('Apple login pressed');
//   };

//   const isValidEmail = (email: string) => {
//     return /\S+@\S+\.\S+/.test(email);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={handleBack} style={styles.backButton}>
//           <ArrowLeft size={scale(24)} color={Colors.text} />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Get Started</Text>
//         <View style={styles.placeholder} />
//       </View>

//       <View style={styles.content}>
//         <View style={styles.titleContainer}>
//           <Text style={styles.title}>What's your email?</Text>
//           <Text style={styles.subtitle}>
//             We'll use this to create your account and keep you updated.
//           </Text>
//         </View>

//         <View style={styles.formContainer}>
//           <CustomInput
//             label="Email Address"
//             value={email}
//             onChangeText={setEmail}
//             placeholder="Enter your email"
//             keyboardType="email-address"
//             autoCapitalize="none"
//             autoComplete="email"
//             required
//           />

//           <CustomButton
//             title={isLoading ? "Creating Account..." : "Continue"}
//             onPress={handleContinue}
//             disabled={!isValidEmail(email) || isLoading}
//             fullWidth
//             style={styles.continueButton}
//           />
//         </View>

//         <View style={styles.dividerContainer}>
//           <View style={styles.divider} />
//           <Text style={styles.dividerText}>or</Text>
//           <View style={styles.divider} />
//         </View>

//         <View style={styles.socialContainer}>
//           <SocialButton
//             title="Continue with Google"
//             onPress={handleGoogleLogin}
//             variant="google"
//             icon={
//               <View style={styles.googleIcon}>
//                 <Text style={styles.googleIconText}>G</Text>
//               </View>
//             }
//           />
          
//           <SocialButton
//             title="Continue with Apple"
//             onPress={handleAppleLogin}
//             variant="apple"
//             icon={
//               <View style={styles.appleIcon}>
//                 <Text style={styles.appleIconText}>🍎</Text>
//               </View>
//             }
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
//   placeholder: {
//     width: scale(32),
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
//   formContainer: {
//     marginBottom: verticalScale(32),
//   },
//   continueButton: {
//     marginTop: verticalScale(8),
//   },
//   dividerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: verticalScale(32),
//   },
//   divider: {
//     flex: 1,
//     height: 1,
//     backgroundColor: Colors.border,
//   },
//   dividerText: {
//     fontSize: scale(14),
//     fontFamily: Fonts.inter.regular,
//     color: Colors.textSecondary,
//     marginHorizontal: scale(16),
//   },
//   socialContainer: {
//     gap: verticalScale(12),
//   },
//   googleIcon: {
//     width: scale(20),
//     height: scale(20),
//     borderRadius: scale(4),
//     backgroundColor: Colors.white,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: Colors.border,
//   },
//   googleIconText: {
//     fontSize: scale(14),
//     fontFamily: Fonts.inter.bold,
//     color: '#4285f4',
//   },
//   appleIcon: {
//     width: scale(20),
//     height: scale(20),
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   appleIconText: {
//     fontSize: scale(16),
//   },
// });

import { View, Text, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { scale } from 'react-native-size-matters';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const getStarted = () => {
  return (
    <SafeAreaView style={styles.container}>

  {/* Top Section */}
  <View style={styles.topSection}>
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.replace('/welcome')}>
        <Icon1 name="arrow-back-ios" size={20} color="#008A39" />
        <Text style={styles.backText}>Go Back</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.logoContainer}>
      <Image source={require('../assets/images/logo2.png')} style={styles.logo} />
      <Text style={styles.logoText}>Craaving</Text>
    </View>

    <View style={styles.textBlock}>
      <Text style={styles.title}>Let’s Get You Started</Text>
      <Text style={styles.subtitle}>Provide your email address, let’s get you started</Text>

      <View style={styles.inputContainer}>
        <Icon name="email" size={22} color="#888" style={styles.inputIcon} />
        <TextInput placeholder="Email address" placeholderTextColor="#888" style={styles.input} />
      </View>

      <TouchableOpacity>
        <Text style={styles.switchMethodText}>Use Phone Number Instead</Text>
      </TouchableOpacity>
    </View>
  </View>

  {/* Bottom Section */}
  <View style={styles.bottomSection}>
    <TouchableOpacity style={styles.primaryButton} onPress={() => router.replace('/location')}>
      <Text style={styles.primaryButtonText}>Create an account</Text>
    </TouchableOpacity>

    <View style={styles.dividerContainer}>
      <View style={styles.dividerLine} />
      <Text style={styles.dividerText}>or</Text>
      <View style={styles.dividerLine} />
    </View>

    <TouchableOpacity style={styles.socialButton}>
      <Icon name="google" size={20} color="#008A39" />
      <Text style={styles.socialButtonText}>Login with Google</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.socialButton}>
      <Icon name="apple" size={22} color="#000" />
      <Text style={styles.socialButtonText}>Login with Apple</Text>
    </TouchableOpacity>

    <Text style={styles.termsText}>
      By continuing you’re agreeing to our Terms and Conditions of Services
    </Text>
  </View>

</SafeAreaView>


  );
};

export default getStarted;
const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#fff',
  paddingHorizontal: scale(20),
  justifyContent: 'space-between', // Helps position top/bottom
},
topSection: {
  flex: 1,
  paddingTop: scale(10),
},
textBlock: {
  gap: scale(12), // vertical spacing between title, subtitle, input, etc.
  alignItems: 'center',
  marginTop: scale(20),
},
bottomSection: {
  paddingBottom: scale(30),
  alignItems: 'center',
  gap: scale(15), // spacing between buttons and elements
},
primaryButton: {
  backgroundColor: '#00ac47',
  paddingVertical: scale(12),
  paddingHorizontal: scale(80),
  borderRadius: 25,
},
socialButton: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 15,
  paddingVertical: scale(10),
  width: '100%',
  gap: scale(10),
},

  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   paddingHorizontal: scale(20),
  // },
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
  textContainer: {
    alignItems: 'center',
    marginBottom: scale(30),
  },
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: scale(10),
    width: '100%',
    height: scale(42),
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: scale(14),
  },
  switchMethod: {
    marginTop: scale(12),
  },
  switchMethodText: {
    fontSize: scale(12),
    color: '#797979d8',
    fontFamily: 'InterTight_400Regular',
  },
  actionContainer: {
    marginTop: scale(20),
    alignItems: 'center',
  },
  // primaryButton: {
  //   backgroundColor: '#00ac47',
  //   paddingVertical: scale(12),
  //   paddingHorizontal: scale(80),
  //   borderRadius: 25,
  // },
  primaryButtonText: {
    fontSize: scale(16),
    color: '#fff',
    fontFamily: 'InterTight_400Regular',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(25),
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#888',
    fontSize: scale(14),
  },
  socialContainer: {
    alignItems: 'center',
  },
  // socialButton: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderWidth: 1,
  //   borderColor: '#ccc',
  //   borderRadius: 15,
  //   paddingVertical: scale(10),
  //   paddingHorizontal: scale(20),
  //   width: '100%',
  //   marginBottom: scale(12),
  //   gap: scale(10),
  // },
  socialButtonText: {
    fontSize: scale(15),
    color: '#333',
  },
  termsText: {
    fontSize: scale(12),
    color: '#797979d8',
    textAlign: 'center',
    marginTop: scale(20),
    maxWidth: scale(280),
    
  },
});
          