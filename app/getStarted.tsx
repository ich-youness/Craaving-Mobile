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
      <TouchableOpacity style={styles.backButton} onPress={() => router.replace('/login')}>
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
