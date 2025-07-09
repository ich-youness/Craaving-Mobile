// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import { useRouter } from 'expo-router';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Lock, Mail, User  } from 'lucide-react-native';

// import CustomInput from '@/components/CustomInput';
// import CustomButton from '@/components/CustomButton';
// import { Colors } from '@/constants/Colors';
// import { Fonts } from '@/constants/Fonts';
// import { scale, verticalScale } from 'react-native-size-matters';

// export default function SetupProfileScreen() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     username: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();

//   const handleBack = () => {
//     router.back();
//   };

//   const updateFormField = (field: string, value: string) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//     // Clear error when user starts typing
//     if (errors[field]) {
//       setErrors(prev => ({ ...prev, [field]: '' }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};

//     if (!formData.firstName.trim()) {
//       newErrors.firstName = 'First name is required';
//     }

//     if (!formData.lastName.trim()) {
//       newErrors.lastName = 'Last name is required';
//     }

//     if (!formData.username.trim()) {
//       newErrors.username = 'Username is required';
//     } else if (formData.username.length < 3) {
//       newErrors.username = 'Username must be at least 3 characters';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }

//     if (!formData.confirmPassword) {
//       newErrors.confirmPassword = 'Please confirm your password';
//     } else if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleContinue = async () => {
//     if (!validateForm()) return;

//     setIsLoading(true);
//     // Simulate API call
//     setTimeout(() => {
//       setIsLoading(false);
//       router.push('/getVerified');
//     }, 1500);
//   };

//   const isFormValid = formData.firstName && formData.lastName && formData.username && 
//                      formData.password && formData.confirmPassword;

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={handleBack} style={styles.backButton}>
//           <ArrowLeft size={scale(24)} color={Colors.text} />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Setup Profile</Text>
//         <View style={styles.placeholder} />
//       </View>

//       <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
//         <View style={styles.titleContainer}>
//           <Text style={styles.title}>Tell us about yourself</Text>
//           <Text style={styles.subtitle}>
//             Create your profile to get started with Craaving.
//           </Text>
//         </View>

//         <View style={styles.formContainer}>
//           <View style={styles.nameRow}>
//             <CustomInput
//               label="First Name"
//               value={formData.firstName}
//               onChangeText={(value) => updateFormField('firstName', value)}
//               placeholder="Enter first name"
//               autoComplete="given-name"
//               error={errors.firstName}
//               required
//               style={styles.nameInput}
//             />
//             <CustomInput
//               label="Last Name"
//               value={formData.lastName}
//               onChangeText={(value) => updateFormField('lastName', value)}
//               placeholder="Enter last name"
//               autoComplete="family-name"
//               error={errors.lastName}
//               required
//               style={styles.nameInput}
//             />
//           </View>

//           <CustomInput
//             label="Username"
//             value={formData.username}
//             onChangeText={(value) => updateFormField('username', value)}
//             placeholder="Choose a username"
//             autoComplete="username"
//             autoCapitalize="none"
//             error={errors.username}
//             helperText="This will be your unique identifier on Craaving"
//             required
//           />

//           <CustomInput
//             label="Password"
//             value={formData.password}
//             onChangeText={(value) => updateFormField('password', value)}
//             placeholder="Create a password"
//             secureTextEntry
//             autoComplete="new-password"
//             error={errors.password}
//             helperText="Must be at least 6 characters"
//             required
//           />

//           <CustomInput
//             label="Confirm Password"
//             value={formData.confirmPassword}
//             onChangeText={(value) => updateFormField('confirmPassword', value)}
//             placeholder="Confirm your password"
//             secureTextEntry
//             autoComplete="new-password"
//             error={errors.confirmPassword}
//             required
//           />
//         </View>
//       </ScrollView>

//       <View style={styles.footer}>
//         <CustomButton
//           title={isLoading ? "Creating Profile..." : "Continue"}
//           onPress={handleContinue}
//           disabled={!isFormValid || isLoading}
//           fullWidth
//         />
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
//     paddingBottom: verticalScale(100),
//   },
//   nameRow: {
//     flexDirection: 'row',
//     gap: scale(12),
//   },
//   nameInput: {
//     flex: 1,
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     paddingHorizontal: scale(20),
//     paddingVertical: verticalScale(24),
//     backgroundColor: Colors.white,
//     borderTopWidth: 1,
//     borderTopColor: Colors.borderLight,
//   },
// });

import { View, Text, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';


const { width, height } = Dimensions.get('window');
const location = () => {
  return (
    <SafeAreaView style={styles.container}>
        {/* bar with back and continue buttons */}
    <View style={styles.NavBar}>

      <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}
          onPress={() => {
            router.replace('/location');
          }}
        >
          <Icon name="arrow-back-ios" size={20} color="#008A39" style={{ marginRight: 4 }} />
          <Text style={{ color: '#008A39', fontSize: scale(16), fontWeight: '500' }}>Go Back</Text>
        </TouchableOpacity>
      {/* <TouchableOpacity>
        <Text  onPress={() => {
          // Navigate to the next screen
          router.replace('/login');
        }} style={{ color:'#008A39', fontSize: scale(16), fontWeight:400}}> Continue</Text>
      </TouchableOpacity> */}
{/* logo of the app */}
    </View>
    
      <View style={styles.Logo}>
        <Image
                        source={require('../assets/images/logo2.png')}
                        style={{ width: scale(33.65), height: scale(33.65) }}
                        resizeMode="contain" 
        />
        <Text style={{ fontSize: scale(24), fontWeight: '500', color:'#008A39' }}>Craaving</Text>  

      </View>
    <View style={styles.Text}>  
        <Text style={styles.bigText}>Set Up Your Profile</Text>
        <Text style={styles.smallText}>Kindly provide us with neccessary detail to get you started</Text>
        <View style={styles.inputContainer}>
          <User size={24} color="#888" style={styles.icon} />
          {/* <Icon name="person" size={24} color="#888" style={styles.icon} /> */}

          <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputContainer}>
          <User size={24} color="#888" style={styles.icon} />

          <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputContainer}>
          <Mail  size={24} color="#888" style={styles.icon} />
          

          <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputContainer}>
          <Lock  size={24} color="#888" style={styles.icon}/>
          

          <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputContainer}>
          <Lock  size={24} color="#888" style={styles.icon}/>

          <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#888"
          />
        </View>
        {/* <TouchableOpacity
            // onPress={() => {
            // // Navigate to the next screen
            // router.replace('/login');
            // }}
            style={{
            backgroundColor: '#none',
            padding: scale(10),
            borderRadius: scale(8),
            marginTop: scale(10),
            width: scale(200),
            alignItems: 'center',
            
            }}
            > <Text style={styles.lightText}>Use Current address</Text> </TouchableOpacity> */}
    </View>

    {/* two bottom buttons and a text */}
    <View style={styles.buttonContainer} >
            <TouchableOpacity style={styles.button}  onPress={() => {
              // Navigate to the next screen
                router.replace('/getVerified');  }
            }>
              <Text style={styles.buttonText} >Continue</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={[styles.button, styles.outlined]} onPress={() => {
              // Navigate to the next screen
              router.replace('/setupProfile');
            }
            }>
              <Text style={[styles.buttonText, { color: '#00ac47' }]} > Skip and do it later! </Text>
            </TouchableOpacity> */}
            
    
          </View>
    


    </SafeAreaView>
  )
}

export default location

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
        
        marginTop: 20,
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
   buttonContainer: {
    flexDirection: 'column',
    
    paddingHorizontal: scale(20),
    marginTop: scale(80),
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
  Text: {
    flexDirection: 'column',
    alignItems:'center',
    // justifyContent:'center',
    // width: scale(220),
    marginHorizontal:scale(10)   ,  
  },
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

})