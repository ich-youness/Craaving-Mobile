// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { useRouter } from 'expo-router';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { ArrowLeft, Mail } from 'lucide-react-native';
// import CustomInput from '@/components/CustomInput';
// import CustomButton from '@/components/CustomButton';
// import { Colors } from '@/constants/Colors';
// import { Fonts } from '@/constants/Fonts';
// import { scale, verticalScale } from 'react-native-size-matters';

// export default function GetVerifiedScreen() {
//   const [email, setEmail] = useState('user@example.com'); // Mock email
//   const [verificationCode, setVerificationCode] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [resendTimer, setResendTimer] = useState(60);
//   const [canResend, setCanResend] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setResendTimer((prev) => {
//         if (prev <= 1) {
//           setCanResend(true);
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleBack = () => {
//     router.back();
//   };

//   const handleVerify = async () => {
//     if (!verificationCode.trim()) return;

//     setIsLoading(true);
//     // Simulate verification process
//     setTimeout(() => {
//       setIsLoading(false);
//       router.push('/(tabs)');
//     }, 2000);
//   };

//   const handleResend = () => {
//     if (!canResend) return;

//     setCanResend(false);
//     setResendTimer(60);
//     console.log('Resending verification email');
//   };

//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs.toString().padStart(2, '0')}`;
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={handleBack} style={styles.backButton}>
//           <ArrowLeft size={scale(24)} color={Colors.text} />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Verify Email</Text>
//         <View style={styles.placeholder} />
//       </View>

//       <View style={styles.content}>
//         <View style={styles.iconContainer}>
//           <View style={styles.mailIcon}>
//             <Mail size={scale(32)} color={Colors.primary} />
//           </View>
//         </View>

//         <View style={styles.titleContainer}>
//           <Text style={styles.title}>Check your email</Text>
//           <Text style={styles.subtitle}>
//             We've sent a verification code to{'\n'}
//             <Text style={styles.emailText}>{email}</Text>
//           </Text>
//         </View>

//         <View style={styles.formContainer}>
//           <CustomInput
//             label="Verification Code"
//             value={verificationCode}
//             onChangeText={setVerificationCode}
//             placeholder="Enter 6-digit code"
//             keyboardType="numeric"
//             maxLength={6}
//             autoComplete="one-time-code"
//             required
//           />

//           <CustomButton
//             title={isLoading ? "Verifying..." : "Verify & Continue"}
//             onPress={handleVerify}
//             disabled={verificationCode.length !== 6 || isLoading}
//             fullWidth
//             style={styles.verifyButton}
//           />
//         </View>

//         <View style={styles.resendContainer}>
//           <Text style={styles.resendText}>
//             Didn't receive the code?{' '}
//           </Text>
//           {canResend ? (
//             <TouchableOpacity onPress={handleResend}>
//               <Text style={styles.resendLink}>Resend</Text>
//             </TouchableOpacity>
//           ) : (
//             <Text style={styles.timerText}>
//               Resend in {formatTime(resendTimer)}
//             </Text>
//           )}
//         </View>

//         <TouchableOpacity style={styles.changeEmailButton}>
//           <Text style={styles.changeEmailText}>Change email address</Text>
//         </TouchableOpacity>
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
//     alignItems: 'center',
//   },
//   iconContainer: {
//     marginTop: verticalScale(48),
//     marginBottom: verticalScale(32),
//   },
//   mailIcon: {
//     width: scale(80),
//     height: scale(80),
//     borderRadius: scale(40),
//     backgroundColor: Colors.surfaceVariant,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   titleContainer: {
//     alignItems: 'center',
//     marginBottom: verticalScale(40),
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
//     textAlign: 'center',
//     lineHeight: scale(24),
//   },
//   emailText: {
//     fontFamily: Fonts.inter.semiBold,
//     color: Colors.text,
//   },
//   formContainer: {
//     width: '100%',
//     marginBottom: verticalScale(32),
//   },
//   verifyButton: {
//     marginTop: verticalScale(8),
//   },
//   resendContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: verticalScale(24),
//   },
//   resendText: {
//     fontSize: scale(14),
//     fontFamily: Fonts.inter.regular,
//     color: Colors.textSecondary,
//   },
//   resendLink: {
//     fontSize: scale(14),
//     fontFamily: Fonts.inter.semiBold,
//     color: Colors.primary,
//   },
//   timerText: {
//     fontSize: scale(14),
//     fontFamily: Fonts.inter.regular,
//     color: Colors.textLight,
//   },
//   changeEmailButton: {
//     paddingVertical: verticalScale(12),
//   },
//   changeEmailText: {
//     fontSize: scale(14),
//     fontFamily: Fonts.inter.medium,
//     color: Colors.primary,
//   },
// });

import { View, Text, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';


const { width, height } = Dimensions.get('window');

const GetStarted = () => {

     const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer === 0) {
      setTimer(60);
    }
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : prev));
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);
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
        <Text style={styles.bigText}>Let’s Get You Verified!</Text>
        <Text style={styles.smallText}>Kindly check your mail, a verification OTP has been sent to you!</Text>
        <View style={styles.inputContainer}>
          <Icon name="mail" size={24} color="#888" style={styles.icon} />

          <TextInput
          style={styles.input}
          placeholder="Email address"
          placeholderTextColor="#888"
          />
        </View>



        <TouchableOpacity
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
            > 
           <Text style={[styles.lightText, { color: '#00672B' }]}>
      Resend Link ({timer})
    </Text>
            
            </TouchableOpacity>
    </View>

    {/* two bottom buttons and a text */}
    <View style={styles.buttonContainer} >
            <TouchableOpacity style={styles.button}  onPress={() => {
              // Navigate to the next screen
                router.replace('./(tabs)');  
                }
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

export default GetStarted

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