import { useSignIn } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Lock } from 'lucide-react-native'
import { Fonts } from '@/constants/Fonts'
import React from 'react'

export default function Page() {
  const { signIn, setActive, isLoaded } = useSignIn()
  const router = useRouter()

  const [emailAddress, setEmailAddress] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')

  // Handle the submission of the sign-in form
  const onSignInPress = async () => {
    if (!isLoaded) return

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      })

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.replace('/(tabs)')
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2))
        setError('Sign in failed. Please check your credentials.')
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
      setError('An error occurred. Please try again.')
    }
  }

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
          <Image source={require('../../assets/images/logo2.png')} style={styles.logo} />
          <Text style={styles.logoText}>Craaving</Text>
        </View>

        <View style={styles.textBlock}>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.subtitle}>Sign in to your account to continue</Text>

          <View style={styles.inputContainer}>
            <Icon name="email" size={22} color="#888" style={styles.inputIcon} />
            <TextInput 
              placeholder="Enter email" 
              placeholderTextColor="#888" 
              style={styles.input} 
              value={emailAddress} 
              onChangeText={(email) => setEmailAddress(email)}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <Lock size={22} color="#888" style={styles.inputIcon} />
            <TextInput 
              value={password}
              placeholder="Enter password"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)} 
              placeholderTextColor="#888" 
              style={styles.input} 
            />
          </View>

          {error ? (
            <Text style={styles.errorText}>{error}</Text>
          ) : null}

          <TouchableOpacity style={styles.forgotPassword}>
            {/* <Text style={styles.forgotPasswordText}>Forgot Password?</Text> */}
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.primaryButton} onPress={onSignInPress}>
          <Text style={styles.primaryButtonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={20} color="#008A39" />
          <Text style={styles.socialButtonText}>Sign in with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Icon name="apple" size={22} color="#000" />
          <Text style={styles.socialButtonText}>Sign in with Apple</Text>
        </TouchableOpacity>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account? </Text>
          <Link href="/sign-up" asChild>
            <TouchableOpacity>
              <Text style={styles.signUpLink}>Sign up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: scale(20),
    justifyContent: 'space-between',
  },
  topSection: {
    flex: 1,
    paddingTop: scale(10),
  },
  textBlock: {
    gap: scale(12),
    alignItems: 'center',
    marginTop: scale(20),
  },
  bottomSection: {
    paddingBottom: scale(30),
    alignItems: 'center',
    gap: scale(15),
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
    fontFamily: Fonts.outfit.regular,
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
    fontFamily: Fonts.outfit.bold,
    color: '#008A39',
  },
  title: {
    fontSize: scale(24),
    fontFamily: Fonts.outfit.bold,
    color: '#008A39',
    textAlign: 'center',
    marginBottom: scale(8),
  },
  subtitle: {
    fontSize: scale(14),
    fontFamily: Fonts.outfit.regular,
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
    marginBottom: scale(8),
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: scale(14),
    fontFamily: Fonts.outfit.regular,
  },
  errorText: {
    color: '#d32f2f',
    fontSize: scale(12),
    fontFamily: Fonts.outfit.regular,
    marginTop: scale(5),
    textAlign: 'center',
  },
  forgotPassword: {
    alignSelf: 'flex-start',
    
    margin: scale(5),
  },
  forgotPasswordText: {
    fontSize: scale(12),
    fontFamily: Fonts.outfit.regular,
    color: '#008A39',
  },
  primaryButton: {
    backgroundColor: '#00ac47',
    paddingVertical: scale(12),
    paddingHorizontal: scale(80),
    borderRadius: 25,
  },
  primaryButtonText: {
    fontSize: scale(16),
    fontFamily: Fonts.outfit.bold,
    color: '#fff',
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
    fontFamily: Fonts.outfit.regular,
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
  socialButtonText: {
    fontSize: scale(15),
    fontFamily: Fonts.outfit.regular,
    color: '#333',
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(20),
  },
  signUpText: {
    fontSize: scale(14),
    fontFamily: Fonts.outfit.regular,
    color: '#666',
  },
  signUpLink: {
    fontSize: scale(14),
    fontFamily: Fonts.outfit.bold,
    color: '#008A39',
  },
})